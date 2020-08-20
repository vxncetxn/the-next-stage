import { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--s0);
  color: var(--color-text);
  line-height: 2;
`;

/**
 * Body paragraph text
 */
const TextComp = forwardRef(({ children, ...others }) => {
  return <Text {...others}>{children}</Text>;
});

TextComp.propTypes = {
  /**
   * What text to show?
   */
  children: PropTypes.string,
};

export default TextComp;
