import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

import HamburgerIcon from "../../assets/icons/hamburger.svg";

import CTAButton from "../../components/CTAButton";

const Navbar = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  background-color: ${(props) =>
    props.atPageTop ? "transparent" : "var(--color-background)"};

  & > ul {
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
  }

  & > ul > li {
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

  & > ul > li + li {
    margin-left: 60px;
  }
`;

const NavbarSection = ({ setHamburgerOpen }) => {
  const pathname = useRouter().pathname;

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

export default NavbarSection;
