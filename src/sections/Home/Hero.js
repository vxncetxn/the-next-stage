import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

import Demo from "../../Demo";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Hero = styled.section`
  position: relative;
  font-family: var(--font-primary);
  width: 100%;
  height: 100.5vh;
  display: flex;
  overflow: hidden;
`;

const HeroContent = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // border: 1px solid red;

  & p {
    margin-left: 15px;
    margin-top: 20px;
    font-size: 12px;
    color: white;
  }

  @media (max-width: 896px) {
    width: 100%;
    position: absolute;
    justify-content: flex-end;
  }
`;

const HeroTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -100px;

  @media (max-width: 896px) {
    margin-bottom: 100px;
  }
`;

const HeroAnim = styled.div`
  position: relative;
  height: 100%;
  width: 60%;
  // background-color: skyblue;

  // border: 1px solid red;

  & .img-row {
    position: absolute;
    right: 80px;
    bottom: 100px;
  }

  & img {
    height: 50px;
  }

  & img + img {
    margin-left: 20px;
  }

  @media (max-width: 896px) {
    width: 100%;
    z-index: -1;
  }
`;

const HeroTitle = styled.h1`
  font-size: 140px;
  font-weight: 700;
  line-height: 0.9;
  background: white;
  // background: linear-gradient(
  //   150deg,
  //   #ee0979 20%,
  //   #ff6a00 40%,
  //   #ff6a00 60%,
  //   #ee0979 80%
  // );
  background: linear-gradient(
    150deg,
    // #00f260 20%,
      // #0575e6 40%,
      // #0575e6 60%,
      // #00f260 80%
      var(--color-gradient-one) 20%,
    var(--color-gradient-two) 40%,
    var(--color-gradient-two) 60%,
    var(--color-gradient-one) 80%
  );
  background-size: 200% auto;

  color: white;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${Flow} linear infinite;
  animation-duration: 2s;

  @media (max-width: 1200px) {
    font-size: 100px;
  }

  @media (max-width: 896px) {
    font-size: 120px;
  }

  @media (max-width: 600px) {
    font-size: 100px;
  }
`;

const HeroComp = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.95,
    triggerOnce: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Hero id="main" ref={heroRef}>
      <HeroContent>
        <HeroTitleGroup>
          <HeroTitle className="hero-title">the</HeroTitle>
          <HeroTitle className="hero-title" /*style={{ marginTop: "-100px" }}*/>
            next
          </HeroTitle>
          <HeroTitle className="hero-title" /*style={{ marginTop: "-90px" }}*/>
            stage
          </HeroTitle>
        </HeroTitleGroup>
      </HeroContent>
      <HeroAnim></HeroAnim>
    </Hero>
  );
};

export default HeroComp;
