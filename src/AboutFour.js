import React from "react";
import styled from "styled-components";

const About = styled.section`
  display: flex;
  font-family: var(--font-secondary);
  //   border: 1px solid red;
`;

const GradientBar = styled.div`
  position: relative;
  background: linear-gradient(to bottom, #ee0979 0%, #ff6a00 100%);

  width: 30%;
  height: 1150px;
`;

const AboutTitle = styled.h2`
  position: absolute;
  top: 450px;
  right: 0;
  font-size: 100px;
  font-weight: 700;
  color: white;
  writing-mode: sideways-lr;
`;

const AboutContent = styled.p`
  width: 70%;
  padding: 450px 100px 50px 100px;
  font-size: 18px;
  line-height: 2;
  color: white;
`;

const AboutFour = () => {
  return (
    <About>
      <GradientBar>
        <AboutTitle>the theatre</AboutTitle>
      </GradientBar>
      <AboutContent>
        <i>The Next Stage</i> is a fundraising initiative jointly organised by{" "}
        <span class="wavy-highlight">The Esplanade Co Ltd</span> and students
        from the{" "}
        <span class="wavy-highlight">
          Singapore University of Technology and Design
        </span>
        . The Esplanade Co Ltd a not-for-profit organisation and registered
        Charity whose mission is to preserve Singapore's iconic Esplanade
        Theatres as a performing arts centre for everyone. This fundraiser aims
        to raise funds for the SingTel Waterfront Theatre, a new semi-flexible
        550-seat venue which will fill the gap between our existing large venues
        and smaller studio spaces, and enable us to commission, produce and
        present more productions, especially those that tell Singapore and Asian
        stories. <br></br>
        <br></br>The Esplanade Co Ltd a not-for-profit organisation and
        registered Charity whose mission is to preserve Singapore's iconic
        Esplanade Theatres as a performing arts centre for everyone. This
        fundraiser aims to raise funds for the SingTel Waterfront Theatre, a new
        semi-flexible 550-seat venue which will fill the gap between our
        existing large venues and smaller studio spaces, and enable us to
        commission, produce and present more productions, especially those that
        tell Singapore and Asian stories.
      </AboutContent>
    </About>
  );
};

export default AboutFour;
