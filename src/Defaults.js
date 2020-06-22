import { createGlobalStyle, keyframes } from "styled-components";

require("typeface-space-mono");
require("typeface-poppins");

const Time = keyframes`
  to {
    stroke-dashoffset: 0px;
  }
`;

const Expand = keyframes`
  to {
    opacity: 0;
    transform: scale(2);
  }
`;

const Defaults = createGlobalStyle`
    :root {
      --font-primary: "Space Mono";
      --font-secondary: "Poppins";

      --color-background: #101223;
      --color-text: #ffffff;
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
      // cursor: none;
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

    .timing {
      animation: ${Time} 3s linear forwards, ${Expand} 0.2s 3s linear forwards;
    }
`;

export default Defaults;
