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

const BlockComp = ({
  type,
  pos,
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
        <Input placeholder={placeholder} />
      ) : type === "textarea" ? (
        <Textarea placeholder={placeholder} />
      ) : null}
    </Block>
  );
};

export default BlockComp;
