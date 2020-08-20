import { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const Wriggle = keyframes`
  from {
    background-position: 2px 19px;
  }
  to {
    background-position: 500px 19px;
  }
`;

const Anchor = styled.a`
  font-family: var(--font-secondary);
  font-size: var(--s0);
  color: var(--color-text);
  padding-bottom: 6px;
  -webkit-text-decoration-skip: objects;
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

/**
 * Body anchor for linking to other pages by opening them in new tabs
 */
const AnchorComp = forwardRef(({ href, children, ...others }) => {
  return (
    <Anchor href={href} target="_blank" rel="noreferrer noopener" {...others}>
      {children}
    </Anchor>
  );
});

AnchorComp.propTypes = {
  /**
   * What is the URL of the page to link to?
   */
  href: PropTypes.string.isRequired,
  /**
   * What text to show in anchor?
   */
  children: PropTypes.string,
};

export default AnchorComp;
