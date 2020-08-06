import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useQuery, usePaginatedQuery, queryCache } from "react-query";

import useURLQuery from "../helpers/useURLQuery";
import range from "../helpers/range";

import fetchTotal from "../fetch/fetchTotal";
import fetchArtefacts from "../fetch/fetchArtefacts";
import fetchArtefact from "../fetch/fetchArtefact";

import SectionTitleBar from "../components/SectionTitleBar";
import GalleryItem from "../components/GalleryItem";
import Shim from "../components/Shim";
import Pagination from "../components/Pagination";
import GalleryModal from "../components/GalleryModal";

const Gallery = styled.section`
  position: relative;
  display: flex;
`;

const GalleryTitleBar = styled(SectionTitleBar)`
  padding-top: 140px;
`;

const GalleryContent = styled.div`
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
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 896px) {
    --auto-grid-min-size: 200px;
  }
`;

const GalleryItemShim = styled(Shim)`
  border-radius: 8px;
  height: 300px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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

const GalleryComp = () => {
  const artefactId = useParams().id;
  const pageQuery = useURLQuery().get("page");
  const history = useHistory();

  const [page, setPage] = useState(pageQuery ? parseInt(pageQuery, 10) : 1);
  const [content, setContent] = useState(null);
  const [contentIdx, setContentIdx] = useState(-1);

  const { status: totalStatus, data: total } = useQuery("total", fetchTotal, {
    initialData: 0,
    initialStale: true,
  });
  useQuery("artefact", () => fetchArtefact(artefactId), {
    enabled: !!artefactId,
    onSuccess: (artefact) => {
      if (artefact) {
        setContent(artefact);
      }
    },
  });
  const {
    status: artefactsStatus,
    resolvedData: artefacts,
    latestData: latestArtefacts,
  } = usePaginatedQuery(["artefacts", page], () => fetchArtefacts(page));

  useEffect(() => {
    if (page + 1 <= Math.ceil(total / 6)) {
      queryCache.prefetchQuery(["artefacts", page + 1], () =>
        fetchArtefacts(page + 1)
      );
    }
  }, [page, total]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeModal = () => {
    setContent(null);
    history.push(`/gallery?page=${page}`);
  };
  const goToNextItem = (idx) => {
    if (idx + 1 <= artefacts.length - 1) {
      setContentIdx(idx + 1);
      setContent(artefacts[idx + 1]);
      history.push(`/gallery/${artefacts[idx + 1].id}`);
    }
  };
  const goToPreviousItem = (idx) => {
    if (idx - 1 >= 0) {
      setContentIdx(idx - 1);
      setContent(artefacts[idx - 1]);
      history.push(`/gallery/${artefacts[idx - 1].id}`);
    }
  };

  return (
    <Gallery>
      <GalleryTitleBar position="left">gallery</GalleryTitleBar>
      <GalleryContent>
        <Count>{total} artefacts:</Count>
        <Pagination
          style={{ marginTop: 20 }}
          totalPages={Math.ceil(total / 6)}
          page={page}
          setPage={setPage}
        />
        <GalleryGrid>
          {artefacts
            ? artefacts.map((artefact, idx) => (
                <GalleryItem
                  nickname={artefact.donor.nickname}
                  form={artefact.form}
                  colorPoles={artefact.colorPoles}
                  key={idx}
                  onClick={() => {
                    setContentIdx(idx);
                    setContent(artefact);
                    history.push(`/gallery/${artefact.id}`);
                  }}
                />
              ))
            : range(6).map(() => <GalleryItemShim />)}
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

export default GalleryComp;
