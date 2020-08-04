import React from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: none;
  border-right: 2px solid var(--color-text);
  border-bottom: 2px solid var(--color-text);
  padding: 10px 25px 0 25px;
  font-family: var(--font-primary);
  font-size: 32px;
  color: var(--color-text);
  line-height: 2;
  text-align: right;
  resize: vertical;

  &:focus {
    outline: transparent;
    border-bottom: 2px solid var(--color-gradient-one);
    border-right: 2px solid var(--color-gradient-one);
  }
`;

const TextareaComp = ({ ...others }) => {
  return <Textarea {...others} />;
};

export default TextareaComp;
