import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import PlainAnchor from "../components/PlainAnchor";
import CTAButton from "../components/CTAButton";

import scrollToElement from "../helpers/scrollToElement";

const A = PlainAnchor;

const Navbar = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  background-color: var(--color-background);

  & > ul {
    display: flex;
    align-items: center;
    padding: 15px 100px;

    @media (max-width: 1200px) {
      padding: 15px 75px;
    }

    @media (max-width: 896px) {
      padding: 15px 50px;
    }

    @media (max-width: 600px) {
      padding: 15px 20px;
    }
  }

  & > ul > li {
    font-family: var(--font-primary);
    font-size: 18px;
    color: white;

    @media (max-width: 1200px) {
      font-size: 16px;
    }

    @media (max-width: 896px) {
      font-size: 14px;
    }

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  & > ul > li + li {
    margin-left: 40px;
  }
`;

const Logo = styled.img`
  width: 60px;
  transform: translateY(3px);
`;

const NavbarComp = () => {
  const pathname = useLocation().pathname;

  return (
    <Navbar>
      <ul>
        <li style={{ marginRight: "auto" }}>
          <A href="https://www.esplanade.com/">
            <Logo src={require("../assets/images/esplanade-logo-white.png")} />
          </A>
        </li>
        {pathname === "/" ? (
          ["theatre", "cause", "donate", "socials"].map((section) => {
            return (
              <li>
                <button onClick={() => scrollToElement(section)}>
                  {section}
                </button>
              </li>
            );
          })
        ) : (
          <li>
            <Link to="/">Back To Homepage</Link>
          </li>
        )}
        <li>
          <CTAButton>Donate</CTAButton>
        </li>
      </ul>
    </Navbar>
  );
};

export default NavbarComp;
