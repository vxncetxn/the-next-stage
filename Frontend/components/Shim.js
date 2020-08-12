import styled, { keyframes } from "styled-components";

const Shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }

  100% {
    background-position: 1000px 0;
  }
`;

const Shim = styled.div`
  background-image: linear-gradient(
    to right,
    var(--color-element) 4%,
    #282d57 25%,
    var(--color-element) 36%
  );
  background-size: 1000px 100%;
  animation: ${Shimmer} 2s infinite;
`;

const ShimComp = ({ ...others }) => {
  return <Shim {...others} />;
};

export default ShimComp;
