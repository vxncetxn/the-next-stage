import styled from "styled-components";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import QuoteText from "../../components/QuoteText";
import Anchor from "../../components/Anchor";

const Cause = styled.section`
  position: relative;
  display: flex;
`;

const CauseTitleBar = styled(SectionTitleBar)`
  padding-top: calc(18vw + 100px);

  @media (max-width: 896px) {
    padding-top: calc((28.125vw - 28.125px) + 50px);
  }

  @media (max-width: 600px) {
    padding-top: calc((28.125vw - 11.25px) + 50px);
  }
`;

const CauseContent = styled.div`
  padding: calc(18vw + 100px) 100px 420px 100px;

  @media (max-width: 1200px) {
    padding: calc(18vw + 100px) 75px 370px 75px;
  }

  @media (max-width: 896px) {
    padding: calc((28.125vw - 28.125px) + 50px) 50px
      calc(((100vw - 100px) / 4) + 100px) 50px;
  }

  @media (max-width: 600px) {
    padding: calc((28.125vw - 11.25px) + 50px) 20px
      calc(((100vw - 40px) / 4) + 90px) 20px;
  }
`;

const ImageGroupWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(50%);
  z-index: 99;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageGroup = styled.div`
  position: relative;
  width: 1000px;
  height: 500px;

  @media (max-width: 1200px) {
    width: 800px;
    height: 400px;
  }

  @media (max-width: 896px) {
    width: calc(100% - 100px);
    height: calc((100vw - 100px) / 2);
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    height: calc((100vw - 40px) / 2);
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const ImageOne = styled.div`
  position: absolute;
  left: 0;
  top: 20%;
  width: 65%;
  height: 0;
  padding-top: 35%;
  z-index: 2;
  background-image: linear-gradient(black, black), url("/image-one.jpg");
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;
  transition: transform 0.2s linear;

  &:hover {
    background-image: url("/image-one.jpg");
    background-blend-mode: normal;
    z-index: 999;
    transform: scale(1.1);
  }
`;

const ImageTwo = styled.div`
  position: absolute;
  left: 20%;
  top: -17%;
  width: 27%;
  height: 0;
  padding-top: 40%;
  z-index: 1;
  background-image: linear-gradient(black, black), url("/image-two.jpg");
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;
  transition: transform 0.2s linear;

  &:hover {
    background-image: url("/image-two.jpg");
    background-blend-mode: normal;
    z-index: 999;
    transform: scale(1.1);
  }
`;

const ImageThree = styled.div`
  position: absolute;
  right: 0;
  top: 6%;
  width: 55%;
  height: 0;
  padding-top: 33%;
  z-index: 3;
  background-image: linear-gradient(black, black), url("/image-three.jpg");
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;
  transition: transform 0.2s linear;

  &:hover {
    background-image: url("/image-three.jpg");
    background-blend-mode: normal;
    z-index: 999;
    transform: scale(1.1);
  }
`;

const ImageFour = styled.div`
  position: absolute;
  left: 35%;
  top: 58%;
  width: 37%;
  height: 0;
  padding-top: 25%;
  z-index: 4;
  background-image: linear-gradient(black, black), url("/image-four.jpg");
  background-size: cover;
  background-blend-mode: saturation;
  background-position: center;
  transition: transform 0.2s linear;

  &:hover {
    background-image: url("/image-four.jpg");
    background-blend-mode: normal;
    z-index: 999;
    transform: scale(1.1);
  }
`;

const CauseComp = () => {
  return (
    <Cause id="cause">
      <CauseContent>
        <QuoteText style={{ marginBottom: 40 }}>
          a platform through which we can reach out to the communities
        </QuoteText>
        <Text>
          As an arts centre for everyone, Esplanade also creates opportunities
          for seniors, youth, children and underserved communities to experience
          the arts. Therefore, Esplanade's theatres, including the new Singtel
          Waterfront Theatre, are not merely buildings - they are platforms to
          reach out to the communities and bring them transformative and
          meaningful experiences through the medium of arts.
          <br></br>
          <br></br>
          Ever since their inception, Esplanade has been active in bringing such
          arts experiences to over 10000 beneficiaries in Singapore. Your
          generous support for the new theatre will enable them to further such
          meaningful causes and outreach efforts and extend it to the
          generations ahead of us. To find out even more about Esplanade's
          community engagement efforts, please refer to{" "}
          <Anchor href="https://www.esplanade.com/about-us/community-engagement">
            this link
          </Anchor>
          .
        </Text>
      </CauseContent>
      <CauseTitleBar position="right">cause</CauseTitleBar>
      <ImageGroupWrapper>
        <ImageGroup>
          <ImageOne />
          <ImageTwo />
          <ImageThree />
          <ImageFour />
        </ImageGroup>
      </ImageGroupWrapper>
    </Cause>
  );
};

export default CauseComp;
