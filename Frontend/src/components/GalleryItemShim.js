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
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    to right,
    var(--color-element) 4%,
    #282d57 25%,
    var(--color-element) 36%
  );
  background-size: 1000px 100%;
  animation: ${Shimmer} 2s infinite;
`;

const GalleryItemShimComp = () => {
  return <GalleryItemShim />;
};

export default GalleryItemShimComp;
