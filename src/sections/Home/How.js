import React from "react";
import styled from "styled-components";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import QuoteText from "../../components/QuoteText";

const How = styled.section`
  position: relative;
  display: flex;

  // border: 1px solid green;
`;

const HowContent = styled.div`
  padding: 310px 100px 420px 100px;
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
          Lorem Ipsum is simply generic dummy text of the printing
        </QuoteText>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br></br>
          <br></br>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </HowContent>
      <Placeholder />
    </How>
  );
};

export default HowComp;
