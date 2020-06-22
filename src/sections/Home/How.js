import React from "react";
import styled from "styled-components";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import QuoteText from "../../components/QuoteText";
import Anchor from "../../components/Anchor";

const How = styled.section`
  position: relative;
  display: flex;

  // border: 1px solid green;
`;

const HowContent = styled.div`
  padding: 310px 100px 370px 100px;
`;

const Placeholder = styled.div`
  position: absolute;
  left: 330px;
  bottom: -200px;
  z-index: 99;
  width: 888px;
  height: 500px;

  border: 1px solid green;
`;

const HowComp = () => {
  return (
    <How id="how">
      <SectionTitleBar position="left" paddingTop="300px">
        how it works
      </SectionTitleBar>
      <HowContent>
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
      </HowContent>
      <Placeholder />
    </How>
  );
};

export default HowComp;
