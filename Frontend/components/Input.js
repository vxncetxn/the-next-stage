import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-right: 2px solid var(--color-text);
  border-bottom: 2px solid var(--color-text);
  padding: 10px 25px 10px 25px;
  font-family: var(--font-primary);
  font-size: var(--s1);
  color: var(--color-text);
  line-height: 2;
  text-align: right;

  &:focus {
    outline: transparent;
    border-right: 2px solid var(--color-gradient-one);
    border-bottom: 2px solid var(--color-gradient-one);
  }
`;

const InputComp = ({ ...others }) => {
  return <Input {...others} />;
};

export default InputComp;
