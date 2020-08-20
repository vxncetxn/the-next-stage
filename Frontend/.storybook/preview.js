import React from "react";
import { themes } from "@storybook/theming";

import Defaults from "../components/Defaults";

require("typeface-space-mono");
require("typeface-poppins");

export const decorators = [
  (Story) => (
    <>
      <Defaults />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
};
