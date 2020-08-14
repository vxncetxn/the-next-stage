import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

import Hamburger from "./Hamburger";

import HamburgerIcon from "../../assets/icons/hamburger.svg";

import CTAButton from "../../components/CTAButton";

const Navbar = styled.header`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  background-color: ${(props) =>
    props.atPageTop ? "transparent" : "var(--color-background)"};
`;

const LinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 100px;

  @media (max-width: 1200px) {
    padding: 30px 75px;
  }

  @media (max-width: 896px) {
    padding: 30px 50px;
  }

  @media (max-width: 600px) {
    padding: 30px 20px;
  }

  & > li {
    font-family: var(--font-primary);
    font-size: 18px;
    color: white;

    @media (max-width: 1200px) {
      font-size: 16px;
    }

    @media (max-width: 896px) {
      display: none;
    }

    &:last-child {
      display: none;

      @media (max-width: 896px) {
        display: block;
      }
    }
  }

  & > li + li {
    margin-left: 60px;
  }
`;

const NavbarSection = ({ hamburgerOpen, setHamburgerOpen }) => {
  const pathname = useRouter().pathname;

  const openButtonRef = useRef();

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

  const closeHandler = () => {
    setHamburgerOpen(false);
    openButtonRef.current.focus();
  };

  return (
    <Navbar atPageTop={pathname === "/" ? atPageTop : false}>
      <nav>
        <LinksList>
          <li>
            <Link href="/">
              <a>homepage</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/faqs">
              <a>faqs</a>
            </Link>
          </li>
          <li>
            <CTAButton>Donate</CTAButton>
          </li>
          <li>
            <button
              ref={openButtonRef}
              onClick={() => setHamburgerOpen(true)}
              aria-label="Open navigation menu"
            >
              <HamburgerIcon />
            </button>
          </li>
        </LinksList>
      </nav>
      {hamburgerOpen
        ? createPortal(<Hamburger closeHandler={closeHandler} />, document.body)
        : null}
    </Navbar>
  );
};

export default NavbarSection;
