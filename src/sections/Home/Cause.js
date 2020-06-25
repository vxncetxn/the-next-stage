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
  padding: calc(18vw + 100px) 100px 490px 100px;

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
    padding: calc(18vw + 100px) 75px 490px 75px;
  }

  @media (max-width: 896px) {
    padding: calc((28.125vw - 28.125px) + 50px) 50px 490px 50px;
  }

  @media (max-width: 600px) {
    padding: calc((28.125vw - 11.25px) + 50px) 20px 490px 20px;
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
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Cause id="cause">
      <CauseContent ref={contentRef} contentInView={contentInView}>
        <QuoteText style={{ marginBottom: 40 }}>
          a platform through which we can reach out to the communities
        </QuoteText>
        <Text>
          At Esplanade, we believe that the arts transforms lives. We've
          witnessed how the arts can help build confidence, heal broken spirits
          and bring people together. Therefore, our theatres, including the new
          Singtel Waterfront Theatre, is not merely a building - it is a
          platform through which we can reach out to the communities and bring
          them transformative and meaningful experiences through the arts.
          <br></br>
          <br></br>
          Ever since our inception, Esplanade has been active in bringing such
          arts experiences to over 10000 beneficiaries in Singapore, including
          seniors, children, youth and those with special needs. Your generous
          support for the new theatre will enable us to further such meaningful
          causes and outreach efforts and extend it to the generations ahead of
          us. To find out even more about our community engagement efforts,
          please refer to{" "}
          <Anchor href="https://www.esplanade.com/about-us/community-engagement">
            this link
          </Anchor>
          .
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
