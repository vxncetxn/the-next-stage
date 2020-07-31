import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SectionTitleBar from "../components/SectionTitleBar";
// import Text from "../components/Text";
// import Anchor from "../components/Anchor";
import GalleryItem from "../components/GalleryItem";
import Pagination from "../components/Pagination";

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
  const [total, setTotal] = useState(55);
  const [artefacts, setArtefacts] = useState([
    {
      colors: ["#ee0979", "#ff6a00"],
      credits: { date: "23 Jul 2020", time: "08:52", name: "dzhane" },
    },
    {
      colors: ["#B993D6", "#8CA6DB"],
      credits: { date: "17 Jul 2020", time: "21:26", name: "venessa86" },
    },
    {
      colors: ["#f2709c", "#ff9472"],
      credits: { date: "20 Jul 2020", time: "17:45", name: "jathor007" },
    },
    {
      colors: ["#ee0979", "#ff6a00"],
      credits: { date: "23 Jul 2020", time: "08:52", name: "dzhane" },
    },
    {
      colors: ["#B993D6", "#8CA6DB"],
      credits: { date: "17 Jul 2020", time: "21:26", name: "venessa86" },
    },
    {
      colors: ["#f2709c", "#ff9472"],
      credits: { date: "20 Jul 2020", time: "17:45", name: "jathor007" },
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Gallery>
      <GalleryTitleBar position="left">gallery</GalleryTitleBar>
      <GalleryContent>
        {/* <Text>
          Check out the awesome creations from all of our generous donors! If
          you haven't donated yet and too would like to contribute to this
          ever-growing gallery, we would greatly appreciate your{" "}
          <Anchor>donations</Anchor>. ❤️
        </Text> */}
        <Count>{total} artefacts:</Count>
        <Pagination
          style={{ marginTop: 20 }}
          totalPages={Math.ceil(total / 6)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <GalleryGrid>
          {artefacts.map((item, idx) => (
            <GalleryItem
              colorPoles={item.colors}
              credits={item.credits}
              key={idx}
            />
          ))}
        </GalleryGrid>
      </GalleryContent>
    </Gallery>
  );
};

export default GalleryComp;