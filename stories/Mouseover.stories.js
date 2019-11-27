import { Mouseover, MouseoverBody } from "kpn-style-react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components", module).addDecorator(withKnobs);

stories.add("Mouseover", () => {
  const active = boolean("active", false);
  const noHover = boolean("noHover", false);

  return (
    <Mouseover
      active={active}
      noHover={noHover}
      style={{ top: "150px", left: "150px" }}
    >
      Hover Me
      <MouseoverBody>Lorem ipsum dolor sit amet consectetur</MouseoverBody>
    </Mouseover>
  );
});
