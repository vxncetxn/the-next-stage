import React, { useEffect } from "react";
import styled from "styled-components";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
import Anchor from "../components/Anchor";

const Magic = styled.section`
  position: relative;
  display: flex;
`;

const MagicTitleBar = styled(SectionTitleBar)`
  padding-top: 140px;
`;

const MagicContent = styled.div`
  padding: 150px 100px 50px 100px;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 150px 75px 50px 75px;
  }

  @media (max-width: 896px) {
    padding: 150px 50px 50px 50px;
  }

  @media (max-width: 600px) {
    padding: 150px 20px 50px 20px;
  }
`;

const MagicComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Magic>
      <MagicContent></MagicContent>
      <MagicTitleBar position="right">your artefact</MagicTitleBar>
    </Magic>
  );
};

export default MagicComp;
