import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  // border: 1px solid red;
  background-color: var(--color-background);

  & > ul {
    display: flex;
    align-items: center;
    padding: 15px 100px;
  }

  & > ul > li {
    font-family: var(--font-primary);
    font-size: 18px;
    color: white;
    cursor: pointer;
  }

  & > ul > li + li {
    margin-left: 40px;
  }
`;

const Logo = styled.img`
  width: 60px;
  // border: 1px solid red;
  transform: translateY(3px);
`;

const NavbarComp = () => {
  return (
    <Navbar>
      <ul>
        <li style={{ marginRight: "auto" }}>
          <Logo
            src={require("../assets/images/esplanade-logo-white.png")}
          ></Logo>
        </li>
        <li>main</li>
        <li>theatre</li>
        <li>cause</li>
        <li>socials</li>
      </ul>
    </Navbar>
  );
};

export default NavbarComp;
