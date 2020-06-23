import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import QuoteText from "../../components/QuoteText";
import Anchor from "../../components/Anchor";

const Cause = styled.section`
  position: relative;
  display: flex;
`;

const CauseContent = styled.div`
  padding: 270px 100px 490px 100px;

  & > *:first-child {
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
  }

  & > *:nth-child(2) {
    transition: transform 0.6s ease-out 0.6s, opacity 0.6s ease-out 0.6s;
  }

  ${(props) =>
    props.contentInView
      ? `
      & > * {
        transform: translateX(0px);
        opacity: 1;
      }
  `
      : `
      & > * {
        transform: translateX(20px);
        opacity: 0;
      }
  `}

  @media (max-width: 1200px) {
    padding: 270px 75px 490px 75px;
  }

  @media (max-width: 896px) {
    padding: 270px 50px 490px 50px;
  }

  @media (max-width: 600px) {
    padding: 270px 20px 490px 20px;
  }
`;

const ImageGroup = styled.div`
  position: absolute;
  left: 230px;
  bottom: -180px;
  z-index: 99;
  width: 1000px;
  height: 500px;
  // border: 1px solid green;

  & > *:first-child {
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
  }

  & > *:nth-child(2) {
    transition: transform 0.6s ease-out 0.3s, opacity 0.6s ease-out 0.3s;
  }

  & > *:nth-child(3) {
    transition: transform 0.6s ease-out 0.6s, opacity 0.6s ease-out 0.6s;
  }

  & > *:nth-child(4) {
    transition: transform 0.6s ease-out 0.9s, opacity 0.6s ease-out 0.9s;
  }

  ${(props) =>
    props.imageGroupInView
      ? `
      & > * {
        transform: rotate(0deg);
        opacity: 1;
      }
  `
      : `
      & > * {
        opacity: 0;
      }

      & > *:first-child {
        transform: rotate(10deg);
      }
    
      & > *:nth-child(2) {
        transform: rotate(10deg);
      }
    
      & > *:nth-child(3) {
        transform: rotate(10deg);
      }
    
      & > *:nth-child(4) {
        transform: rotate(10deg);
      }
  `}
`;

const ImageOne = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  width: 650px;
  height: 350px;
  z-index: 2;
  background-image: linear-gradient(black, black),
    url(${require("../../assets/images/image-one.jpg")});
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;

  &:hover {
    // transition: transform 0.2s linear;
    background-image: url(${require("../../assets/images/image-one.jpg")});
    background-blend-mode: normal;
    z-index: 999;
    // transform: scale(1.1);
  }
`;

const ImageTwo = styled.div`
  position: absolute;
  left: 200px;
  top: -90px;
  width: 270px;
  height: 400px;
  z-index: 1;
  background-image: linear-gradient(black, black),
    url(${require("../../assets/images/image-two.jpg")});
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;

  &:hover {
    // transition: transform 0.2s linear;
    background-image: url(${require("../../assets/images/image-two.jpg")});
    background-blend-mode: normal;
    z-index: 999;
    // transform: scale(1.1);
  }
`;

const ImageThree = styled.div`
  position: absolute;
  left: 450px;
  top: 30px;
  width: 550px;
  height: 330px;
  z-index: 3;
  background-image: linear-gradient(black, black),
    url(${require("../../assets/images/image-three.jpg")});
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;

  &:hover {
    // transition: transform 0.2s linear;
    background-image: url(${require("../../assets/images/image-three.jpg")});
    background-blend-mode: normal;
    z-index: 999;
    // transform: scale(1.1);
  }
`;

const ImageFour = styled.div`
  position: absolute;
  left: 350px;
  top: 290px;
  width: 370px;
  height: 250px;
  z-index: 4;
  background-image: linear-gradient(black, black),
    url(${require("../../assets/images/image-two.jpg")});
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;

  &:hover {
    // transition: transform 0.2s linear;
    background-image: url(${require("../../assets/images/image-two.jpg")});
    background-blend-mode: normal;
    z-index: 999;
    // transform: scale(1.1);
  }
`;

const CauseComp = () => {
  const [contentRef, contentInView] = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });
  const [imageGroupRef, imageGroupInView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <Cause id="cause">
      <CauseContent ref={contentRef} contentInView={contentInView}>
        <QuoteText style={{ marginBottom: 40 }}>
          a new semi-flexible 550-seat venue which will fill the gap
        </QuoteText>
        <Text>
          <i>The Next Stage</i> is a fundraising initiative jointly organised by{" "}
          <Anchor>The Esplanade Co Ltd</Anchor> and students from the{" "}
          <Anchor>Singapore University of Technology and Design</Anchor>. The
          Esplanade Co Ltd a not-for-profit organisation and registered Charity
          whose mission is to preserve Singapore's iconic Esplanade Theatres as
          a performing arts centre for everyone. This fundraiser aims to raise
          funds for the SingTel Waterfront Theatre, a new semi-flexible 550-seat
          venue which will fill the gap between our existing large venues and
          smaller studio spaces, and enable us to commission, produce and
          present more productions, especially those that tell Singapore and
          Asian stories. <br></br>
          <br></br>The Esplanade Co Ltd a not-for-profit organisation and
          registered Charity whose mission is to preserve Singapore's iconic
          Esplanade Theatres as a performing arts centre for everyone. This
          fundraiser aims to raise funds for the SingTel Waterfront Theatre, a
          new semi-flexible 550-seat venue which will fill the gap between our
          existing large venues and smaller studio spaces, and enable us to
          commission, produce and present more productions, especially those
          that tell Singapore and Asian stories.
        </Text>
      </CauseContent>
      <SectionTitleBar position="right" paddingTop="265px">
        the cause
      </SectionTitleBar>
      <ImageGroup ref={imageGroupRef} imageGroupInView={imageGroupInView}>
        <ImageOne />
        <ImageTwo />
        <ImageThree />
        <ImageFour />
      </ImageGroup>
    </Cause>
  );
};

export default CauseComp;
