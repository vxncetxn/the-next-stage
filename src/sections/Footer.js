import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import PlainAnchor from "../components/PlainAnchor";

import scrollToElement from "../helpers/scrollToElement";

const A = PlainAnchor;

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

const SubscribeInput = styled.input`
  width: 300px;
  height: 40px;
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
    height: 50px;
  }

  & a + a {
    margin-left: 20px;
  }

  @media (max-width: 600px) {
    & img {
      height: 40px;
    }
  }
`;

const ContactsColumn = styled.ul`
  width: 300px;

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
          <li>Site</li>
          {["Theatre", "Cause", "Donate", "Socials"].map((section) => {
            return (
              <li>
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
          <SmallGreyText>Keep updated with Esplanade:</SmallGreyText>
          <SubscribeInput />
          <SmallGreyText style={{ marginTop: 20 }}>
            Connect with us:
          </SmallGreyText>
          <SocialsIconGroup>
            <A href="https://www.facebook.com/EsplanadeSG">
              <svg
                id="Capa_1"
                enable-background="new 0 0 512 512"
                height="40"
                viewBox="0 0 512 512"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z" />
              </svg>
            </A>
            <A href="https://www.youtube.com/user/EsplanadeSG">
              <svg
                height="40"
                viewBox="0 0 512 512"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path d="m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0" />
                <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0" />
              </svg>
            </A>
            <A href="https://www.instagram.com/esplanadesingapore/">
              <svg
                height="40"
                viewBox="0 0 512 512"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0" />
                <path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0" />
                <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0" />
              </svg>
            </A>
          </SocialsIconGroup>
        </SocialsColumn>
      </PrimaryRow>
      <SecondaryRow>
        <LogosColumn>
          <SmallGreyText>A fundraising initiative by:</SmallGreyText>
          <LogosGroup>
            <A href="https://www.esplanade.com/">
              <img src={require("../assets/images/esplanade-logo-white.png")} />
            </A>
            <A href="https://www.sutd.edu.sg/">
              <img src={require("../assets/images/sutd-logo-white.png")} />
            </A>
          </LogosGroup>
        </LogosColumn>
        <ContactsColumn style={{ width: 300 }}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 390"
              width="16"
              fill="#b3b3b3"
            >
              <title>mail</title>
              <path d="M467,0H45A45.08,45.08,0,0,0,0,45V345a45.07,45.07,0,0,0,45,45H467a45.07,45.07,0,0,0,45-45V45A45.07,45.07,0,0,0,467,0Zm-6.21,30L257,233.83,51.36,30ZM30,338.79V51.07L174.48,194.31ZM51.21,360,195.78,215.43l50.66,50.22a15,15,0,0,0,21.17,0L317,216.21,460.79,360ZM482,338.79,338.21,195,482,51.21Z" />
            </svg>
            <p>
              <A href="mailto:esplanade@fakemail.com">esplanade@fakemail.com</A>
            </p>
          </li>
          <li>
            <svg
              id="Layer_1"
              enable-background="new 0 0 512.021 512.021"
              viewBox="0 0 512.021 512.021"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#b3b3b3"
            >
              <g>
                <path d="m367.988 512.021c-16.528 0-32.916-2.922-48.941-8.744-70.598-25.646-136.128-67.416-189.508-120.795s-95.15-118.91-120.795-189.508c-8.241-22.688-10.673-46.108-7.226-69.612 3.229-22.016 11.757-43.389 24.663-61.809 12.963-18.501 30.245-33.889 49.977-44.5 21.042-11.315 44.009-17.053 68.265-17.053 7.544 0 14.064 5.271 15.645 12.647l25.114 117.199c1.137 5.307-.494 10.829-4.331 14.667l-42.913 42.912c40.482 80.486 106.17 146.174 186.656 186.656l42.912-42.913c3.838-3.837 9.361-5.466 14.667-4.331l117.199 25.114c7.377 1.581 12.647 8.101 12.647 15.645 0 24.256-5.738 47.224-17.054 68.266-10.611 19.732-25.999 37.014-44.5 49.977-18.419 12.906-39.792 21.434-61.809 24.663-6.899 1.013-13.797 1.518-20.668 1.519zm-236.349-479.321c-31.995 3.532-60.393 20.302-79.251 47.217-21.206 30.265-26.151 67.49-13.567 102.132 49.304 135.726 155.425 241.847 291.151 291.151 34.641 12.584 71.866 7.64 102.132-13.567 26.915-18.858 43.685-47.256 47.217-79.251l-95.341-20.43-44.816 44.816c-4.769 4.769-12.015 6.036-18.117 3.168-95.19-44.72-172.242-121.772-216.962-216.962-2.867-6.103-1.601-13.349 3.168-18.117l44.816-44.816z" />
              </g>
            </svg>
            <p>+65 6828 8377 (8.30AM - 6PM daily)</p>
          </li>
          <li>
            <svg
              enable-background="new 0 0 512 512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              fill="#b3b3b3"
            >
              <path d="m256 0c-99.252 0-180 80.748-180 180 0 33.534 9.289 66.26 26.869 94.652l142.885 230.257c2.737 4.411 7.559 7.091 12.745 7.091h.119c5.231-.041 10.063-2.804 12.75-7.292l139.243-232.488c16.61-27.792 25.389-59.681 25.389-92.22 0-99.252-80.748-180-180-180zm128.866 256.818-126.594 211.368-129.905-209.34c-14.633-23.632-22.567-50.896-22.567-78.846 0-82.71 67.49-150.2 150.2-150.2s150.1 67.49 150.1 150.2c0 27.121-7.411 53.688-21.234 76.818z" />
              <path d="m256 90c-49.626 0-90 40.374-90 90 0 49.309 39.717 90 90 90 50.903 0 90-41.233 90-90 0-49.626-40.374-90-90-90zm0 150.2c-33.257 0-60.2-27.033-60.2-60.2 0-33.084 27.116-60.2 60.2-60.2s60.1 27.116 60.1 60.2c0 32.683-26.316 60.2-60.1 60.2z" />
            </svg>
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
