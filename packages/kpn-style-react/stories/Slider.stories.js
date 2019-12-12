import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import {
  Slider
} from "@kpn-style/react";
import { storiesOf } from "@storybook/react";
import { updateKnob } from "./utils";

const stories = storiesOf("Components", module).addDecorator(
  withKnobs
);

stories.add("Slider", () => {
  const fill = boolean("fill", true);
  const range = boolean("range", false);

  return (
    <Slider fill={fill} range={range} />
  );
});
