import { createGlobalStyle } from "styled-components";

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

export default Defaults;
