import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import { ReactQueryConfigProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

import "../utils/youtube.css";

import Navbar from "../sections/skeleton/Navbar";
import Footer from "../sections/skeleton/Footer";

import Defaults from "../components/Defaults";

require("typeface-space-mono");
require("typeface-poppins");

const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
  },
};

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
      <Navbar
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
      />
      <Container role="main" aria-label="Main content">
        <Component {...pageProps} />
      </Container>
      <Footer />
      {/* <ReactQueryDevtools /> */}
    </ReactQueryConfigProvider>
  );
}

export default MyApp;
