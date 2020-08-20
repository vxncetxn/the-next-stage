import { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Label = styled.label`
  position: relative;
  display: block;
  font-family: var(--font-secondary);
  font-size: var(--s2);
  color: var(--color-text);
  padding-left: 20px;
  padding-top: 10px;

  &:before {
    content: "${(props) => props.step}";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    font-family: var(--font-primary);
    font-size: 100px;
    line-height: 0.8;
    opacity: 0.8;

    background: linear-gradient(
      100deg,
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

    animation: ${Flow} 2s linear infinite;

    @media (max-width: 1200px) {
      font-size: 90px;
    }

    @media (max-width: 896px) {
      font-size: 80px;
    }

    @media (max-width: 600px) {
      font-size: 70px;
    }
  }
`;

/**
 * Label for form input field
 */
const LabelComp = forwardRef(({ step, children, ...others }) => {
  return (
    <Label step={step} {...others}>
      {children}
    </Label>
  );
});

LabelComp.propTypes = {
  /**
   * A number representing the index of the label (and consequently that of the field it is labelling) within the numerical order of the form.
   */
  step: PropTypes.number.isRequired,
  /**
   * What text to show in the label?
   */
  children: PropTypes.string,
};

export default LabelComp;
