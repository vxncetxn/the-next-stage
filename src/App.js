import React, { useState } from "react";

import Defaults from "./Defaults";
import FixedOverlay from "./FixedOverlay";
import Hero from "./Hero";
import About from "./About";

import AboutTwo from "./AboutTwo";
import AboutThree from "./AboutThree";
import AboutFour from "./AboutFour";
import Cursor from "./Cursor";

function App() {
  const [page, setPage] = useState("main");

  document.querySelector("body").addEventListener("mousemove", (e) => {
    const cursor = document.querySelector("#cursor");
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.querySelector("body").addEventListener("mousedown", () => {
    document
      .querySelectorAll(".hero-title")
      .forEach((n) => (n.style.animationDuration = "0.5s"));
    document.querySelector(".cursor-ring").classList.toggle("timing");
  });
  document.querySelector("body").addEventListener("mouseup", () => {
    document
      .querySelectorAll(".hero-title")
      .forEach((n) => (n.style.animationDuration = "2s"));
    document.querySelector(".cursor-ring").classList.toggle("timing");
  });

  return (
    <>
      <Defaults />
      <Cursor />
      <FixedOverlay setPage={setPage} />
      {/* <SwitchTransition mode="out-in">
        <CSSTransition
          key={page}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          {page === "main" ? <Hero /> : <About />}
        </CSSTransition>
      </SwitchTransition> */}
      <Hero />
      <AboutTwo />
      <AboutThree />
      <AboutFour />
    </>
  );
}

export default App;
