import React from "react";
import styled, { keyframes } from "styled-components";

import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";

import CTAButton from "../components/CTAButton";
import PlainAnchor from "../components/PlainAnchor";

import scrollToElement from "../helpers/scrollToElement";

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
    margin-top: 30px;
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

const HamburgerComp = ({ setHamburgerOpen }) => {
  return (
    <Hamburger>
      <CloseButton onClick={() => setHamburgerOpen(false)}>
        <CloseIcon />
      </CloseButton>
      <Menu>
        <MenuItem idx={0}>
          <button
            onClick={() => {
              setHamburgerOpen(false);
              scrollToElement("theatre");
            }}
          >
            theatre
          </button>
        </MenuItem>
        <MenuItem idx={1}>
          <button
            onClick={() => {
              setHamburgerOpen(false);
              scrollToElement("cause");
            }}
          >
            cause
          </button>
        </MenuItem>
        <MenuItem idx={2}>
          <button
            onClick={() => {
              setHamburgerOpen(false);
              scrollToElement("donate");
            }}
          >
            donate
          </button>
        </MenuItem>
        <MenuItem idx={3}>
          <button
            onClick={() => {
              setHamburgerOpen(false);
              scrollToElement("socials");
            }}
          >
            socials
          </button>
        </MenuItem>
        <MenuItem idx={4}>
          <MenuCTAButton>Donate</MenuCTAButton>
        </MenuItem>
        <MenuItem style={{ marginTop: "auto" }} idx={5}>
          <SmallGreyText>Connect with us:</SmallGreyText>
          <SocialsRow>
            <A href="https://www.facebook.com/EsplanadeSG">
              <FacebookIcon />
            </A>
            <A href="https://www.youtube.com/user/EsplanadeSG">
              <YoutubeIcon />
            </A>
            <A href="https://www.instagram.com/esplanadesingapore/">
              <InstagramIcon />
            </A>
          </SocialsRow>
        </MenuItem>
      </Menu>
    </Hamburger>
  );
};

export default HamburgerComp;
