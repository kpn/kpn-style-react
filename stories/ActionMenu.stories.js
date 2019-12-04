import {
  ActionMenu,
  ActionMenuItem,
  ActionMenuLink,
  ActionMenuList,
  ActionMenuTrigger
} from "kpn-style-react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";
import { updateKnob } from "./utils";

const stories = storiesOf("Components.ActionMenu", module).addDecorator(
  withKnobs
);

stories.add("Simple", () => {
  const active = boolean("active", true);
  const direction = select(
    "direction",
    {
      [ActionMenu.directions.LEFT]: ActionMenu.directions.LEFT,
      [ActionMenu.directions.RIGHT]: ActionMenu.directions.RIGHT
    },
    ActionMenu.directions.LEFT
  );

  return (
    <div style={{ marginLeft: "10rem" }}>
      <ActionMenu active={active} direction={direction}>
        <ActionMenuTrigger />
        <ActionMenuList>
          <ActionMenuItem>
            <ActionMenuLink>Send Email</ActionMenuLink>
            <ActionMenuLink>Change Rol</ActionMenuLink>
          </ActionMenuItem>
        </ActionMenuList>
      </ActionMenu>
    </div>
  );
});

stories.add("With onHover Logic", () => {
  const active = boolean("active", false);
  const direction = select(
    "direction",
    {
      [ActionMenu.directions.LEFT]: ActionMenu.directions.LEFT,
      [ActionMenu.directions.RIGHT]: ActionMenu.directions.RIGHT
    },
    ActionMenu.directions.LEFT
  );

  return (
    <div style={{ marginLeft: "10rem" }}>
      <ActionMenu
        active={active}
        direction={direction}
        onMouseOver={() => updateKnob("active", true)}
        onMouseOut={() => updateKnob("active", false)}
      >
        <ActionMenuTrigger />
        <ActionMenuList>
          <ActionMenuItem>
            <ActionMenuLink>Send Email</ActionMenuLink>
            <ActionMenuLink>Change Rol</ActionMenuLink>
          </ActionMenuItem>
        </ActionMenuList>
      </ActionMenu>
    </div>
  );
});

stories.add("With onClick Logic", () => {
  const active = boolean("active", false);
  const direction = select(
    "direction",
    {
      [ActionMenu.directions.LEFT]: ActionMenu.directions.LEFT,
      [ActionMenu.directions.RIGHT]: ActionMenu.directions.RIGHT
    },
    ActionMenu.directions.LEFT
  );
  const onClick = evt => {
    updateKnob("active", !active);
  };

  return (
    <div style={{ marginLeft: "10rem" }}>
      <ActionMenu active={active} direction={direction} onClick={onClick}>
        <ActionMenuTrigger />
        <ActionMenuList>
          <ActionMenuItem>
            <ActionMenuLink>Send Email</ActionMenuLink>
            <ActionMenuLink>Change Rol</ActionMenuLink>
          </ActionMenuItem>
        </ActionMenuList>
      </ActionMenu>
    </div>
  );
});
