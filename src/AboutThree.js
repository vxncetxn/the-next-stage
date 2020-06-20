import React from "react";
import styled from "styled-components";

const About = styled.section`
  position: relative;
  display: flex;
  font-family: var(--font-secondary);
  //   border: 1px solid red;
`;

const GradientBar = styled.div`
  position: relative;
  background: linear-gradient(to bottom, #ee0979 0%, #ff6a00 100%);

  width: 30%;
  height: 1430px;
`;

const AboutTitle = styled.h2`
  position: absolute;
  top: 300px;
  left: 0;
  font-size: 100px;
  font-weight: 700;
  color: white;
  writing-mode: vertical-lr;
`;

const AboutContent = styled.p`
  width: 70%;
  padding: 300px 100px 50px 100px;
  font-size: 18px;
  line-height: 2;
  color: white;
`;

const ImageOne = styled.div`
  position: absolute;
  bottom: -260px;
  left: 250px;
  width: 700px;
  height: 400px;
  background-image: linear-gradient(black, black),
    url(${require("./image-one.jpg")});
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;
  transition: transform 0.2s linear;
  z-index: 97;

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
  bottom: -130px;
  left: 700px;
  width: 400px;
  height: 500px;
  background-image: linear-gradient(black, black),
    url(${require("./image-two.jpg")});
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;
  transition: transform 0.2s linear;
  z-index: 96;

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
  bottom: -360px;
  left: 770px;
  width: 500px;
  height: 400px;
  background-image: linear-gradient(black, black),
    url(${require("./image-three.jpg")});
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;
  transition: transform 0.2s linear;
  z-index: 98;

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

const AboutThree = () => {
  return (
    <About>
      <AboutContent>
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
        stories. <br></br>
        <br></br>The Esplanade Co Ltd a not-for-profit organisation and
        registered Charity whose mission is to preserve Singapore's iconic
        Esplanade Theatres as a performing arts centre for everyone. This
        fundraiser aims to raise funds for the SingTel Waterfront Theatre, a new
        semi-flexible 550-seat venue which will fill the gap between our
        existing large venues and smaller studio spaces, and enable us to
        commission, produce and present more productions, especially those that
        tell Singapore and Asian stories.
      </AboutContent>
      <GradientBar>
        <AboutTitle>the theatre</AboutTitle>
      </GradientBar>
      <ImageTwo />
      <ImageOne />
      <ImageThree />
    </About>
  );
};

export default AboutThree;
