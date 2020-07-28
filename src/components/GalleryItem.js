import React from "react";
import styled from "styled-components";

const GalleryItem = styled.li`
  height: 300px;
  padding: 5rem 1rem;
  text-align: center;
  font-size: 1.2rem;
  background: #be2edd;
  color: #ffffff;
  border-radius: 8px;
  //   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  @media (max-width: 896px) {
    height: 200px;
  }
`;

const GalleryItemComp = () => {
  return <GalleryItem />;
};

export default GalleryItemComp;
