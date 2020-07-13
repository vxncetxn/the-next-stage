import React, { useEffect } from "react";
import styled from "styled-components";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
import PlainAnchor from "../components/PlainAnchor";
import Accordion from "../components/Accordion";

const A = PlainAnchor;

const Press = styled.section`
  position: relative;
  display: flex;
`;

const PressTitleBar = styled(SectionTitleBar)`
  padding-top: 140px;
`;

const PressContent = styled.div`
  padding: 150px 100px 150px 100px;

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

const pressItems = [
  {
    triggerText:
      "18 Jun 2019: Esplanade breaks new ground with Singtel Waterfront Theatre",
    panelContents: (
      <ul>
        <li>
          <Text>
            <A href="https://www.esplanade.com/-/media/files/press-room/2019/pr_singtel_waterfront_theatre_breaking_new_ground_2019.pdf?la=en&mw=1920">
              Esplanade breaks new ground with Singtel Waterfront Theatre |
              0.55MB PDF Download
            </A>
          </Text>
        </li>
        <li>
          <Text>
            <A href="https://www.esplanade.com/-/media/files/press-room/2019/speech_minister_grace_fu_singtel_waterfront_theatre_groundbreaking_2019.pdf?la=en&mw=1920">
              Speech by Minister Grace Fu at Groundbreaking Ceremony | 0.21MB
              PDF Download
            </A>
          </Text>
        </li>
        <li>
          <Text>
            <A href="https://www.esplanade.com/-/media/files/press-room/2019/speech_chairman_lee_tzu_yang_singtel_waterfront_theatre_groundbreaking_18_jun_2019.pdf?la=en&mw=1920">
              Speech by Chairman Lee Tzu Yang at Groundbreaking Ceremony |
              0.18MB PDF Download
            </A>
          </Text>
        </li>
      </ul>
    ),
    maxHeight: "150px",
  },
  {
    triggerText:
      "9 Jun 2018: Singtel donates S$10 million to Esplanade's new waterfront theatre",
    panelContents: (
      <Text>
        <A href="https://www.esplanade.com/-/media/files/press-room/2018/pr_singtel_10mil_9jun2018.pdf?la=en&mw=1920">
          PR_Singtel_10mil_9Jun2018 | 0.32MB PDF Download
        </A>
      </Text>
    ),
  },
  {
    triggerText:
      "18 Dec 2017: Esplanade appoints a multidisciplinary team led by architects61 for the development and construction of its waterfront theatre",
    panelContents: (
      <Text>
        <A href="https://www.esplanade.com/-/media/files/press-room/2017/pr_multidisciplinaryteam-waterfrontth_updated.pdf?la=en&mw=1920">
          PR_MultidisciplinaryTeam-WaterfrontTH_Updated | 0.54MB PDF Download
        </A>
      </Text>
    ),
  },
  {
    triggerText:
      "10 Apr 2017: The Next Stage for Esplanade - Theatres on the Bay",
    panelContents: (
      <Text>
        <A href="https://www.esplanade.com/-/media/files/press-room/2017/pr_550-seatwaterfonttheatre_10apr2017.pdf?la=en&mw=1920">
          PR_550-SeatWaterfrontTheatre_10Apr2017 | 0.48MB PDF Download
        </A>
      </Text>
    ),
  },
];

const PressComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Press>
      <PressContent>
        <Accordion items={pressItems} />
      </PressContent>
      <PressTitleBar position="right">press room</PressTitleBar>
    </Press>
  );
};

export default PressComp;
