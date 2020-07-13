import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Defaults from "./Defaults";
import Meta from "./Meta";
// import Cursor from "./Cursor";
import Navbar from "./sections/Navbar";
import Hamburger from "./sections/Hamburger";
import Footer from "./sections/Footer";

import Hero from "./sections/Home/Hero";
import Theatre from "./sections/Home/Theatre";
import Cause from "./sections/Home/Cause";
import Donate from "./sections/Home/Donate";
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

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (hamburgerOpen) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "scroll";
    }
  }, [hamburgerOpen]);

  return (
    <>
      <Defaults />
      {/* <Cursor /> */}
      <Router>
        <Meta />
        <Navbar setHamburgerOpen={setHamburgerOpen} />
        {hamburgerOpen ? (
          <Hamburger setHamburgerOpen={setHamburgerOpen} />
        ) : null}
        <Switch>
          <Route exact path="/">
            <Hero />
            <Theatre />
            <Cause />
            <Donate />
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
          <Route path="*" state="404">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
