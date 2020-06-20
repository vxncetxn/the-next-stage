import React from "react";
import styled from "styled-components";

const Footer = styled.ul`
  height: 40px;
  padding: 0 40px;
  font-family: var(--font-primary);
  font-size: 12px;
  color: #737bbf;
  display: flex;
  justify-content: end;
  align-items: center;

  & > li + li {
    margin-left: 30px;
  }
`;

const FooterComp = () => {
  return (
    <Footer>
      <li>Products</li>
      <li>About</li>
      <li>SUTD</li>
      <li>Source Code</li>
    </Footer>
  );
};

export default FooterComp;
