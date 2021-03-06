import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useQuery, usePaginatedQuery, queryCache } from "react-query";

import { range, useURLQuery } from "../../utils";
import { fetchTotal, fetchArtefacts } from "../../utils/fetch";

import Stack from "../../components/Stack";
import SectionTitleBar from "../../components/SectionTitleBar";
import GalleryItem from "../../components/GalleryItem";
import Shim from "../../components/Shim";
import Pagination from "../../components/Pagination";
import GalleryModal from "../../components/GalleryModal";

const Gallery = styled.section`
  position: relative;
  display: flex;
`;

const GalleryTitleBar = styled(SectionTitleBar)`
  padding-top: 140px;
`;

const GalleryContent = styled(Stack)`
  padding: 150px 100px 50px 100px;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 150px 75px 50px 75px;
  }

  @media (max-width: 896px) {
    padding: 150px 50px 50px 50px;
  }

  @media (max-width: 600px) {
    padding: 150px 20px 50px 20px;
  }
`;

const GalleryGrid = styled.ul`
  --auto-grid-min-size: 300px;

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  gap: var(--rhythm);

  @media (max-width: 896px) {
    --auto-grid-min-size: 200px;
  }
`;

const GalleryItemShim = styled(Shim)`
  border-radius: 8px;
  height: 300px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const Controls = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 107px;
  z-index: 999;
  width: calc(100% + 200px);
  padding: 0px 100px 10px 100px;
  background-color: var(--color-background);
  transform: translateX(-100px);
  // box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  // & > * + * {
  //   margin-top: 15px;

  //   @media (max-width: 600px) {
  //     margin-top: 10px;
  //   }
  // }

  @media (max-width: 1200px) {
    width: calc(100% + 150px);
    transform: translateX(-75px);
    padding: 0px 75px 10px 75px;
  }

  @media (max-width: 896px) {
    width: calc(100% + 100px);
    transform: translateX(-50px);
    padding: 0px 50px 10px 50px;
  }

  @media (max-width: 600px) {
    top: 84px;
    width: calc(100% + 40px);
    transform: translateX(-20px);
    padding: 0px 20px 5px 20px;
  }
`;

const Count = styled.p`
  font-family: var(--font-primary);
  font-size: 24px;
  color: var(--color-text);
  padding-left: 12px;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 896px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

// export async function getStaticProps() {
//   const fetchedTotal = await fetch(
//     "https://the-next-stage.herokuapp.com/api/artefacts/count"
//   ).then((res) => res.json());
//   const fetchedArtefacts = await fetch(
//     `https://the-next-stage.herokuapp.com/api/artefact?page=1`
//   ).then((res) => res.json());

//   return {
//     props: {
//       total: fetchedTotal.data,
//       artefacts: fetchedArtefacts.data,
//     },
//   };
// }

const GalleryPage = (/*{ total, artefacts }*/) => {
  const itemRefs = useRef([]);
  const pageQuery = parseInt(useURLQuery().get("page"), 10);

  const [page, setPage] = useState(pageQuery ? pageQuery : 1);
  const [content, setContent] = useState(null);
  const [contentIdx, setContentIdx] = useState(1);

  const { status: totalStatus, data: total } = useQuery("total", fetchTotal, {
    initialData: 0,
    initialStale: true,
  });

  const {
    status: artefactsStatus,
    resolvedData: artefacts,
  } = usePaginatedQuery(["artefacts", page], () => fetchArtefacts(page));

  useEffect(() => {
    history.pushState({}, "", `/gallery?page=${page}`);
  }, [page]);

  useEffect(() => {
    if (page + 1 <= Math.ceil(total / 6)) {
      queryCache.prefetchQuery(["artefacts", page + 1], () =>
        fetchArtefacts(page + 1)
      );
    }
  }, [page, total]);

  const closeModal = (idx) => {
    setContent(null);
    history.pushState({}, "", `/gallery?page=${page}`);
    itemRefs.current[idx].focus();
  };
  const goToNextItem = (idx) => {
    if (idx + 1 <= artefacts.length - 1) {
      setContentIdx(idx + 1);
      setContent(artefacts[idx + 1]);
      history.pushState({}, "", `/gallery/${artefacts[idx + 1].id}`);
    }
  };
  const goToPreviousItem = (idx) => {
    if (idx - 1 >= 0) {
      setContentIdx(idx - 1);
      setContent(artefacts[idx - 1]);
      history.pushState({}, "", `/gallery/${artefacts[idx - 1].id}`);
    }
  };

  return (
    <Gallery>
      <GalleryTitleBar level={1} position="left">
        gallery
      </GalleryTitleBar>
      <GalleryContent>
        {/* <Controls>
          <Count>{total} artefacts:</Count>
          <Pagination
            totalPages={Math.ceil(total / 6)}
            page={page}
            setPage={setPage}
          />
        </Controls> */}
        <Count>{total} artefacts:</Count>
        <Pagination
          totalPages={Math.ceil(total / 6)}
          page={page}
          setPage={setPage}
        />
        <GalleryGrid>
          {artefacts
            ? artefacts.map((artefact, idx) => (
                <GalleryItem
                  ref={(ref) => (itemRefs.current[idx] = ref)}
                  nickname={artefact.nickname}
                  form={artefact.form}
                  colorPoles={artefact.colorPoles}
                  key={idx}
                  onClick={() => {
                    setContentIdx(idx);
                    setContent(artefact);
                    history.pushState({}, "", `/gallery/${artefact.id}`);
                  }}
                />
              ))
            : range(6).map((idx) => <GalleryItemShim key={idx} />)}
        </GalleryGrid>
      </GalleryContent>
      {content ? (
        <GalleryModal
          content={content}
          closeHandler={closeModal}
          nextHandler={goToNextItem}
          prevHandler={goToPreviousItem}
          idx={contentIdx}
          contents={artefacts}
        />
      ) : null}
    </Gallery>
  );
};

export default GalleryPage;
