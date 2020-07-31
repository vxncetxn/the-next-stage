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
  height: 70px;
  transform: translateY(3px);

  @media (max-width: 896px) {
    height: 60px;
  }

  @media (max-width: 600px) {
    height: 50px;
  }
`;

const NavbarComp = ({ setHamburgerOpen }) => {
  const pathname = useLocation().pathname;
  const [atPageTop, setAtPageTop] = useState(true);

  useEffect(() => {
    let last_known_scroll_position = 0;
    let ticking = false;

    setAtPageTop(window.scrollY < window.innerHeight * 0.85);

    window.addEventListener("scroll", function (e) {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          setAtPageTop(last_known_scroll_position < window.innerHeight * 0.85);
          ticking = false;
        });

        ticking = true;
      }
    });
  }, []);

  return (
    <Navbar atPageTop={pathname === "/" ? atPageTop : false}>
      <ul>
        <li
          style={{ marginRight: "auto" }}
          aria-label="Go to Esplanade homepage"
        >
          <A href="https://www.esplanade.com/">
            <Logo
              src={require("../assets/images/esplanade-logo.png")}
              alt="Esplanade logo"
            />
          </A>
        </li>
        {pathname === "/" ? (
          ["theatre", "cause", "donate", "socials"].map((section) => {
            return (
              <li key={section}>
                <button onClick={() => scrollToElement(section)}>
                  {section}
                </button>
              </li>
            );
          })
        ) : (
          <li>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              Back To Home Page
            </Link>
          </li>
        )}
        <li>
          <CTAButton>Donate</CTAButton>
        </li>
        <li>
          <button
            onClick={() => setHamburgerOpen(true)}
            aria-label="Open navigation menu"
          >
            <HamburgerIcon />
          </button>
        </li>
      </ul>
    </Navbar>
  );
};

export default NavbarComp;
