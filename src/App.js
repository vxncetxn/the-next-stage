import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

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

const Faqs = lazy(() => import("./sections/Faqs"));
const Press = lazy(() => import("./sections/Press"));
const Tncs = lazy(() => import("./sections/Tncs"));
const Privacy = lazy(() => import("./sections/Privacy"));
const Gallery = lazy(() => import("./sections/Gallery"));
const Magic = lazy(() => import("./sections/Magic"));
const Error = lazy(() => import("./sections/Error"));

const Artefact = lazy(() => import("./components/artefact/Artefact"));

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto 0 auto;
`;

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

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
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
        <Container>
          <Suspense fallback={() => {}}>
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
              <Route path="/gallery">
                <Gallery />
              </Route>
              {/* <Route path="/✨💓 THANKYOU ✨💓">
                <Magic />
              </Route> */}
              <Route path="/✨THANKYOU✨">
                <Magic />
              </Route>
              <Route path="/trial">
                <Artefact />
              </Route>
              <Route path="*" state="404">
                <Error />
              </Route>
            </Switch>
          </Suspense>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
