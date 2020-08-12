import styled from "styled-components";

const Text = styled.p`
  font-family: var(--font-secondary);
  font-size: 18px;
  color: var(--color-text);
  line-height: 2;

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

const TextComp = ({ children, ...others }) => {
  return <Text {...others}>{children}</Text>;
};

export default TextComp;
