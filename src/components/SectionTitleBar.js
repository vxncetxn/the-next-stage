import React from "react";
import styled from "styled-components";

const SectionTitleBar = styled.div`
  display: flex;
  justify-content: flex-end;
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
  writing-mode: sideways-lr;
`;

const SectionTitleBarComp = ({ children, ...others }) => {
  return (
    <SectionTitleBar {...others}>
      <SectionTitle>{children}</SectionTitle>
    </SectionTitleBar>
  );
};

export default SectionTitleBarComp;
