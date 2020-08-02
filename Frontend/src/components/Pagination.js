import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

import { ReactComponent as LeftArrowIcon } from "../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "../assets/icons/right-arrow.svg";

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

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 896px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }

  @media (max-width: 414px) {
    font-size: 16px;
  }

  & > * + * {
    margin-left: 10px;

    @media (max-width: 1200px) {
      margin-left: 8px;
    }

    @media (max-width: 896px) {
      margin-left: 4px;
    }

    @media (max-width: 600px) {
      margin-left: 2px;
    }
  }
`;

const Ellipsis = styled.span`
  width: 55px;
  text-align: center;

  @media (max-width: 1200px) {
    width: 50px;
  }

  @media (max-width: 896px) {
    width: 40px;
  }

  @media (max-width: 600px) {
    width: 30px;
  }

  @media (max-width: 414px) {
    width: 28px;
  }
`;

const PagButton = styled.button`
  width: 55px;
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

  @media (max-width: 1200px) {
    width: 50px;
  }

  @media (max-width: 896px) {
    width: 40px;
  }

  @media (max-width: 600px) {
    width: 30px;
  }

  @media (max-width: 414px) {
    width: 28px;
  }
`;

const PaginationComp = ({
  totalPages,
  currentPage,
  setCurrentPage,
  ...others
}) => {
  const [maxUnits, setMaxUnits] = useState(5);

  useEffect(() => {
    const resizeHandler = () => {
      let units;

      if (window.innerWidth <= 414) {
        units = Math.floor((0.7 * window.innerWidth - 40) / 30) - 2;
      } else if (window.innerWidth <= 600) {
        units = Math.floor((0.7 * window.innerWidth - 40) / 32) - 2;
      } else if (window.innerWidth <= 896) {
        units = Math.floor((0.7 * window.innerWidth - 100) / 44) - 2;
      } else if (window.innerWidth <= 1200) {
        units = Math.floor((0.7 * window.innerWidth - 150) / 58) - 2;
      } else {
        units =
          Math.floor((0.7 * Math.min(1440, window.innerWidth) - 200) / 65) - 2;
      }

      setMaxUnits(Math.max(5, units));
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);
  }, []);

  const getPagNumsArr = () => {
    let buttonsArr = [];
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
        {/* prev */}
        <LeftArrowIcon width="14" height="14" />
      </PagButton>
      {getPagNumsArr().map((num) => {
        if (num === "...") {
          return <Ellipsis>..</Ellipsis>;
        } else {
          return (
            <PagButton
              onClick={() => setCurrentPage(num)}
              selected={currentPage === num}
            >
              {num.toString().padStart(2, "0")}
            </PagButton>
          );
        }
      })}
      <PagButton onClick={goToNextPage} disabled={currentPage === totalPages}>
        {/* next */}
        <RightArrowIcon width="14" height="14" />
      </PagButton>
    </Pagination>
  );
};

export default PaginationComp;
