import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

import CloseIcon from "../../assets/icons/close.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";

import { scrollToElement, useLockBodyScroll } from "../../utils";

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

const HamburgerSection = ({ setHamburgerOpen }) => {
  const pathname = useRouter().pathname;

  useLockBodyScroll();

  return (
    <Hamburger>
      <CloseButton
        onClick={() => setHamburgerOpen(false)}
        aria-label="Close navigation menu"
      >
        <CloseIcon />
      </CloseButton>
      <Menu>
        {["theatre", "cause", "donate", "socials"].map((section, idx) => {
          return (
            <MenuItem key={section} idx={idx}>
              {pathname === "/" ? (
                <button
                  onClick={() => {
                    setHamburgerOpen(false);
                    scrollToElement(section);
                  }}
                >
                  {section}
                </button>
              ) : (
                <Link
                  href={`/#${section}`}
                  onClick={() => setHamburgerOpen(false)}
                >
                  {section}
                </Link>
              )}
            </MenuItem>
          );
        })}
        <MenuItem idx={4}>
          <Link href="/gallery">
            <a onClick={() => setHamburgerOpen(false)}>gallery</a>
          </Link>
        </MenuItem>
        <MenuItem idx={5}>
          <MenuCTAButton>Donate</MenuCTAButton>
        </MenuItem>
        <MenuItem idx={6} style={{ marginTop: "auto" }}>
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

export default HamburgerSection;
