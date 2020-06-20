import React from "react";

import Defaults from "./Defaults";
import Cursor from "./Cursor";
import FixedOverlay from "./FixedOverlay";
import Hero from "./sections/Hero";
import Theatre from "./sections/Theatre";
import AboutThree from "./AboutThree";

function App() {
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
      <FixedOverlay />
      <Hero />
      <Theatre />
      <AboutThree />
    </>
  );
}

export default App;
