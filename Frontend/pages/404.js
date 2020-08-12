import styled, { keyframes } from "styled-components";

import Text from "../components/Text";
import Anchor from "../components/Anchor";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const NotFound = styled.section`
  padding: 0 100px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundTitle = styled.h1`
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 140px;

  background: linear-gradient(
    150deg,
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

  animation: ${Flow} linear infinite;
  animation-duration: 2s;
`;

const NotFoundText = styled(Text)`
  text-align: center;
`;

const NotFoundComp = () => {
  return (
    <NotFound>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>
        Oops, we can't seem to find the page you are looking for. Why not return
        to the <Anchor>homepage</Anchor> or perhaps even{" "}
        <Anchor>let us know</Anchor> about it.
      </NotFoundText>
    </NotFound>
  );
};

export default NotFoundComp;
