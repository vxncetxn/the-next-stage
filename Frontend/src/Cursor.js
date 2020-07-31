import React from "react";
import styled, { keyframes } from "styled-components";

const Time = keyframes`
  to {
    stroke-dashoffset: 0px;
  }
`;

const Cursor = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 8px;
  height: 8px;
  border-radius: 50px;
  //   background: radial-gradient(#00f260, #0575e6);
  background-color: white;
`;

const CursorTwo = styled.svg`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  // border: 1px solid red;
`;

const CursorPointer = styled.circle`
  cx: 40px;
  cy: 40px;
  r: 4px;
  fill: white;
`;

const CursorRing = styled.circle`
  cx: 40px;
  cy: 40px;
  r: 18px;
  fill: none;
  stroke: white;
  stroke-width: 2px;
  stroke-dasharray: 113px;
  stroke-dashoffset: 113px;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 40px 40px;
`;

const CursorComp = () => {
  return (
    <CursorTwo id="cursor">
      <CursorRing className="cursor-ring" />
      <CursorPointer />
    </CursorTwo>
  );
};

export default CursorComp;
