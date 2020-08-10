import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import { ReactQueryConfigProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

import Navbar from "../sections/skeleton/Navbar";
import Hamburger from "../sections/skeleton/Hamburger";
import Footer from "../sections/skeleton/Footer";

require("typeface-space-mono");
require("typeface-poppins");

const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
  },
};

const Defaults = createGlobalStyle`
    :root {
      --font-primary: "Space Mono";
      --font-secondary: "Poppins";

      --color-background: #101223;
      --color-text: #ffffff;
      --color-element: #181b34;
      --color-gradient-one: #ee0979;
      --color-gradient-two: #ff6a00;
      --color-grey: #b3b3b3;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      position: relative;
      background-color: var(--color-background);
      overflow-x: hidden;
      transition: background-color 0.5s ease-out;
    }

    ul {
      list-style: none;
    }

    button {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto 0 auto;
`;

function MyApp({ Component, pageProps }) {
  const pathname = useRouter().pathname;

  var location;
  switch (pathname) {
    case "/":
      break;
    case "/faqs":
      location = "FAQs";
      break;
    case "/press-room":
      location = "Press Room";
      break;
    case "/terms-and-conditions":
      location = "Terms & Conditions";
      break;
    case "/privacy-policy":
      location = "Privacy Policy";
      break;
    case "/gallery":
      location = "Gallery";
      break;
    case "/gallery/[id]":
      location = "Loading Memento";
      break;
    case "/✨THANKYOU✨":
      location = "✨THANKYOU✨";
      break;
    default:
      location = "Page Not Found";
  }

  const title = location
    ? `${location} | The Next Stage — In Support of Esplanade`
    : `The Next Stage — In Support of Esplanade`;
  const description =
    "The Next Stage is a fundraising initiative organised by students from SUTD for Esplanade's upcoming Singtel Waterfront Theatre.";
  const url =
    location === "Page Not Found"
      ? "https://thenextstage.sg/"
      : `https://thenextstage.sg${pathname}`;

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <Head>
        <title key="title">{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} key="link" />
      </Head>
      <Defaults />
      <Navbar setHamburgerOpen={setHamburgerOpen} />
      {hamburgerOpen ? <Hamburger setHamburgerOpen={setHamburgerOpen} /> : null}
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
      <ReactQueryDevtools />
    </ReactQueryConfigProvider>
  );
}

export default MyApp;
