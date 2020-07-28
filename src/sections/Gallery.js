import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
import Anchor from "../components/Anchor";
import GalleryItem from "../components/GalleryItem";

import range from "../helpers/range";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

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
  display: inline-flex;
  font-family: var(--font-primary);
  font-size: 24px;
  color: var(--color-text);
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-text);

  & > * + * {
    margin-left: 10px;
  }

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

const PageButton = styled.button`
  padding: 2px 12px;
  border-radius: 20px;

  ${(props) =>
    props.selected
      ? css`
          background: linear-gradient(
            120deg,
            #ee0979 20%,
            #ff6a00 40%,
            #ff6a00 60%,
            #ee0979 80%
          );
          background-size: 200% auto;
          animation: ${Flow} 4s linear infinite;
        `
      : null}
`;

const GalleryComp = () => {
  const [total, setTotal] = useState(171);
  const [artefacts, setArtefacts] = useState([...Array(10).keys()]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(total / 10);

  const getPaginationButtonsArr = () => {
    let buttonsArr = [];
    const maxUnits = 7;
    const maxContUnits = maxUnits - 2;

    if (totalPages > maxUnits + 1) {
      const leftLimit = maxContUnits;
      const rightLimit = totalPages - (maxContUnits - 1);

      if (currentPage < leftLimit) {
        buttonsArr = range(maxContUnits, 1);
        buttonsArr.push("...", totalPages);
      } else if (currentPage > rightLimit) {
        buttonsArr.push(1, "...");
        buttonsArr = buttonsArr.concat(
          range(maxContUnits, totalPages - maxUnits + 1 + 2)
        );
      } else {
        buttonsArr.push(1, "...");
        buttonsArr = buttonsArr.concat(range(maxUnits - 4, currentPage - 1));
        buttonsArr.push("...", totalPages);
      }
    } else if (totalPages === maxUnits + 1) {
      if (currentPage >= maxContUnits) {
        buttonsArr.push(1, "...");
        buttonsArr = buttonsArr.concat(range(maxContUnits, 4));
      } else {
        buttonsArr = range(maxContUnits, 1);
        buttonsArr.push("...", totalPages);
      }
    } else {
      buttonsArr = range(totalPages, 1);
    }

    return buttonsArr;
  };

  const goToNextPage = () => setCurrentPage(currentPage + 1);
  const goToPreviousPage = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Gallery>
      <GalleryTitleBar position="left">Gallery</GalleryTitleBar>
      <GalleryContent>
        {/* <Text>
          Check out the awesome creations from all of our generous donors! If
          you haven't donated yet and too would like to contribute to this
          ever-growing gallery, we would greatly appreciate your{" "}
          <Anchor>donations</Anchor>. ❤️
        </Text> */}
        <PaginationRow currentPage={currentPage}>
          <PageButton onClick={goToPreviousPage}>prev</PageButton>
          {getPaginationButtonsArr().map((num) => {
            if (num === "...") {
              return <span>...</span>;
            } else {
              return (
                <PageButton
                  onClick={() => setCurrentPage(num)}
                  selected={currentPage === num}
                >
                  {num}
                </PageButton>
              );
            }
          })}
          <PageButton onClick={goToNextPage}>next</PageButton>
        </PaginationRow>
        <GalleryGrid>
          {artefacts.map((item, idx) => (
            <GalleryItem key={idx} />
          ))}
        </GalleryGrid>
      </GalleryContent>
    </Gallery>
  );
};

export default GalleryComp;
