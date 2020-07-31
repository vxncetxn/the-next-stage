import React from "react";
import styled, { keyframes } from "styled-components";

import Text from "../components/Text";
import Anchor from "../components/Anchor";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Error = styled.section`
  padding: 0 100px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorTitle = styled.h1`
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 140px;

  background: linear-gradient(
    150deg,
    #00f260 20%,
    #0575e6 40%,
    #0575e6 60%,
    #00f260 80%
  );
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${Flow} linear infinite;
  animation-duration: 2s;
`;

const ErrorText = styled(Text)`
  text-align: center;
`;

const ErrorComp = () => {
  return (
    <Error>
      <ErrorTitle>404</ErrorTitle>
      <ErrorText>
        Oops, we can't seem to find the page you are looking for. Why not return
        to the <Anchor>homepage</Anchor> or perhaps even{" "}
        <Anchor>let us know</Anchor> about it.
      </ErrorText>
    </Error>
  );
};

export default ErrorComp;
