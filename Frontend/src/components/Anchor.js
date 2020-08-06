import React from "react";
import styled, { keyframes } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

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
  background: url(${require("../assets/svgs/wave-accent-one.svg")});
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

const AnchorLink = styled(Link)`
  padding-bottom: 6px;
  text-decoration: none;
  -webkit-text-decoration-skip: objects;
  cursor: pointer;
  background: url(${require("../assets/svgs/wave-accent-one.svg")});
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

const AnchorComp = ({ href, to, children, ...others }) => {
  return (
    <>
      {href ? (
        <Anchor
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          {...others}
        >
          {children}
        </Anchor>
      ) : (
        <AnchorLink to={to}>{children}</AnchorLink>
      )}
    </>
  );
};

export default AnchorComp;
