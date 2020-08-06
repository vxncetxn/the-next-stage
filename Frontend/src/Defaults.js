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
      --color-element: #181b34;
      --color-gradient-one: #ee0979;
      --color-gradient-two: #ff6a00;
      // --color-gradient-one: #00f260;
      // --color-gradient-two: #0575e6;
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

    iframe.instagram-media {
      max-width: 100% !important;
      width: 100% !important;
      min-width: auto !important;
      max-height: auto !important;
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

    .loader {
      font-size: 20px;
      position: relative;
      width: 70px;
      height: 10px;
    }
    
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 0.5em;
      background: var(--color-text);
      position: absolute;
      animation-duration: 0.5s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
    }
    
    .dot1, .dot2 {
      left: 0;
    }
    
    .dot3 { left: 1.5em; }
    
    .dot4 { left: 3em; }
    
    @keyframes reveal {
      from { transform: scale(0.001); }
      to { transform: scale(1); }
    }
    
    @keyframes slide {
      to { transform: translateX(1.5em) }
    }
    
    
    .dot1 {
      animation-name: reveal;
    }
    
    .dot2, .dot3 {
      animation-name: slide;
    }
    
    .dot4 {
      animation-name: reveal;
      animation-direction: reverse; /* thx @HugoGiraudel */
    }
`;

export default Defaults;
