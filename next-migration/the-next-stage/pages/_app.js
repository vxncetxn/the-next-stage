import { createGlobalStyle } from "styled-components";

require("typeface-space-mono");
require("typeface-poppins");

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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Defaults />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
