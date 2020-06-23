import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import QuoteText from "../../components/QuoteText";
import Anchor from "../../components/Anchor";

const Theatre = styled.section`
  position: relative;
  display: flex;

  // border: 1px solid green;

  @media (max-width: 1200px) {
    border: 1px solid green;
  }

  @media (max-width: 896px) {
    border: 1px solid red;
  }
`;

const TheatreContent = styled.div`
  padding: 50px 100px 370px 100px;

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
        transform: translateX(-20px);
        opacity: 0;
      }
  `}

  @media (max-width: 1200px) {
    padding: 50px 75px 370px 75px;
  }

  @media (max-width: 896px) {
    padding: 50px 50px 370px 50px;
  }

  @media (max-width: 600px) {
    padding: 50px 20px 200px 20px;
  }
`;

const YoutubeFrame = styled.iframe`
  position: absolute;
  // left: 330px;
  // bottom: -200px;
  left: 18%;
  bottom: -18%;
  width: 888px;
  height: 500px;
  z-index: 99;

  ${(props) =>
    props.videoInView
      ? `
    transform: translateX(0px);
    opacity: 1;
  `
      : `
    transform: translateX(-20px);
    opacity: 0;
  `}
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;
`;

const TheatreComp = () => {
  const [contentRef, contentInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [videoRef, videoInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Theatre id="theatre">
      <SectionTitleBar position="left">the theatre</SectionTitleBar>
      <TheatreContent ref={contentRef} contentInView={contentInView}>
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
      </TheatreContent>
      <YoutubeFrame
        ref={videoRef}
        videoInView={videoInView}
        title="theatre-intro-youtube"
        src="https://www.youtube.com/embed/p8muUyKAqSM"
        frameBorder="0"
        allowFullScreen
      ></YoutubeFrame>
    </Theatre>
  );
};

export default TheatreComp;
