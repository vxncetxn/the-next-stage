import styled, { keyframes } from "styled-components";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const CTAButton = styled.button`
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 18px;
  color: var(--color-text);
  padding: 10px 30px;
  border-radius: 20px;
  background: rgb(129, 5, 216);
  background: linear-gradient(
    150deg,
    var(--color-gradient-one) 20%,
    var(--color-gradient-two) 40%,
    var(--color-gradient-two) 60%,
    var(--color-gradient-one) 80%
  );
  background-size: 200% auto;
  animation: ${Flow} 2s linear infinite;

  &:hover {
    animation: ${Flow} 0.3s linear infinite;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 896px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const CTAButtonComp = ({ children, ...others }) => {
  return <CTAButton {...others}>{children}</CTAButton>;
};

export default CTAButtonComp;
