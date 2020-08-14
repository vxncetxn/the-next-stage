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

const SocialsTitleBar = styled(SectionTitleBar)`
  padding-top: calc(225px + 100px);

  @media (max-width: 1200px) {
    padding-top: calc(197.5px + 100px);
  }

  @media (max-width: 896px) {
    padding-top: calc(197.5px + 50px);
  }
`;

const SocialsContent = styled.div`
  width: 100%;
  padding: calc(225px + 100px) 100px 50px 100px;

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
  margin-bottom: 20px;
  padding-left: 4%;
  font-family: var(--font-primary);
  font-size: 42px;
  color: var(--color-text);

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

const embedUrlsArr = [
  "https://www.instagram.com/p/CBCrw1pgRnX/",
  "https://www.instagram.com/p/B_mxM40gkfI/",
  "https://www.instagram.com/p/B_kRy6QguVs/",
  "https://www.instagram.com/p/B_Ena7ngZDp/",
  "https://www.instagram.com/p/B9oADHHA9dI/",
  "https://www.instagram.com/p/B9O7U6gg0zL/",
  "https://www.instagram.com/p/B6xOUzmASZv/",
];

const SocialsComp = () => {
  const [contentRef, contentInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <Socials id="socials" aria-labelledby="socials-title">
      <SocialsContent ref={contentRef}>
        <Hashtag>thenextstage</Hashtag>
        <Text style={{ marginBottom: 50 }}>
          Use this hashtag on Instagram and you might find yourself featured
          here!{" "}
          <span role="img" aria-label="emoji of smiling head with sunglasses">
            😎
          </span>
        </Text>
        {contentInView ? <SocialsCol embedUrlsArr={embedUrlsArr} /> : null}
      </SocialsContent>
      <SocialsTitleBar id="socials-title" level={2} position="right">
        socials
      </SocialsTitleBar>
    </Socials>
  );
};

export default SocialsComp;
