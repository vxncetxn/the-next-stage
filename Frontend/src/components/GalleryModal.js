import React from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";

import Artefact from "./artefact/Artefact";
import PlainAnchor from "../components/PlainAnchor";

const A = PlainAnchor;

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Darken = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);

  animation: ${Darken} 0.3s ease-out forwards;
`;

const Modal = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  background-color: var(--color-element);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  //   padding: 50px 60px 40px 0;
  padding: 0 60px;
  margin: 50px 0;
  color: var(--color-text);

  border-left: 0.5px solid var(--color-text);
`;

const ContentTitle = styled.p`
  font-family: var(--font-primary);
  font-size: 32px;

  & > span {
    font-weight: 700;

    ${(props) => `background: linear-gradient(
        150deg,
        ${props.colorPoles[0]} 20%,
        ${props.colorPoles[1]} 40%,
        ${props.colorPoles[1]} 60%,
        ${props.colorPoles[0]} 80%
      );
      background-size: 200% auto;`}

    color: white;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${Flow} linear infinite;
    animation-duration: 2s;
  }
`;

const ContentInfo = styled.div`
  font-family: var(--font-primary);
  font-size: 14px;
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentShare = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-primary);
  font-size: 14px;
  margin-top: auto;

  & > div {
    margin-top: 10px;
  }

  & > div > * + * {
    margin-left: 20px;
  }
`;

const ContentMsg = styled.p`
  margin-top: 30px;
  font-family: var(--font-secondary);
  font-size: 18px;
  line-height: 1.7;
`;

const GalleryModalComp = ({ modal, setModal, ...others }) => {
  const { colorPoles, credits } = modal.props;

  return (
    <>
      {modal.open
        ? createPortal(
            <Container
              onClick={() => setModal({ open: false, props: {} })}
              {...others}
            >
              <Modal>
                <Artefact colorPoles={colorPoles} />
                <ContentCol>
                  <ContentTitle colorPoles={colorPoles}>
                    by <span>{credits.name}</span>
                  </ContentTitle>
                  <ContentInfo>
                    <div>
                      <p>{credits.date}</p>
                      <p>{credits.time}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 28 }}>$200</p>
                    </div>
                  </ContentInfo>
                  <ContentMsg>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </ContentMsg>
                  <ContentShare>
                    <p>Share: </p>
                    <div>
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
                    </div>
                  </ContentShare>
                </ContentCol>
              </Modal>
            </Container>,
            document.body
          )
        : null}
    </>
  );
};

export default GalleryModalComp;
