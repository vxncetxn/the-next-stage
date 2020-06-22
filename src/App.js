import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Defaults from "./Defaults";
import Cursor from "./Cursor";
import FixedOverlay from "./FixedOverlay";
import Footer from "./sections/Footer";

import Hero from "./sections/Home/Hero";
import Theatre from "./sections/Home/Theatre";
import Cause from "./sections/Home/Cause";
import How from "./sections/Home/How";
import Socials from "./sections/Home/Socials";

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
