import styled from "styled-components";

import Stack from "./Stack";
import Label from "./Label";
import Text from "./Text";

const Block = styled(Stack)`
  & > :nth-child(2) {
    margin-top: calc(var(--rhythm) * 0.25);
  }
`;

const Sublabel = styled(Text)`
  font-size: var(--s-1);
  color: var(--color-grey);
`;

const ErrorText = styled(Text)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: var(--s-1);
  color: red;
  text-align: right;
  height: 40px;
`;

const BlockComp = ({
  id,
  subId,
  errId,
  error,
  labelText,
  sublabelText,
  step,
  children,
  ...others
}) => {
  return (
    <Block {...others}>
      <Label htmlFor={id} step={step}>
        {labelText}
      </Label>
      <Sublabel id={subId}>{sublabelText}</Sublabel>
      {React.cloneElement(children, {
        id,
        name: id,
        "aria-describedby": error ? `${errId} ${subId}` : subId,
        "aria-invalid": error ? "true" : "false",
      })}
      <ErrorText id={errId}>{error}</ErrorText>
    </Block>
  );
};

export default BlockComp;
