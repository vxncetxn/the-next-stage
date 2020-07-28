import React, { useEffect } from "react";
import styled from "styled-components";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
import Anchor from "../components/Anchor";
import GalleryItem from "../components/GalleryItem";

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

  & > * + * {
    margin-top: 50px;
  }

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
  gap: 1rem;
  @media (max-width: 896px) {
    --auto-grid-min-size: 200px;
  }
`;

const PaginationRow = styled.div`
  display: flex;
`;

const GalleryComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Gallery>
      <GalleryTitleBar position="left">Gallery</GalleryTitleBar>
      <GalleryContent>
        <Text>
          Check out the awesome creations from all of our generous donors! If
          you haven't donated yet and too would like to contribute to this
          ever-growing gallery, we would greatly appreciate your{" "}
          <Anchor>donations</Anchor>. ❤️
        </Text>
        <PaginationRow></PaginationRow>
        <GalleryGrid>
          {[...Array(20).keys()].map((item, idx) => (
            <GalleryItem key={idx} />
          ))}
        </GalleryGrid>
      </GalleryContent>
    </Gallery>
  );
};

export default GalleryComp;
