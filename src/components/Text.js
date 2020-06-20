import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-family: var(--font-secondary);
  font-size: 18px;
  color: var(--color-text);
  line-height: 2;
`;

const TextComp = ({ children, ...others }) => {
  return <Text {...others}>{children}</Text>;
};

export default TextComp;
