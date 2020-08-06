import React from "react";
import styled from "styled-components";

import Label from "./Label";
import Text from "../Text";

const Block = styled.div`
  & > p {
    margin-top: 10px;
  }

  & > input,
  & > div,
  & > textarea {
    margin-top: 50px;
  }
`;

const Sublabel = styled(Text)`
  font-size: 14px;
  color: var(--color-grey);
`;

const ErrorText = styled(Text)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 14px;
  color: red;
  text-align: right;
  height: 40px;
`;

const BlockComp = ({
  error,
  labelText,
  sublabelText,
  step,
  children,
  ...others
}) => {
  return (
    <Block {...others}>
      <Label step={step}>{labelText}</Label>
      <Sublabel>{sublabelText}</Sublabel>
      {children}
      <ErrorText>{error}</ErrorText>
    </Block>
  );
};

export default BlockComp;
