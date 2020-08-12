import { useState } from "react";
import styled from "styled-components";

const DuoInput = styled.div`
  width: 100%;
`;

const InputTop = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-right: 2px solid
    ${(props) =>
      props.focused ? "var(--color-gradient-one)" : "var(--color-text)"};
  padding: 10px 25px 10px 25px;
  font-family: var(--font-primary);
  font-size: 32px;
  color: var(--color-text);
  line-height: 2;
  text-align: right;

  &:focus {
    outline: none;
  }
`;

const Midline = styled.div`
  width: 100%;
  border-top: 2px solid
    ${(props) =>
      props.focused ? "var(--color-gradient-one)" : "var(--color-text)"};
`;

const InputBottom = styled(InputTop)`
  border-right: none;
  border-left: 2px solid
    ${(props) =>
      props.focused ? "var(--color-gradient-one)" : "var(--color-text)"};
  text-align: left;
`;

const DuoInputComp = ({
  valueTop,
  valueBottom,
  onChangeTop,
  onChangeBottom,
  placeholderTop,
  placeholderBottom,
  ...others
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <DuoInput {...others}>
      <InputTop
        value={valueTop}
        onChange={onChangeTop}
        placeholder={placeholderTop}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        focused={focused}
      />
      <Midline className="midline" focused={focused} />
      <InputBottom
        value={valueBottom}
        onChange={onChangeBottom}
        placeholder={placeholderBottom}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        focused={focused}
      />
    </DuoInput>
  );
};

export default DuoInputComp;
