import styled from "styled-components";

import LiteYouTubeEmbed from "../../utils/youtube";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import QuoteText from "../../components/QuoteText";
import Anchor from "../../components/Anchor";

const Theatre = styled.section`
  position: relative;
  display: flex;
`;

const TheatreContent = styled.div`
  padding: 50px 100px calc(18vw + 100px) 100px;

  @media (max-width: 1200px) {
    padding: 50px 75px calc(18vw + 100px) 75px;
  }

  @media (max-width: 896px) {
    padding: 50px 50px calc((28.125vw - 28.125px) + 50px) 50px;
  }

  @media (max-width: 600px) {
    padding: 50px 20px calc((28.125vw - 11.25px) + 50px) 20px;
  }
`;

const YoutubeFrameWrapper = styled.div`
  position: absolute;
  left: 18%;
  bottom: 0;
  transform: translateY(50%);
  z-index: 99;
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

const TheatreSection = () => {
  return (
    <Theatre id="theatre">
      <SectionTitleBar position="left">theatre</SectionTitleBar>
      <TheatreContent>
        <QuoteText style={{ marginBottom: 40 }}>
          Esplanade has always been a place for everyone.
        </QuoteText>
        <Text>
          <i>The Next Stage</i> is a fundraising initiative organised by
          students from the{" "}
          <Anchor href="https://www.sutd.edu.sg/">
            Singapore University of Technology and Design
          </Anchor>{" "}
          in collaboration with{" "}
          <Anchor href="https://www.esplanade.com/">
            Esplanade — Theatres on the Bay
          </Anchor>{" "}
          for the upcoming 550-seat Singtel Waterfront Theatre. Esplanade broke
          ground for the theatre's construction on 18th June 2019 and it is
          currently slated for completion in 2022.
          <br></br>
          <br></br>
          The new theatre will help to fill the gap between Esplanade's existing
          large 2000-seat venues and smaller studio spaces, so that community,
          youth and arts groups who have done well in smaller venues and are
          ready for larger audiences can use it as a stepping stone towards
          these aspirations. It is also intended as a platform for Esplanade to
          commission, produce and present more productions that tell uniquely
          Singapore and Asian stories.
        </Text>
      </TheatreContent>
      <YoutubeFrameWrapper>
        <LiteYouTubeEmbed
          id="p8muUyKAqSM"
          title="Embedded Youtube promotional video of Singtel Waterfront Theatre"
        />
      </YoutubeFrameWrapper>
    </Theatre>
  );
};

export default TheatreSection;
