import React, { useEffect } from "react";
import styled from "styled-components";

import SectionTitleBar from "../components/SectionTitleBar";
import Text from "../components/Text";
import Anchor from "../components/Anchor";
import Accordion from "../components/Accordion";

const Press = styled.section`
  position: relative;
  display: flex;
`;

const PressContent = styled.div`
  padding: 150px 100px 150px 100px;
`;

const pressItems = [
  {
    triggerText:
      "18 Jun 2019: Esplanade breaks new ground with Singtel Waterfront Theatre",
    panelContents: (
      <ul>
        <li>
          <Text>
            <Anchor href="https://www.esplanade.com/-/media/files/press-room/2019/pr_singtel_waterfront_theatre_breaking_new_ground_2019.pdf?la=en&mw=1920">
              Esplanade breaks new ground with Singtel Waterfront Theatre
            </Anchor>{" "}
            | 0.55MB PDF Download
          </Text>
        </li>
        <li>
          <Text>
            <Anchor href="https://www.esplanade.com/-/media/files/press-room/2019/speech_minister_grace_fu_singtel_waterfront_theatre_groundbreaking_2019.pdf?la=en&mw=1920">
              Speech by Minister Grace Fu at Groundbreaking Ceremony
            </Anchor>{" "}
            | 0.21MB PDF Download
          </Text>
        </li>
        <li>
          <Text>
            <Anchor href="https://www.esplanade.com/-/media/files/press-room/2019/speech_chairman_lee_tzu_yang_singtel_waterfront_theatre_groundbreaking_18_jun_2019.pdf?la=en&mw=1920">
              Speech by Chairman Lee Tzu Yang at Groundbreaking Ceremony
            </Anchor>{" "}
            | 0.18MB PDF Download
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
        <Anchor href="https://www.esplanade.com/-/media/files/press-room/2018/pr_singtel_10mil_9jun2018.pdf?la=en&mw=1920">
          PR_Singtel_10mil_9Jun2018
        </Anchor>{" "}
        | 0.32MB PDF Download
      </Text>
    ),
  },
  {
    triggerText:
      "18 Dec 2017: Esplanade appoints a multidisciplinary team led by architects61 for the development and construction of its waterfront theatre",
    panelContents: (
      <Text>
        <Anchor href="https://www.esplanade.com/-/media/files/press-room/2017/pr_multidisciplinaryteam-waterfrontth_updated.pdf?la=en&mw=1920">
          PR_MultidisciplinaryTeam-WaterfrontTH_Updated
        </Anchor>{" "}
        | 0.54MB PDF Download
      </Text>
    ),
  },
  {
    triggerText:
      "10 Apr 2017: The Next Stage for Esplanade - Theatres on the Bay",
    panelContents: (
      <Text>
        <Anchor href="https://www.esplanade.com/-/media/files/press-room/2017/pr_550-seatwaterfonttheatre_10apr2017.pdf?la=en&mw=1920">
          PR_550-SeatWaterfrontTheatre_10Apr2017
        </Anchor>{" "}
        | 0.48MB PDF Download
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
      <SectionTitleBar position="right" paddingTop="140px">
        press room
      </SectionTitleBar>
    </Press>
  );
};

export default PressComp;
