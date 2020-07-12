import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../assets/icons/hamburger.svg";

import PlainAnchor from "../components/PlainAnchor";
import CTAButton from "../components/CTAButton";

import scrollToElement from "../helpers/scrollToElement";

const A = PlainAnchor;

const Navbar = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  // background-color: var(--color-background);
  background-color: ${(props) =>
    props.atPageTop ? "transparent" : "var(--color-background)"};

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

  & > ul > li:not(:first-child) {
    @media (max-width: 896px) {
      display: none;
    }
  }

  & > ul > li:last-child {
    display: none;

    @media (max-width: 896px) {
      display: block;
    }
  }
`;

const Logo = styled.img`
  width: 60px;
  transform: translateY(3px);
`;

const NavbarComp = ({ setHamburgerOpen }) => {
  const pathname = useLocation().pathname;
  const [atPageTop, setAtPageTop] = useState(window.scrollY < 600);

  useEffect(() => {
    let last_known_scroll_position = 0;
    let ticking = false;

    function doSomething(scroll_pos) {
      setAtPageTop(scroll_pos < 600);
    }

    window.addEventListener("scroll", function (e) {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          doSomething(last_known_scroll_position);
          ticking = false;
        });

        ticking = true;
      }
    });
  }, []);

  return (
    <Navbar atPageTop={atPageTop}>
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
        <li>
          <button onClick={() => setHamburgerOpen(true)}>
            <HamburgerIcon />
          </button>
        </li>
      </ul>
    </Navbar>
  );
};

export default NavbarComp;
