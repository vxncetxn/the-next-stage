import React from "react";
import styled, { keyframes } from "styled-components";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Quote = styled.blockquote`
  position: relative;
  padding-left: 30px;

  &:before {
    content: "“";
    position: absolute;
    left: -25px;
    top: -15px;
    z-index: -1;
    font-family: var(--font-primary);
    font-size: 180px;
    line-height: 0.8;
    opacity: 0.8;

    background: linear-gradient(
      100deg,
      var(--color-gradient-one) 20%,
      var(--color-gradient-two) 40%,
      var(--color-gradient-two) 60%,
      var(--color-gradient-one) 80%
    );
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${Flow} 2s linear infinite;
  }
`;

const QuoteText = styled.p`
  font-family: var(--font-primary);
  font-size: 42px;
  color: var(--color-text);
`;

const QuoteTextComp = ({ children, ...others }) => {
  return (
    <Quote {...others}>
      <QuoteText>{children}</QuoteText>
    </Quote>
  );
};

export default QuoteTextComp;
