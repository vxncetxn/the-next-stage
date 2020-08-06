import React from "react";
import styled from "styled-components";

const DuoInput = styled.input`
  //   width: calc(100% - 20px);
  // margin-left: 20px;
  width: 100%;
  background-color: transparent;
  border: none;
  border-right: 2px solid var(--color-text);
  border-bottom: 2px solid var(--color-text);
  padding: 10px 25px 10px 25px;
  font-family: var(--font-primary);
  font-size: 32px;
  color: var(--color-text);
  line-height: 2;
  text-align: right;

  &:focus {
    outline: transparent;
    border-right: 2px solid var(--color-gradient-one);
    border-bottom: 2px solid var(--color-gradient-one);
  }
`;

const DuoInputComp = ({ ...others }) => {
  return <DuoInput {...others} />;
};

export default DuoInputComp;
