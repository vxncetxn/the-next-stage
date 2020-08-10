import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ReactQueryConfigProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

import Navbar from "../sections/skeleton/Navbar";
import Hamburger from "../sections/skeleton/Hamburger";

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
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <Defaults />
      <Navbar setHamburgerOpen={setHamburgerOpen} />
      {hamburgerOpen ? <Hamburger setHamburgerOpen={setHamburgerOpen} /> : null}
      <Container>
        <Component {...pageProps} />
      </Container>
      <ReactQueryDevtools />
    </ReactQueryConfigProvider>
  );
}

export default MyApp;
