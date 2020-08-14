import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import { ReactQueryConfigProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

import "../utils/youtube.css";

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
      --color-neg: red;

      --ratio: 1.61803398875;
      --s-1: 14px;
      --s0: 18px;
      --s1: calc(var(--s0) * var(--ratio));
      --s2: calc(var(--s1) * var(--ratio));
      --s3: calc(var(--s2) * var(--ratio));
      --s4: calc(var(--s3) * var(--ratio));
      --rhythm: calc(var(--s0) * 2);
    }

    @media (max-width: 1200px) {
      :root {
        --s0: 16px;
      }
    }
  
    @media (max-width: 896px) {
      :root {
        --s0: 14px;
      }
    }
  
    @media (max-width: 600px) {
      :root {
        --s-1: 12px;
        --s0: 12px;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
      scroll-padding-top: 107px; /* height of sticky header */
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

    a:focus,
    button:focus,
    input:focus {
      outline: 3px solid var(--color-gradient-one);
    }

    iframe.instagram-media {
      max-width: 100% !important;
      width: 100% !important;
      min-width: auto !important;
      max-height: auto !important;
    }
  }
`;

const Container = styled.main`
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <title key="title">{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} key="link" />

        <meta property="og:title" content={title} key="og-title" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} key="og-url" />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_SG" />
        <meta property="og:site_name" content="The Next Stage" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} key="twitter-title" />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:url" content={url} key="twitter-url" />
        <meta property="twitter:image" content="/og-twitter.jpg" />
      </Head>
      <Defaults />
      <Navbar setHamburgerOpen={setHamburgerOpen} />
      {hamburgerOpen ? <Hamburger setHamburgerOpen={setHamburgerOpen} /> : null}
      <Container role="main" aria-label="Main content">
        <Component {...pageProps} />
      </Container>
      <Footer />
      <ReactQueryDevtools />
    </ReactQueryConfigProvider>
  );
}

export default MyApp;
