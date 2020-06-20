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
      cursor: none;
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

    .fade-enter {
      opacity: 0;
    }
    .fade-enter-active {
      opacity: 1;
      transition: opacity 200ms;
    }
    .fade-exit {
      opacity: 1;
    }
    .fade-exit-active {
      opacity: 0;
      transition: opacity 200ms;
    }

    .wavy-highlight {
      background: url(${require("./assets/svgs/wave-accent-one.svg")});
      background-repeat: repeat;
      background-position-x: 0%;
      background-position-y: 0%;
      background-size: auto auto;
      background-repeat: repeat-x;
      // background-size: 15px 10px;
      background-size: 15px 9px;
      background-position: 2px 19px;
      animation: move 15s linear infinite;
      -webkit-animation: move 15s linear infinite;
      animation-play-state: paused;
      text-decoration: none;
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
      cursor: pointer;
    }

    .wavy-highlight:hover {
      animation-play-state: running;
    }
      
      
    @-webkit-keyframes move {
      from {
        background-position: 2px 19px;
      }
      to {
        background-position: 500px 19px;
      }
    }
    
    @keyframe move {
      from {
        background-position: 2px 19px;
      }
      to {
        background-position: 500px 19px;
      }
    }

    .timing {
      animation: ${Time} 3s linear forwards, ${Expand} 0.2s 3s linear forwards;
    }
`;

export default Defaults;
