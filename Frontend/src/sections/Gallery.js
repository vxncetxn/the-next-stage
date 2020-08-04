import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ky from "ky";
import { useParams, useHistory } from "react-router-dom";

import useQuery from "../helpers/useQuery";
import range from "../helpers/range";

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
  const pageQuery = useQuery().get("page");
  const history = useHistory();

  const [total, setTotal] = useState(550);
  const [artefacts, setArtefacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    pageQuery ? parseInt(pageQuery, 10) : 1
  );
  const [modal, setModal] = useState({
    open: false,
    artefact: null,
    idx: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchArtefact = async () => {
      try {
        const fetchedArtefact = await ky
          .get(
            `https://the-next-stage.herokuapp.com/api/artefact/${artefactId}`
          )
          .json();

        setModal({
          open: true,
          artefact: fetchedArtefact.data,
          idx: null,
        });
      } catch (err) {
        console.log(err);
        history.push("/gallery");
      }
    };

    if (artefactId) {
      fetchArtefact();
    }
  }, []);

  useEffect(() => {
    const fetchArtefacts = async () => {
      try {
        const fetchedArtefacts = await ky
          .get(
            `https://the-next-stage.herokuapp.com/api/artefact?page=${currentPage}`
          )
          .json();

        setArtefacts(fetchedArtefacts.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchArtefacts();
  }, [currentPage]);

  return (
    <Gallery>
      <GalleryTitleBar position="left">gallery</GalleryTitleBar>
      <GalleryContent>
        <Count>{total} artefacts:</Count>
        <Pagination
          style={{ marginTop: 20 }}
          totalPages={Math.ceil(total / 6)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <GalleryGrid>
          {artefacts.length
            ? artefacts.map((item, idx) => (
                <GalleryItem
                  nickname={item.donor.nickname}
                  form={item.form}
                  key={idx}
                  onClick={() => {
                    setModal({
                      open: true,
                      artefact: item,
                      idx,
                    });
                    history.push(`/gallery/${item.id}`);
                  }}
                />
              ))
            : range(6).map(() => <GalleryItemShim />)}
        </GalleryGrid>
      </GalleryContent>
      {modal.open ? (
        <GalleryModal modal={modal} setModal={setModal} artefacts={artefacts} />
      ) : null}
    </Gallery>
  );
};

export default GalleryComp;
