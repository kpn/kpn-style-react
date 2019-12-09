import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { Tooltip, TooltipTrigger, TooltipBody} from "@kpn-style/react";

const stories = storiesOf("Components.Tooltip", module).addDecorator(withKnobs);

stories.add("Tooltip", () => {
  const active = boolean("active", true);

  return (
    <Tooltip active={active}>
      <TooltipTrigger />
        <TooltipBody>
          My Tooltip
      </TooltipBody>
    </Tooltip>
  )
});
