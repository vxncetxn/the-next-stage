import styled, { keyframes } from "styled-components";

const Wriggle = keyframes`
  from {
    background-position: 2px 19px;
  }
  to {
    background-position: 500px 19px;
  }
`;

const Anchor = styled.a`
  padding-bottom: 6px;
  text-decoration: none;
  -webkit-text-decoration-skip: objects;
  cursor: pointer;
  background: url(${"/wave-accent-one.svg"});
  background-repeat: repeat-x;
  background-size: 20px 15px;
  animation: ${Wriggle} 15s linear infinite;
  -webkit-animation: ${Wriggle} 15s linear infinite;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
  }

  @media (max-width: 1200px) {
    background-size: 18px 12px;
  }

  @media (max-width: 896px) {
    background-size: 16px 6px;
  }

  @media (max-width: 600px) {
    background-size: 13px 4px;
  }
`;

const AnchorComp = ({ href, children, ...others }) => {
  return (
    <Anchor href={href} target="_blank" rel="noreferrer noopener" {...others}>
      {children}
    </Anchor>
  );
};

export default AnchorComp;
