import React from "react";
import styled from "styled-components";

import Artefact from "../../components/artefact/Artefact";

const Hero = styled.section`
  position: relative;
  font-family: var(--font-primary);
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const HeroContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;

  @media (max-width: 896px) {
    width: 100%;
    position: absolute;
    justify-content: flex-end;
  }
`;

const HeroTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const HeroAnim = styled.div`
  position: relative;
  height: 150%;
  width: 100%;
  z-index: -1;
  margin-top: -150px;

  @media (max-width: 896px) {
    height: 100%;
    margin-top: 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 140px;
  font-weight: 700;
  line-height: 0.9;
  color: var(--color-text);
  cursor: default;

  &::selection {
    background-color: none;
  }

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

const SubTitle = styled.p`
  font-family: var(--font-secondary);
  font-size: 18px;
  color: var(--color-text);
  margin-top: 40px;
  width: 400px;
  text-align: right;
`;

const form = `[{"vertices":[[0,1,0],[-1,0,4],[2,0,1],[-4,0,-3]],"color":"rgb(248, 67, 48)","position":[-5,1,-7],"rotation":[0.65,2.96,5.69]},{"vertices":[[0,2,0],[-1,0,2],[3,0,1],[-4,0,-4]],"color":"rgb(245, 48, 73)","position":[7,-3,-1],"rotation":[0.67,3.61,1.95]},{"vertices":[[0,1,0],[-1,0,3],[4,0,-1],[-3,0,-4]],"color":"rgb(238, 9, 121)","position":[3,-6,-7],"rotation":[2.57,0.92,3.99]},{"vertices":[[0,2,0],[-1,0,2],[2,0,0],[-3,0,-4]],"color":"rgb(248, 67, 48)","position":[4,7,5],"rotation":[4.36,0.75,5.13]},{"vertices":[[0,2,0],[0,0,2],[4,0,0],[-4,0,-4]],"color":"rgb(245, 48, 73)","position":[7,5,1],"rotation":[1.8,6.01,4.4]},{"vertices":[[0,2,0],[1,0,3],[4,0,-1],[-2,0,-3]],"color":"rgb(255, 106, 0)","position":[-6,6,-1],"rotation":[0.94,2.8,1.25]},{"vertices":[[0,3,0],[-1,0,2],[4,0,1],[-2,0,-2]],"color":"rgb(238, 9, 121)","position":[7,-6,0],"rotation":[0.26,1.39,4.36]},{"vertices":[[0,3,0],[0,0,3],[3,0,1],[-3,0,-2]],"color":"rgb(252, 87, 24)","position":[1,6,-6],"rotation":[3.31,1.77,3.62]},{"vertices":[[0,3,0],[-1,0,2],[4,0,-1],[-2,0,-4]],"color":"rgb(248, 67, 48)","position":[-1,-4,-2],"rotation":[0.65,3.93,5.14]},{"vertices":[[0,2,0],[0,0,4],[3,0,0],[-4,0,-4]],"color":"rgb(245, 48, 73)","position":[-3,-6,-5],"rotation":[5.38,4.12,5.2]},{"vertices":[[0,2,0],[1,0,2],[3,0,-1],[-2,0,-2]],"color":"rgb(252, 87, 24)","position":[4,-1,1],"rotation":[1.89,3.97,4.29]},{"vertices":[[0,2,0],[-1,0,4],[4,0,1],[-2,0,-3]],"color":"rgb(255, 106, 0)","position":[-2,-1,3],"rotation":[0.49,1.19,0.89]},{"vertices":[[0,1,0],[-1,0,3],[4,0,1],[-4,0,-3]],"color":"rgb(238, 9, 121)","position":[-2,-6,0],"rotation":[0.39,5.16,6.11]},{"vertices":[[0,1,0],[0,0,4],[4,0,-1],[-3,0,-4]],"color":"rgb(252, 87, 24)","position":[2,-5,3],"rotation":[1.42,1.23,2.87]},{"vertices":[[0,3,0],[0,0,4],[3,0,-1],[-2,0,-2]],"color":"rgb(252, 87, 24)","position":[-6,-1,-6],"rotation":[0.8,2.39,5.53]},{"vertices":[[0,2,0],[-1,0,3],[3,0,-1],[-4,0,-2]],"color":"rgb(241, 28, 97)","position":[-6,-4,-1],"rotation":[1.9,4.76,2.58]},{"vertices":[[0,3,0],[-1,0,4],[3,0,1],[-3,0,-3]],"color":"rgb(238, 9, 121)","position":[2,4,7],"rotation":[5.06,0.34,0.88]},{"vertices":[[0,2,0],[-1,0,4],[2,0,-1],[-2,0,-4]],"color":"rgb(252, 87, 24)","position":[0,-1,-6],"rotation":[3.63,1.93,3.68]},{"vertices":[[0,1,0],[0,0,2],[2,0,1],[-2,0,-2]],"color":"rgb(252, 87, 24)","position":[6,-6,1],"rotation":[6.24,4.61,2.49]},{"vertices":[[0,1,0],[-1,0,2],[2,0,0],[-4,0,-3]],"color":"rgb(255, 106, 0)","position":[3,5,3],"rotation":[4.15,6,4.56]}]`;

const HeroComp = () => {
  return (
    <Hero id="main">
      <HeroContent>
        <HeroTitleGroup>
          <HeroTitle className="hero-title">the</HeroTitle>
          <HeroTitle className="hero-title">next</HeroTitle>
          <HeroTitle className="hero-title">stage</HeroTitle>
        </HeroTitleGroup>
        <SubTitle>— in collaboration with Esplanade</SubTitle>
      </HeroContent>
      <HeroAnim>
        <Artefact form={form} interactive={false} />
      </HeroAnim>
    </Hero>
  );
};

export default HeroComp;
