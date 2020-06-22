import React from "react";
import styled, { keyframes } from "styled-components";

// import Demo from "./Demo";

const Flow = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Hero = styled.section`
  font-family: var(--font-primary);
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const HeroContent = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px 0 100px 100px;

  & p {
    margin-left: 15px;
    margin-top: 20px;
    font-size: 12px;
    color: white;
  }
`;

const Logo = styled.img`
  width: 80px;
  margin-bottom: auto;
`;

const CTAButton = styled.button`
  width: 260px;
  position: relative;
  margin-left: 15px;
  margin-top: 20px;
  font-size: 24px;
  color: white;

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    content: "";
    width: 40px;
    height: 3px;
    background-color: white;
  }
`;

const HeroAnim = styled.div`
  position: relative;
  height: 100%;
  width: 60%;

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
`;

// const HeroTitleContainer = styled.div`
//   height: 500px;

//   border: 1px solid red;
// `;

// const HeroContentContainer = styled.div`
//   // border: 1px solid red;
//   margin-left: 100px;
//   height: 450px;
//   padding: 70px 0;
//   display: flex;
//   flex-direction: column;

//   & > p {
//     font-size: 18px;
//     color: white;
//   }

//   & > p + p {
//     margin-top: 20px;
//   }

//   & > button {
//     margin-top: auto;
//     align-self: start;
//     font-size: 18px;
//     font-weight: 700;
//     padding: 10px 30px;
//     border-radius: 20px;
//     background: rgb(129, 5, 216);
//     background: linear-gradient(
//       150deg,
//       #ee0979 20%,
//       #ff6a00 40%,
//       #ff6a00 60%,
//       #ee0979 80%
//     );
//     background-size: 200% auto;
//     color: white;
//     animation: ${Flow} 2s linear infinite;
//   }

//   & > button:hover {
//     animation: ${Flow} 0.3s linear infinite;
//   }
// `;

const HeroTitle = styled.h1`
  font-size: 140px;
  font-weight: 700;
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
    #00f260 20%,
    #0575e6 40%,
    #0575e6 60%,
    #00f260 80%
  );
  background-size: 200% auto;

  color: white;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${Flow} linear infinite;
  animation-duration: 2s;
`;

const HeroComp = () => {
  return (
    // <Hero>
    //   <HeroTitleContainer>
    //     <HeroTitle>sutd</HeroTitle>
    //     <HeroTitle style={{ marginTop: "-80px" }}>ring</HeroTitle>
    //     <HeroTitle style={{ marginTop: "-60px" }}>2020</HeroTitle>
    //   </HeroTitleContainer>
    //   <HeroContentContainer>
    //     <p>✔ Supports EZ-Link functionalities</p>
    //     <p>
    //       ✔ Both <span class="wavy-highlight">ring</span> and{" "}
    //       <span class="wavy-highlight">band</span> form factors
    //     </p>
    //     <p>
    //       ✔ <span class="wavy-highlight">Free</span> for Class of 2022 Students
    //     </p>
    //     <p>
    //       ✔ Make other school students{" "}
    //       <span class="wavy-highlight">jealous</span>
    //     </p>
    //     <p>
    //       ✔ Seriously <span class="wavy-highlight">cool</span>!
    //     </p>
    //     <button>Order Now</button>
    //   </HeroContentContainer>
    // </Hero>
    <Hero id="hero">
      <HeroContent>
        <Logo src={require("../assets/images/esplanade-logo-white.png")} />
        <HeroTitle className="hero-title">the</HeroTitle>
        <HeroTitle className="hero-title" style={{ marginTop: "-100px" }}>
          next
        </HeroTitle>
        <HeroTitle className="hero-title" style={{ marginTop: "-90px" }}>
          stage
        </HeroTitle>
        <CTAButton
        // onMouseDown={() => {
        //   document
        //     .querySelectorAll(".hero-title")
        //     .forEach((n) => (n.style.animationDuration = "0.5s"));
        // }}
        // onMouseUp={() => {
        //   document
        //     .querySelectorAll(".hero-title")
        //     .forEach((n) => (n.style.animationDuration = "2s"));
        // }}
        // onClick={() => {
        //   [...Array(15).keys()].forEach((n) => {
        //     setTimeout(() => {
        //       // console.log(`iteration ${n + 1}!`);
        //       const resultantTiming =
        //         Math.round((2 - 0.1 * (n + 1)) * 10) / 10;
        //       console.log("resultant timing is ", resultantTiming);
        //       document
        //         .querySelectorAll(".hero-title")
        //         .forEach(
        //           (n) => (n.style.animationDuration = `${resultantTiming}s`)
        //         );
        //     }, Math.round(200 * (n + 1)));
        //   });
        // }}
        >
          contribute
        </CTAButton>
      </HeroContent>
      <HeroAnim>
        {/* <img
          src={require("./artefact.png")}
          style={{ width: "100%", height: "100%" }}
        /> */}
        {/* <Demo /> */}
      </HeroAnim>
    </Hero>
  );
};

export default HeroComp;
