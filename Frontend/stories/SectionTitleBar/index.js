import { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SectionTitleBar = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.position === "left"
      ? "flex-end"
      : props.position === "right"
      ? "flex-start"
      : null};
  align-items: flex-start;
  padding-top: var(--rhythm);
  flex-basis: 30%;
  flex-grow: 0;
  flex-shrink: 0;
  background: linear-gradient(
    to bottom,
    var(--color-gradient-one) 0%,
    var(--color-gradient-two) 100%
  );

  @media (max-width: 896px) {
    flex-basis: 25%;
  }
`;

const SectionTitle = styled.div`
  font-family: var(--font-primary);
  font-size: var(--s4);
  color: var(--color-text);
  white-space: pre;
  writing-mode: vertical-lr;
  transform: ${(props) =>
    props.position === "left" ? "rotate(-180deg)" : null};
  cursor: default;

  &::selection {
    background-color: none;
  }

  @media (max-width: 896px) {
    font-size: var(--s3);
  }
`;

/**
 * A vertical bar that runs length-wise along a section - it serves both to contain the header
 * for the section and also to accentuate it with the site's brand gradient
 */
const SectionTitleBarComp = forwardRef(
  ({ id, level, position, children, ...others }) => {
    return (
      <SectionTitleBar position={position} {...others}>
        <SectionTitle
          id={id}
          as={level === 2 ? "h2" : "h1"}
          position={position}
        >
          {children}
        </SectionTitle>
      </SectionTitleBar>
    );
  }
);

SectionTitleBarComp.propTypes = {
  /**
   * What is the id of the title (required in order for section to be appropriately labelled)?
   */
  id: PropTypes.string,
  /**
   * Should the title have a h1 (mono-section pages, eg. FAQs) or h2 (multi-section pages, eg. Homepage) tag
   */
  level: PropTypes.oneOf([1, 2]),
  /**
   * Is the bar on the left or right?
   */
  position: PropTypes.oneOf(["left", "right"]),
  /**
   * What is the title of the section?
   */
  children: PropTypes.string,
};

SectionTitleBarComp.defaultProps = {
  level: 1,
  position: "left",
};

export default SectionTitleBarComp;
