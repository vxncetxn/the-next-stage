import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
// import { useInView } from "react-intersection-observer";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import CTAButton from "../../components/CTAButton";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Donate = styled.section`
  position: relative;
  display: flex;
`;

const DonateTitleBar = styled(SectionTitleBar)`
  padding-top: 390px;

  @media (max-width: 1200px) {
    padding-top: 340px;
  }

  @media (max-width: 896px) {
    padding-top: calc(((100vw - 100px) / 4) + 70px);
  }

  @media (max-width: 600px) {
    padding-top: calc(((100vw - 40px) / 4) + 70px);
  }
`;

const DonateContent = styled.div`
  padding: 390px 100px calc(225px + 100px) 100px;

  & > *:nth-child(1) {
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
  }

  & > *:nth-child(2) {
    transition: transform 0.6s ease-out 0.6s, opacity 0.6s ease-out 0.6s;
  }

  & > *:nth-child(3) {
    transition: transform 0.6s ease-out 1.2s, opacity 0.6s ease-out 1.2s;
  }

  & > *:nth-child(4) {
    transition: transform 0.6s ease-out 1.8s, opacity 0.6s ease-out 1.8s;
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
    padding: 340px 75px calc(197.5px + 100px) 75px;
  }

  @media (max-width: 896px) {
    padding: calc(((100vw - 100px) / 4) + 70px) 50px calc(197.5px + 50px) 50px;
  }

  @media (max-width: 600px) {
    padding: calc(((100vw - 40px) / 4) + 70px) 20px calc(197.5px + 50px) 20px;
  }
`;

const StepsText = styled(Text)`
  position: relative;
  padding-top: 30px;
  padding-left: 20px;
  margin-top: 50px;

  @media (max-width: 896px) {
    margin-top: 20px;
  }

  &:before {
    content: "${(props) => props.step}";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    font-family: var(--font-primary);
    font-size: 100px;
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

    @media (max-width: 1200px) {
      font-size: 90px;
    }

    @media (max-width: 896px) {
      font-size: 80px;
    }

    @media (max-width: 600px) {
      font-size: 70px;
    }
  }
`;

const DonationPanelWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(50%);
  z-index: 99;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DonationPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: calc(20px + 3%) calc(10px + 6%);
  width: 800px;
  height: 450px;
  background-color: var(--color-element);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  font-family: var(--font-secondary);
  color: var(--color-text);

  ${(props) =>
    props.panelInView
      ? `
        transform: translateX(0px);
        opacity: 1;
  `
      : `
        transform: translateX(-20px);
        opacity: 0;
  `}
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;

  @media (max-width: 1200px) {
    width: 700px;
    height: 395px;
  }

  @media (max-width: 896px) {
    width: calc(100% - 100px);
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const PanelTopText = styled.p`
  font-size: 24px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const PanelSmallText = styled.p`
  font-size: 12px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const OptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Option = styled.button`
  font-family: var(--font-primary);
  font-size: 18px;
  border: 1px solid
    ${(props) => (props.selected ? "var(--color-text)" : "#40488c")};
  border-radius: 12px;
  padding: 8% 6%;
`;

const DonateComp = () => {
  // const [contentRef, contentInView] = useInView({
  //   threshold: 0.3,
  //   triggerOnce: true,
  // });
  // const [panelRef, panelInView] = useInView({
  //   threshold: 0.3,
  //   triggerOnce: true,
  // });
  const [option, setOption] = useState("10");

  return (
    <Donate id="donate">
      <DonateTitleBar position="left">donate</DonateTitleBar>
      <DonateContent contentInView={true}>
        <Text>
          The Esplanade Co Ltd is a registered charity and not-for-profit
          organisation. Therefore, we depend greatly on the generous and
          forthcoming contributions of each and every one of our donors,
          sponsors and volunteers to persist in our mission to promote the arts
          to the wider community. Hence, we urge you to make a personal
          contribution to <i>The Next Stage</i> and to make the incentive to do
          so even greater, we have prepared a unique donation campaign where you
          can create a virtual art memento which will eventually be showcased in
          an AR exhibition when the theatre opens!
          <br></br>
          <br></br>
          The following steps detail the process for the donation campaign:
        </Text>
        <StepsText step="1">
          Make a donation on Giving.sg - a minimum donation of S$10 is required.
        </StepsText>
        <StepsText step="2">
          After you have successfully donated, a link will be sent to your email
          allowing you to create your very own virtual art memento!
        </StepsText>
        <StepsText step="3">
          The virtual art memento will eventually be featured in an AR
          exhibition to be held in conjunction with the opening of the theatre -
          see your memento in the real world!
        </StepsText>
      </DonateContent>
      <DonationPanelWrapper>
        <DonationPanel panelInView={true}>
          <PanelTopText>Help us build #thenextstage.</PanelTopText>
          <OptionsRow>
            {["10", "20", "50", "90"].map((val) => (
              <Option
                key={val}
                selected={option === val}
                onClick={() => setOption(val)}
              >
                ${val}
              </Option>
            ))}
          </OptionsRow>
          <CTAButton>Donate</CTAButton>
          <PanelSmallText>
            You will be redirected to Giving.sg, our approved donations platform
            partner, to complete your donation. You can learn more about
            Giving.sg here.
          </PanelSmallText>
        </DonationPanel>
      </DonationPanelWrapper>
    </Donate>
  );
};

export default DonateComp;
