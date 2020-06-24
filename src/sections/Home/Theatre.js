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
`;

const TheatreContent = styled.div`
  padding: 50px 100px 30% 100px;

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
    padding: 50px 75px 30% 75px;
  }

  @media (max-width: 896px) {
    padding: 50px 50px 37% 50px;
  }

  @media (max-width: 600px) {
    padding: 50px 20px 37% 20px;
  }
`;

const YoutubeFrameWrapper = styled.div`
  position: absolute;
  left: 18%;
  bottom: -18%;
  // bottom: -200px;
  padding-bottom: 36.5%;
  width: 65%;
  height: 0;

  @media (max-width: 896px) {
    left: 0;
    width: calc(100% - 100px);
    margin: 0 50px 0 50px;
    padding-bottom: calc(56.25% - 56.25px);
  }

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    margin: 0 20px 0 20px;
    padding-bottom: calc(56.25% - 22.5px);
  }
`;

const YoutubeFrame = styled.iframe`
  position: absolute;
  // left: 330px;
  // bottom: -200px;
  // left: 18%;
  // bottom: -18%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // width: 888px;
  // height: 500px;
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
          Esplanade has always been a place for everyone.
        </QuoteText>
        <Text>
          <i>The Next Stage</i> is a fundraising initiative jointly organised by{" "}
          <Anchor>The Esplanade Co Ltd</Anchor> and students from the{" "}
          <Anchor>Singapore University of Technology and Design</Anchor>. We are
          moving into our next phase of growth as an arts centre and are
          building a new semi-flexible 550-seat venue along our busy waterfront.
          We broke ground for the theatre's construction on 18th June 2019 and
          it is targeted for completion in 2022.
          <br></br>
          <br></br>
          The new theatre will help to fill the gap between our existing large
          2000-seat venues and smaller studio spaces, so that community, youth
          and arts groups who have done well in smaller venues and are ready for
          larger audiences can use our new theatre as a stepping stone towards
          these aspirations. We also want to use our new theatre as a platform
          for us to commission, produce and present more productions that tell
          uniquely Singapore and Asian stories.
        </Text>
      </TheatreContent>
      <YoutubeFrameWrapper>
        <YoutubeFrame
          ref={videoRef}
          videoInView={true}
          title="theatre-intro-youtube"
          src="https://www.youtube.com/embed/p8muUyKAqSM"
          frameBorder="0"
          allowFullScreen
          width="888"
          height="500"
        ></YoutubeFrame>
      </YoutubeFrameWrapper>
    </Theatre>
  );
};

export default TheatreComp;
