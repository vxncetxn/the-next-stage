import { useState } from "react";
import styled, { keyframes } from "styled-components";

import Stack from "../../components/Stack";
import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import Anchor from "../../components/Anchor";
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

const DonateContent = styled(Stack)`
  width: 100%;
  padding: 390px 100px calc(225px + 100px) 100px;

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
  margin-top: calc(var(--rhythm) * 2);

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
  const [option, setOption] = useState("10");

  return (
    <Donate id="donate" aria-labelledby="donate-title">
      <DonateTitleBar id="donate-title" level={2} position="left">
        donate
      </DonateTitleBar>
      <DonateContent>
        <Text>
          Esplanade — Theatres on the Bay is operated by The Esplanade Co Ltd
          (TECL) which is a not-for-profit organisation, a registered Charity
          and an Institution of a Public Character. Therefore, they depend
          greatly on the generous contributions of each and every one of their
          donors, sponsors and volunteers to persist in their mission to promote
          the arts to the wider community.
        </Text>
        <Text>
          Hence, we urge you to make a personal contribution to{" "}
          <i>The Next Stage</i> and to make the incentive to do so even greater,
          we have prepared a unique donation campaign where you can create a
          virtual art memento which will be showcased in our online{" "}
          <Anchor to="/gallery">public gallery</Anchor>. This memento will serve
          to commemorate your generous contributions to our campaign.
        </Text>
        <Text>
          The following steps detail the process for the donation campaign:
        </Text>
        <StepsText step="1">
          Make a donation to Esplanade on Giving.sg - a minimum donation of S$10
          is required.
        </StepsText>
        <StepsText step="2">
          After you have successfully donated, a link will be sent to your email
          allowing you to create your very own virtual art memento.
        </StepsText>
        <StepsText step="3">
          See and experience your virtual art memento - along with those from
          other donors - in our online public gallery!
        </StepsText>
      </DonateContent>
      <DonationPanelWrapper>
        <DonationPanel>
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
