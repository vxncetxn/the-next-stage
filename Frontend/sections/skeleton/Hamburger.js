import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

import CloseIcon from "../../assets/icons/close.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";

import { useLockBodyScroll } from "../../utils";

import CTAButton from "../../components/CTAButton";
import PlainAnchor from "../../components/PlainAnchor";

const A = PlainAnchor;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const FadeInText = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Hamburger = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background-color: var(--color-background);
  animation: ${FadeIn} 0.2s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 50px;

  @media (max-width: 600px) {
    right: 20px;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 60px 0 30px 0;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-secondary);
  font-size: 28px;
  color: var(--color-text);

  & > li + li {
    margin-top: 40px;
  }
`;

const MenuItem = styled.li`
  opacity: 0;
  animation: ${FadeInText} 0.2s ease-out ${(props) => props.idx * 0.2}s forwards;
`;

const SmallGreyText = styled.p`
  font-size: 12px;
  color: var(--color-grey);

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const MenuCTAButton = styled(CTAButton)`
  font-size: 20px;
`;

const SocialsRow = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const HamburgerSection = ({ closeHandler }) => {
  useLockBodyScroll();

  const closeButtonRef = useRef();
  const lastFocusRef = useRef();

  useEffect(() => {
    closeButtonRef.current.focus();
  }, []);

  useEffect(() => {
    const handleWindowKeyDown = (e) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    };

    window.addEventListener("keydown", handleWindowKeyDown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
    };
  }, []);

  return (
    <Hamburger
      role="dialog"
      aria-label="Mobile navigation menu"
      aria-modal="true"
    >
      <CloseButton
        ref={closeButtonRef}
        onClick={closeHandler}
        onKeyDown={(e) => {
          if (e.shiftKey && e.key === "Tab") {
            e.preventDefault();
            lastFocusRef.current.focus();
          }
        }}
        aria-label="Close navigation menu"
      >
        <CloseIcon />
      </CloseButton>
      <Menu>
        <MenuItem idx={0}>
          <Link href="/">
            <a onClick={() => setHamburgerOpen(false)}>homepage</a>
          </Link>
        </MenuItem>
        <MenuItem idx={1}>
          <Link href="/gallery">
            <a onClick={() => setHamburgerOpen(false)}>gallery</a>
          </Link>
        </MenuItem>
        <MenuItem idx={2}>
          <Link href="/faqs">
            <a onClick={() => setHamburgerOpen(false)}>faqs</a>
          </Link>
        </MenuItem>
        <MenuItem idx={3}>
          <MenuCTAButton>Donate</MenuCTAButton>
        </MenuItem>
        <MenuItem idx={4} style={{ marginTop: "auto" }}>
          <SmallGreyText>Connect with us:</SmallGreyText>
          <SocialsRow>
            <A href="https://www.facebook.com/EsplanadeSG">
              <FacebookIcon />
            </A>
            <A href="https://www.youtube.com/user/EsplanadeSG">
              <YoutubeIcon />
            </A>
            <A
              ref={lastFocusRef}
              onKeyDown={(e) => {
                if (!e.shiftKey && e.key === "Tab") {
                  e.preventDefault();
                  closeButtonRef.current.focus();
                }
              }}
              href="https://www.instagram.com/esplanadesingapore/"
            >
              <InstagramIcon />
            </A>
          </SocialsRow>
        </MenuItem>
      </Menu>
    </Hamburger>
  );
};

export default HamburgerSection;
