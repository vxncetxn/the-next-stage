import React from "react";
import styled from "styled-components";

import Label from "./Label";
import Input from "./Input";
import Textarea from "./Textarea";
import Text from "../Text";

const Block = styled.div`
  & > p {
    margin-top: 10px;
  }

  & > input,
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
  type,
  value,
  onChange,
  error,
  labelText,
  sublabelText,
  step,
  placeholder,
  ...others
}) => {
  return (
    <Block {...others}>
      <Label step={step}>{labelText}</Label>
      <Sublabel>{sublabelText}</Sublabel>
      {type === "input" ? (
        <Input value={value} onChange={onChange} placeholder={placeholder} />
      ) : type === "textarea" ? (
        <Textarea value={value} onChange={onChange} placeholder={placeholder} />
      ) : null}
      <ErrorText>{error}</ErrorText>
    </Block>
  );
};

export default BlockComp;
