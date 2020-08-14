import styled from "styled-components";
import PropTypes from "prop-types";

const Stack = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: calc(var(--rhythm) * ${(props) => props.ratio});
  }
`;

const StackComp = React.forwardRef(
  ({ as, ratio, children, ...others }, ref) => {
    return (
      <Stack as={as} ratio={ratio} ref={ref} {...others}>
        {children}
      </Stack>
    );
  }
);

StackComp.defaultProps = {
  ratio: 1,
};

StackComp.propTypes = {
  as: PropTypes.string,
  ratio: PropTypes.number,
};

export default StackComp;
