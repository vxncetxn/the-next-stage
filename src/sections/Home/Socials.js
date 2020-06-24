import React from "react";
import styled, { keyframes } from "styled-components";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import QuoteText from "../../components/QuoteText";
import Anchor from "../../components/Anchor";

import { TwitterTweetEmbed } from "react-twitter-embed";

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
  width: 70%;
  padding: 270px 100px 50px 100px;
`;

const SocialsCols = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColOne = styled.div`
  width: 47.5%;
`;

const ColTwo = styled.div`
  width: 47.5%;
`;

const Temp = styled.blockquote`
  position: relative;
  padding-left: 30px;

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
          <TempText style={{ marginBottom: 40 }}>
            esplanadethenextstage
          </TempText>
        </Temp>
        <Text style={{ marginBottom: 50, marginTop: -20 }}>
          Use this hashtag on Twitter or Instagram and you might find yourself
          featured here! 😎
        </Text>
        <SocialsCols>
          <ColOne>
            <TwitterTweetEmbed tweetId="933354946111705097" />
            <TwitterTweetEmbed tweetId="1275674112963330050" />
            <TwitterTweetEmbed tweetId="1275526704245559296" />
            <TwitterTweetEmbed tweetId="1275634281080119296" />
          </ColOne>
          <ColTwo>
            <TwitterTweetEmbed tweetId="1272875505176293377" />
            <TwitterTweetEmbed tweetId="1275172694808551425" />
            <TwitterTweetEmbed tweetId="1275594467995607040" />
          </ColTwo>
        </SocialsCols>
      </SocialsContent>
      <SectionTitleBar position="right" paddingTop="265px">
        socials
      </SectionTitleBar>
    </Socials>
  );
};

export default SocialsComp;
