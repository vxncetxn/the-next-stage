import React from "react";
import styled, { keyframes } from "styled-components";

import Artefact from "./artefact/Artefact";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const GalleryItem = styled.li`
  position: relative;
  height: 300px;
  background-color: var(--color-element);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border 0.3s ease-out;

  &:hover {
    border: 2px solid var(--color-text);
  }

  @media (max-width: 896px) {
    height: 200px;
  }
`;

const Credits = styled.div`
  position: absolute;
  left: 25px;
  bottom: 16px;
  font-family: var(--font-secondary);
  font-size: 14px;
  color: var(--color-text);
  text-align: left;

  & > .big-credits {
    font-family: var(--font-primary);
    font-size: 24px;
    margin-top: 10px;

    & > span {
      font-weight: 700;

      ${(props) => `background: linear-gradient(
        150deg,
        ${props.colorPoles[0]} 20%,
        ${props.colorPoles[1]} 40%,
        ${props.colorPoles[1]} 60%,
        ${props.colorPoles[0]} 80%
      );
      background-size: 200% auto;`}

      color: white;
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      animation: ${Flow} linear infinite;
      animation-duration: 2s;
    }
  }
`;

const GalleryItemComp = ({ colorPoles, credits, ...others }) => {
  return (
    <GalleryItem {...others}>
      <Artefact colorPoles={colorPoles} />
      <Credits colorPoles={colorPoles}>
        {/* <p>{credits.date}</p>
        <p>{credits.time}</p> */}
        <p className="big-credits">
          by <span>{credits.name}</span>
        </p>
      </Credits>
    </GalleryItem>
  );
};

export default GalleryItemComp;
