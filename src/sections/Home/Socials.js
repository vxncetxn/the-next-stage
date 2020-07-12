import React from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

import SectionTitleBar from "../../components/SectionTitleBar";
import Text from "../../components/Text";
import SocialsCol from "../../components/SocialsCol";

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
  padding: calc(225px + 100px) 100px 50px 100px;

  & > *:nth-child(1) {
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
  }

  & > *:nth-child(2) {
    transition: transform 0.6s ease-out 0.6s, opacity 0.6s ease-out 0.6s;
  }

  & > *:nth-child(3) {
    transition: transform 0.6s ease-out 1.2s, opacity 0.6s ease-out 1.2s;
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
        transform: translateX(20px);
        opacity: 0;
      }
  `}

  @media (max-width: 1200px) {
    padding: calc(197.5px + 100px) 75px 50px 75px;
  }

  @media (max-width: 896px) {
    padding: calc(197.5px + 50px) 50px 50px 50px;
  }

  @media (max-width: 600px) {
    padding: calc(197.5px + 50px) 20px 50px 20px;
  }
`;

const Hashtag = styled.p`
  position: relative;
  // display: inline;
  margin-bottom: 20px;
  padding-left: 4%;
  font-family: var(--font-primary);
  font-size: 42px;
  color: var(--color-text);
  overflow-wrap: break-word;
  // cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 34px;
  }

  @media (max-width: 896px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }

  &:before {
    content: "#";
    position: absolute;
    left: -2%;
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

    @media (max-width: 1200px) {
      font-size: 100px;
    }

    @media (max-width: 896px) {
      font-size: 80px;
    }

    @media (max-width: 600px) {
      font-size: 60px;
    }
  }
`;

// const CopyIcon = styled.svg`
//   position: absolute;
//   right: 0;
//   bottom: 0;
// `;

const tweetIdsArr = [
  "933354946111705097",
  "1275674112963330050",
  "1275526704245559296",
  "1272875505176293377",
  "1275634281080119296",
  "1275172694808551425",
  "1275594467995607040",
];

const SocialsComp = ({ entryIsHero }) => {
  const [contentRef, contentInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <Socials id="socials">
      <SocialsContent
        ref={contentRef}
        contentInView={entryIsHero ? contentInView : true}
      >
        <Hashtag>
          esplanadethenextstage
          {/* <CopyIcon
            width="20"
            viewBox="0 0 100 100.04"
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--color-grey)"
          >
            <path d="m43.39 72a19.33 19.33 0 0 0 15.78 2.32c-.17.19-.28.32-.41.45q-8.76 8.76-17.43 17.47a25.84 25.84 0 0 1 -14.71 7.53 22.81 22.81 0 0 1 -26.09-18c-1.69-8.47.69-15.93 6.47-22.22 3.82-4.15 7.94-8 11.94-12 3-3 6-6.17 9.15-9.08a25.12 25.12 0 0 1 19.32-6.95 22 22 0 0 1 14.47 6.6 6.35 6.35 0 0 1 -4.28 10.82 5.62 5.62 0 0 1 -4.4-1.62c-4.32-4.42-11.2-4.08-15.76-.32-1.73 1.43-3.25 3.11-4.84 4.71q-7.87 7.88-15.71 15.79a14 14 0 0 0 -4.14 7.82 10.43 10.43 0 0 0 9.13 12 12.19 12.19 0 0 0 10-3.62c3.62-3.46 7.11-7 10.65-10.59.29-.35.58-.74.86-1.11z" />
            <path d="m56.55 27.84c-5-2.76-10.1-3.78-15.58-2.33 0 0 0 0 .07-.09s.14-.15.21-.23q8.75-8.72 17.44-17.43a26 26 0 0 1 13.31-7.25c13.15-2.69 25.39 5.55 27.61 18.49a24.3 24.3 0 0 1 -6.16 21c-3.06 3.46-6.49 6.6-9.76 9.87q-5.56 5.51-11.15 11.03a25.4 25.4 0 0 1 -14.62 7.45 22.57 22.57 0 0 1 -19.73-6.35 6.34 6.34 0 0 1 3.29-10.8 6.11 6.11 0 0 1 5.57 1.73 9.9 9.9 0 0 0 4.38 2.56 12.11 12.11 0 0 0 12-3.29c4.76-4.62 9.38-9.38 14.06-14.09l5.73-5.77a13.45 13.45 0 0 0 4.09-8.34 10.39 10.39 0 0 0 -10.31-11.34 12.94 12.94 0 0 0 -9.32 4.07c-3.62 3.58-7.2 7.19-10.81 10.79-.12.15-.28.28-.32.32z" />
          </CopyIcon> */}
        </Hashtag>
        <Text style={{ marginBottom: 50 }}>
          Use this hashtag on Twitter or Instagram and you might find yourself
          featured here! 😎
        </Text>
        <SocialsCol tweetIdsArr={tweetIdsArr} />
      </SocialsContent>
      <SectionTitleBar position="right" paddingTop="320px">
        socials
      </SectionTitleBar>
    </Socials>
  );
};

export default SocialsComp;
