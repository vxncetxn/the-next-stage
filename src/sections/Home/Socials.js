import React from "react";
import styled, { keyframes } from "styled-components";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import QuoteText from "../../components/QuoteText";
import Anchor from "../../components/Anchor";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Socials = styled.section`
  position: relative;
  display: flex;
`;

const SocialsContent = styled.div`
  padding: 270px 100px 50px 100px;
`;

const Temp = styled.blockquote`
  position: relative;
  padding-left: 30px;
  // margin-left: 100px;
  // margin-bottom: 100px;

  &:before {
    content: "#";
    position: absolute;
    left: -10px;
    top: -20px;
    z-index: -1;
    font-family: var(--font-primary);
    font-size: 120px;
    line-height: 0.8;
    opacity: 0.8;

    background: linear-gradient(
      100deg,
      var(--color-gradient-one) 20%,
      var(--color-gradient-two) 40%,
      var(--color-gradient-two) 60%,
      var(--color-gradient-one) 80%
    );
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${Flow} 2s linear infinite;
  }
`;

const TempText = styled.p`
  font-family: var(--font-primary);
  font-size: 42px;
  color: var(--color-text);
`;

const SocialsComp = () => {
  return (
    <Socials id="socials">
      <SocialsContent>
        <Temp>
          <TempText style={{ marginBottom: 40 }}>thenextstage</TempText>
        </Temp>
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
      </SocialsContent>
      <SectionTitleBar position="right" paddingTop="265px">
        socials
      </SectionTitleBar>
    </Socials>
  );
};

export default SocialsComp;
