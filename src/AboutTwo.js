import React from "react";
import styled, { keyframes } from "styled-components";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

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
  height: 1100px;
`;

const AboutTitle = styled.h2`
  position: absolute;
  top: 40px;
  right: 0;
  font-size: 100px;
  font-weight: 700;
  color: white;
  writing-mode: sideways-lr;
`;

const AboutQuote = styled.div`
  position: relative;
  font-family: var(--font-primary);
  font-size: 42px;
  color: white;
  margin-bottom: 40px;
  line-height: 1.5;
  padding-left: 30px;

  &:before {
    content: "“";
    position: absolute;
    left: -25px;
    top: -15px;
    z-index: -1;
    font-family: var(--font-primary);
    font-size: 180px;
    opacity: 0.8;
    line-height: 0.8;
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
  }
`;

const AboutContent = styled.div`
  width: 70%;
  padding: 50px 100px;
  font-size: 18px;
  line-height: 2;
  color: white;
`;

const Video = styled.div`
  position: absolute;
  left: 350px;
  bottom: -150px;
  border: 1px solid green;
  width: 800px;
  height: 400px;
  z-index: 99;
  background-image: url("https://i.ytimg.com/vi/GGY_WSFlkNI/hqdefault.jpg");
`;

const AboutTwo = () => {
  return (
    <About>
      <GradientBar>
        <AboutTitle>the theatre</AboutTitle>
      </GradientBar>
      <AboutContent>
        <AboutQuote>
          a new semi-flexible 550-seat venue which will fill the gap
        </AboutQuote>
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
      <iframe
        style={{
          position: "absolute",
          left: 330,
          bottom: -200,
          width: 888,
          height: 500,
          zIndex: 99,
        }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/p8muUyKAqSM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </About>
  );
};

export default AboutTwo;
