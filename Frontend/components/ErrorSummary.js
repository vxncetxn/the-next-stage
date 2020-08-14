import styled from "styled-components";
import PropTypes from "prop-types";

import Stack from "./Stack";

const ErrorSummary = styled(Stack)`
  margin-top: calc(var(--rhythm) * 2.5);
  background-color: var(--color-element);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: var(--rhythm);

  & > a + a {
    margin-top: calc(var(--rhythm) * 0.5);
  }
`;

const ErrorHeader = styled.h2`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: var(--s0);
  color: var(--color-text);
`;

const ErrorLink = styled.a`
  font-family: var(--font-primary);
  font-size: var(--s0);
  color: var(--color-neg);
  text-decoration: underline dotted;
  align-self: flex-start;
`;

const ErrorSummaryComp = React.forwardRef(({ errors, ...others }, ref) => {
  return (
    <ErrorSummary ref={ref} role="alert" {...others}>
      <ErrorHeader>
        {errors.length > 1
          ? `There are ${errors.length} errors with your submission: `
          : "There is 1 error with your submission: "}
      </ErrorHeader>
      {errors.map((error) => {
        return (
          <ErrorLink key={error.id} href={`#${error.id}`}>
            {error.message}
          </ErrorLink>
        );
      })}
    </ErrorSummary>
  );
});

ErrorSummaryComp.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ErrorSummaryComp;
