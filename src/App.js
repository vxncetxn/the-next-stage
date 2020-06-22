import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Defaults from "./Defaults";
import Cursor from "./Cursor";
import FixedOverlay from "./FixedOverlay";

import Hero from "./sections/Hero";
import Theatre from "./sections/Theatre";
import Cause from "./sections/Cause";
import How from "./sections/How";
import Socials from "./sections/Socials";
import Footer from "./sections/Footer";

import Faqs from "./sections/Faqs";
import Press from "./sections/Press";
import Tncs from "./sections/Tncs";
import Privacy from "./sections/Privacy";
import Error from "./sections/Error";

function App() {
  // document.querySelector("body").addEventListener("mousemove", (e) => {
  //   const cursor = document.querySelector("#cursor");
  //   cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  // });

  // document.querySelector("body").addEventListener("mousedown", () => {
  //   document
  //     .querySelectorAll(".hero-title")
  //     .forEach((n) => (n.style.animationDuration = "0.5s"));
  //   document.querySelector(".cursor-ring").classList.toggle("timing");
  // });
  // document.querySelector("body").addEventListener("mouseup", () => {
  //   document
  //     .querySelectorAll(".hero-title")
  //     .forEach((n) => (n.style.animationDuration = "2s"));
  //   document.querySelector(".cursor-ring").classList.toggle("timing");
  // });

  return (
    <>
      <Defaults />
      {/* <Cursor /> */}
      <Router>
        <FixedOverlay />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Theatre />
            <Cause />
            <How />
            <Socials />
          </Route>
          <Route path="/faqs">
            <Faqs />
          </Route>
          <Route path="/press-room">
            <Press />
          </Route>
          <Route path="/terms-and-conditions">
            <Tncs />
          </Route>
          <Route path="/privacy-policy">
            <Privacy />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
