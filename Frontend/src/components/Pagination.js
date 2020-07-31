import React from "react";
import styled, { keyframes, css } from "styled-components";

import range from "../helpers/range";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Pagination = styled.div`
  display: inline-flex;
  font-family: var(--font-primary);
  font-size: 24px;
  color: var(--color-text);
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-text);

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

const PagButton = styled.button`
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

  &:disabled {
    color: var(--color-grey);
    text-decoration: line-through;
    cursor: not-allowed;
  }
`;

const PaginationComp = ({
  totalPages,
  currentPage,
  setCurrentPage,
  ...others
}) => {
  const getPagNumsArr = () => {
    let buttonsArr = [];
    const maxUnits = 9;
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
        buttonsArr = buttonsArr.concat(
          range(maxUnits - 4, currentPage - Math.floor((maxUnits - 4) / 2))
        );
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
  const goToNextPage = () => {
    if (currentPage + 1 <= totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPreviousPage = () => {
    if (currentPage - 1 > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Pagination {...others}>
      <PagButton onClick={goToPreviousPage} disabled={currentPage === 1}>
        prev
      </PagButton>
      {getPagNumsArr().map((num) => {
        if (num === "...") {
          return <span>...</span>;
        } else {
          return (
            <PagButton
              onClick={() => setCurrentPage(num)}
              selected={currentPage === num}
            >
              {num}
            </PagButton>
          );
        }
      })}
      <PagButton onClick={goToNextPage} disabled={currentPage === totalPages}>
        next
      </PagButton>
    </Pagination>
  );
};

export default PaginationComp;
