import React from "react";
import styled, { keyframes } from "styled-components";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const About = styled.section`
  position: relative;
  font-family: var(--font-primary);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 100px;

  //   border: 1px solid red;
`;

const AboutTitle = styled.h2`
  font-size: 100px;
  font-weight: 700;
  background: white;
  background: linear-gradient(
    100deg,
    #ee0979 20%,
    #ff6a00 40%,
    #ff6a00 60%,
    #ee0979 80%
  );
  background-size: 200% auto;

  color: white;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${Flow} 2s linear infinite;
`;

const AboutText = styled.p`
  width: 40%;
  font-size: 18px;
  line-height: 1.6;
  color: white;
`;

const ImageOne = styled.div`
  position: absolute;
  top: 280px;
  right: 250px;
  width: 470px;
  height: 300px;
  background-image: linear-gradient(black, black),
    url(${require("./image-one.jpg")});
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;
  transition: transform 0.2s linear;

  &:hover {
    // background-image: linear-gradient(
    //     150deg,
    //     rgba(238, 9, 121, 0.3) 20%,
    //     rgba(255, 106, 0, 0.3) 40%,
    //     rgba(255, 106, 0, 0.3) 60%,
    //     rgba(238, 9, 121, 0.3) 80%
    //   ),
    //   url(${require("./image-one.jpg")});
    background-image: url(${require("./image-one.jpg")});
    background-blend-mode: normal;
    z-index: 99;
    transform: scale(1.1);
  }
`;

const ImageTwo = styled.div`
  position: absolute;
  top: 130px;
  right: 170px;
  width: 320px;
  height: 350px;
  background-image: linear-gradient(black, black),
    url(${require("./image-two.jpg")});
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;
  transition: transform 0.2s linear;

  &:hover {
    // background-image: linear-gradient(
    //     150deg,
    //     rgba(238, 9, 121, 0.3) 20%,
    //     rgba(255, 106, 0, 0.3) 40%,
    //     rgba(255, 106, 0, 0.3) 60%,
    //     rgba(238, 9, 121, 0.3) 80%
    //   ),
    //   url(${require("./image-two.jpg")});
    background-image: url(${require("./image-two.jpg")});
    background-blend-mode: normal;
    z-index: 99;
    transform: scale(1.1);
  }
`;

const ImageThree = styled.div`
  position: absolute;
  top: 400px;
  right: 100px;
  width: 320px;
  height: 270px;
  background-image: linear-gradient(black, black),
    url(${require("./image-three.jpg")});
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;
  transition: transform 0.2s linear;

  &:hover {
    // background-image: linear-gradient(
    //     150deg,
    //     rgba(238, 9, 121, 0.3) 20%,
    //     rgba(255, 106, 0, 0.3) 40%,
    //     rgba(255, 106, 0, 0.3) 60%,
    //     rgba(238, 9, 121, 0.3) 80%
    //   ),
    //   url(${require("./image-three.jpg")});
    background-image: url(${require("./image-three.jpg")});
    background-blend-mode: normal;
    z-index: 99;
    transform: scale(1.1);
  }
`;

const AboutComp = () => {
  return (
    <About>
      <AboutTitle>about</AboutTitle>
      <AboutText>
        <i>The Next Stage</i> is a fundraising initiative jointly organised by{" "}
        <span class="wavy-highlight">The Esplanade Co Ltd</span> and students
        from the{" "}
        <span class="wavy-highlight">
          Singapore University of Technology and Design
        </span>
        . The Esplanade Co Ltd a not-for-profit organisation and registered
        Charity whose mission is to preserve Singapore's iconic Esplanade
        Theatres as a performing arts centre for everyone. This fundraiser aims
        to raise funds for the SingTel Waterfront Theatre, a new semi-flexible
        550-seat venue which will fill the gap between our existing large venues
        and smaller studio spaces, and enable us to commission, produce and
        present more productions, especially those that tell Singapore and Asian
        stories.
      </AboutText>
      <ImageTwo />
      <ImageOne />
      <ImageThree />
    </About>
  );
};

export default AboutComp;
