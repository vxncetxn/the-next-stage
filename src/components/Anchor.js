import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  text-decoration: none;
  -webkit-text-decoration-skip: objects;
  cursor: pointer;
  background: url(${require("../assets/svgs/wave-accent-one.svg")});
  background-repeat: repeat-x;
  // background-size: 15px 10px;
  background-size: 15px 9px;
  background-position: 2px 19px;
  animation: move 15s linear infinite;
  -webkit-animation: move 15s linear infinite;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
  }
`;

const AnchorComp = ({ children, href, ...others }) => {
  return (
    <Anchor href={href} target="_blank" rel="noreferrer noopener" {...others}>
      {children}
    </Anchor>
  );
};

export default AnchorComp;
