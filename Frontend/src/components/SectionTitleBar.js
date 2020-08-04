import React from "react";
import styled from "styled-components";

const SectionTitleBar = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.position === "left"
      ? "flex-end"
      : props.position === "right"
      ? "flex-start"
      : null};
  align-items: flex-start;
  padding-top: 40px;
  flex-basis: 30%;
  flex-grow: 0;
  flex-shrink: 0;
  background: linear-gradient(
    to bottom,
    var(--color-gradient-one) 0%,
    var(--color-gradient-two) 100%
  );
`;

const SectionTitle = styled.h2`
  font-family: var(--font-primary);
  font-size: 100px;
  color: var(--color-text);
  white-space: pre;
  writing-mode: vertical-lr;
  transform: ${(props) =>
    props.position === "left" ? "rotate(-180deg)" : null};
  cursor: default;

  &::selection {
    background-color: none;
  }

  @media (max-width: 1200px) {
    font-size: 90px;
  }

  @media (max-width: 896px) {
    font-size: 80px;
  }

  @media (max-width: 600px) {
    font-size: 60px;
  }
`;

const SectionTitleBarComp = ({ children, position, ...others }) => {
  return (
    <SectionTitleBar position={position} {...others}>
      <SectionTitle position={position}>{children}</SectionTitle>
    </SectionTitleBar>
  );
};

export default SectionTitleBarComp;
