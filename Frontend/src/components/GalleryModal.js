import React from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

import { ReactComponent as LeftArrowIcon } from "../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "../assets/icons/right-arrow.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";

import Artefact from "./artefact/Artefact";
import PlainAnchor from "../components/PlainAnchor";
import Text from "../components/Text";

import useLockBodyScroll from "../helpers/useLockBodyScroll";
import getMonthName from "../helpers/getMonthName";

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

const ArrowButton = styled.button`
  font-family: var(--font-secondary);
  color: var(--color-text);
  font-size: 80px;
  position: absolute;
  left: 0;
  top: 0;

  & > svg {
    @media (max-width: 896px) {
      width: 30px;
      height: 30px;
    }
  }
`;

const LeftButton = styled(ArrowButton)`
  transform: translate(calc(5vw - 50%), calc(50vh - 50%));
`;

const RightButton = styled(ArrowButton)`
  transform: translate(calc(95vw - 50%), calc(50vh - 50%));
`;

const Modal = styled.div`
  position: relative;
  width: 80%;
  height: 80%;

  display: flex;
  background-color: var(--color-element);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 896px) {
    flex-direction: column;
    height: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 50px;
  z-index: 999;

  @media (max-width: 896px) {
    top: 25px;
    right: 25px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 0 60px;
  margin: 50px 0;
  font-family: var(--font-primary);
  color: var(--color-text);
  border-left: 0.5px solid var(--color-text);

  @media (max-width: 1200px) {
    padding: 0 45px;
  }

  @media (max-width: 896px) {
    width: 100%;
    height: 60%;
    flex: none;
    margin: 0;
    padding: 0 40px 30px 40px;
    border-left: none;
  }

  @media (max-width: 600px) {
    padding: 0 30px 30px 30px;
  }
`;

const Title = styled.p`
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

    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${Flow} linear infinite;
    animation-duration: 2s;
  }

  @media (max-width: 1200px) {
    font-size: 30px;
  }

  @media (max-width: 896px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const InfoTime = styled.div`
  font-size: 14px;

  @media (max-width: 896px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const InfoAmt = styled.p`
  font-size: 28px;

  @media (max-width: 896px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Message = styled(Text)`
  margin-top: 30px;
  height: 45%;
  line-height: 1.7;
  overflow: scroll;

  @media (max-width: 896px) {
    height: 40%;
  }
`;

const Share = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-top: auto;

  @media (max-width: 896px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }

  & > div {
    margin-top: 10px;
  }

  & > div > * + * {
    margin-left: 20px;
  }

  & svg {
    @media (max-width: 896px) {
      width: 30px;
    }
  }
`;

const GalleryModalComp = ({
  content,
  closeHandler,
  nextHandler,
  prevHandler,
  idx,
  contents,
  ...others
}) => {
  useLockBodyScroll();

  const {
    form,
    colorPoles,
    message,
    donor: { nickname, amount },
    updatedAt,
  } = content;
  const createDate = new Date(updatedAt);

  return (
    <>
      {createPortal(
        <Container {...others}>
          {prevHandler && idx - 1 >= 0 ? (
            <LeftButton onClick={() => prevHandler(idx)}>
              <LeftArrowIcon />
            </LeftButton>
          ) : null}
          {nextHandler && idx + 1 <= contents.length - 1 ? (
            <RightButton onClick={() => nextHandler(idx)}>
              <RightArrowIcon />
            </RightButton>
          ) : null}
          <Modal>
            <CloseButton
              onClick={closeHandler}
              aria-label="Close artefact modal"
            >
              <CloseIcon />
            </CloseButton>
            <Artefact form={form} interactive={true} />
            <Content>
              <Title colorPoles={JSON.parse(colorPoles)}>
                by <span>{nickname}</span>
              </Title>
              <Info>
                <InfoTime>
                  <p>{`${createDate.getDate()} ${getMonthName(
                    createDate.getMonth()
                  )} ${createDate.getFullYear()}`}</p>
                  <p>{`${
                    createDate.getHours() + 1
                  }:${createDate.getMinutes()}`}</p>
                </InfoTime>
                <InfoAmt>${amount}</InfoAmt>
              </Info>
              <Message>{message}</Message>
              <Share>
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
              </Share>
            </Content>
          </Modal>
        </Container>,
        document.body
      )}
    </>
  );
};

export default GalleryModalComp;
