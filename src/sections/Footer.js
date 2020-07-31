import React from "react";
import styled, { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as MailIcon } from "../assets/icons/mail.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
import { ReactComponent as PinIcon } from "../assets/icons/pin.svg";

import PlainAnchor from "../components/PlainAnchor";

import scrollToElement from "../helpers/scrollToElement";

const A = PlainAnchor;

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Footer = styled.footer`
  padding: 100px 100px 20px 100px;
  font-family: var(--font-secondary);
  font-size: 14px;
  color: var(--color-text);

  & > div + div {
    margin-top: 50px;
  }

  @media (max-width: 1200px) {
    padding: 100px 75px 20px 75px;
  }

  @media (max-width: 896px) {
    padding: 75px 50px 20px 50px;

    & > div + div {
      margin-top: 0;
    }
  }

  @media (max-width: 600px) {
    padding: 50px 20px 20px 20px;
    font-size: 12px;
  }
`;

const SmallGreyText = styled.p`
  font-size: 12px;
  color: var(--color-grey);

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const PrimaryRow = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: space-between;

  @media (max-width: 896px) {
    flex-wrap: wrap;

    & > * {
      margin-bottom: 50px;
    }

    & > *:last-child {
      margin-bottom: 20px;
    }

    & > *:not(:last-child) {
      margin-right: 30px;
    }
  }
`;

const SecondaryRow = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 896px) {
    flex-wrap: wrap-reverse;

    & > *:first-child {
      margin-bottom: 20px;
    }

    & > *:last-child {
      margin-bottom: 50px;
    }

    & > *:not(:last-child) {
      margin-right: 50px;
    }
  }
`;

const TertiaryRow = styled.div`
  font-size: 12px;
  color: var(--color-grey);

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const LinkColumn = styled.ul`
  & li:first-child {
    color: var(--color-grey);
  }

  & > li + li {
    margin-top: 10px;
  }
`;

const SocialsColumn = styled.div`
  & > * + * {
    margin-top: 10px;
  }
`;

const SubscribeGroup = styled.div`
  position: relative;
`;

const SubscribeInput = styled.input`
  font-family: var(--font-secondary);
  font-size: 14px;
  width: 350px;
  padding: 10px 100px 10px 8px;
  border-radius: 5px;
  background-color: var(--color-text);
  border: none;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const SubscribeButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 10px 20px;
  border-radius: 0 5px 5px 0;
  background: rgb(129, 5, 216);
  background: linear-gradient(
    140deg,
    #ee0979 20%,
    #ff6a00 40%,
    #ff6a00 60%,
    #ee0979 80%
  );
  background-size: 200% auto;
  animation: ${Flow} 2s linear infinite;

  &:hover {
    animation: ${Flow} 0.3s linear infinite;
  }
`;

const SocialsIconGroup = styled.div`
  display: flex;

  & > a + a {
    margin-left: 20px;
  }
`;

const LogosColumn = styled.div``;

const LogosGroup = styled.div`
  display: flex;
  margin-top: 20px;

  & img {
    height: 70px;
  }

  & a + a {
    margin-left: 20px;
  }
`;

const ContactsColumn = styled.ul`
  width: 350px;

  & > li {
    display: flex;
  }

  & > li + li {
    margin-top: 10px;
  }

  & > li > svg + p {
    margin-left: 10px;
  }
`;

const FooterComp = () => {
  const pathname = useLocation().pathname;

  return (
    <Footer>
      <PrimaryRow>
        <LinkColumn>
          <li>Home Page</li>
          {["Theatre", "Cause", "Donate", "Socials"].map((section) => {
            return (
              <li key={section}>
                {pathname === "/" ? (
                  <button
                    onClick={() => scrollToElement(section.toLowerCase())}
                  >
                    {section}
                  </button>
                ) : (
                  <Link to={`/#${section.toLowerCase()}`}>{section}</Link>
                )}
              </li>
            );
          })}
        </LinkColumn>
        <LinkColumn>
          <li>Others</li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/press-room">Press Room</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </LinkColumn>
        <LinkColumn>
          <li>Links</li>
          <li>
            <A href="https://www.esplanade.com/">Esplanade</A>
          </li>
          <li>
            <A href="https://www.sutd.edu.sg/">SUTD</A>
          </li>
          <li>
            <A href="https://www.giving.sg/esplanade/groundup">
              Giving.sg Campaign
            </A>
          </li>
        </LinkColumn>
        <SocialsColumn>
          <SubscribeGroup>
            <label htmlFor="subscribe">
              <SmallGreyText>Keep updated with Esplanade:</SmallGreyText>
            </label>
            <SubscribeInput
              name="subscribe"
              id="subscribe"
              placeholder="Your email address"
            />
            <SubscribeButton>Submit</SubscribeButton>
          </SubscribeGroup>
          <SmallGreyText style={{ marginTop: 20 }}>
            Connect with us:
          </SmallGreyText>
          <SocialsIconGroup>
            <A
              href="https://www.facebook.com/EsplanadeSG"
              aria-label="Go to Esplanade's Facebook page"
            >
              <FacebookIcon />
            </A>
            <A
              href="https://www.youtube.com/user/EsplanadeSG"
              aria-label="Go to Esplanade's Youtube page"
            >
              <YoutubeIcon />
            </A>
            <A
              href="https://www.instagram.com/esplanadesingapore/"
              aria-label="Go to Esplanade's Instagram page"
            >
              <InstagramIcon />
            </A>
          </SocialsIconGroup>
        </SocialsColumn>
      </PrimaryRow>
      <SecondaryRow>
        <LogosColumn>
          <SmallGreyText>A fundraising initiative by:</SmallGreyText>
          <LogosGroup>
            <A href="https://www.esplanade.com/">
              <img
                src={require("../assets/images/esplanade-logo.png")}
                alt="Esplanade logo"
              />
            </A>
            <A href="https://www.sutd.edu.sg/">
              <img
                src={require("../assets/images/sutd-logo.png")}
                alt="SUTD logo"
              />
            </A>
          </LogosGroup>
        </LogosColumn>
        <ContactsColumn>
          <li>
            <MailIcon />
            <p>
              <A href="mailto:esplanade@fakemail.com">esplanade@fakemail.com</A>
            </p>
          </li>
          <li>
            <PhoneIcon />
            <p>+65 6828 8377 (8.30AM - 6PM daily)</p>
          </li>
          <li>
            <PinIcon />
            <p>
              <A href="https://www.esplanade.com/visitor-guide/getting-here-and-parking">
                1 Esplanade Dr, Singapore 038981
              </A>
            </p>
          </li>
        </ContactsColumn>
      </SecondaryRow>
      <TertiaryRow>
        <p>
          Copyright © {new Date().getFullYear()} The Esplanade Co Ltd. All
          rights reserved.
        </p>
      </TertiaryRow>
    </Footer>
  );
};

export default FooterComp;
