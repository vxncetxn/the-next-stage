import React from "react";
import styled, { keyframes } from "styled-components";

const Shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }

  100% {
    background-position: 1000px 0;
  }
`;

const GalleryItemShim = styled.div`
  background: linear-gradient(
    to right,
    var(--color-element) 4%,
    #282d57 25%,
    var(--color-element) 36%
  );
  background-size: 1000px 100%;
  animation: ${Shimmer} 2s infinite;
`;

const GalleryItemShimComp = ({ ...others }) => {
  return <GalleryItemShim {...others} />;
};

export default GalleryItemShimComp;
