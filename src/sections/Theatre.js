import React from "react";
import styled from "styled-components";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
import QuoteText from "../components/QuoteText";
import Anchor from "../components/Anchor";

const Theatre = styled.section`
  position: relative;
  display: flex;

  // border: 1px solid green;
`;

const TheatreContent = styled.div`
  padding: 50px 100px 400px 100px;
`;

const YoutubeFrame = styled.iframe`
  position: absolute;
  left: 330px;
  bottom: -200px;
  z-index: 99;
`;

const TheatreComp = () => {
  return (
    <Theatre>
      <SectionTitleBar>the theatre</SectionTitleBar>
      <TheatreContent>
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
        title="theatre-intro-youtube"
        width="888"
        height="500"
        src="https://www.youtube.com/embed/p8muUyKAqSM"
        frameBorder="0"
        allowFullScreen
      ></YoutubeFrame>
    </Theatre>
  );
};

export default TheatreComp;
