import {
  Collapse,
  TopBar,
  TopBarActionMenu,
  TopBarItem,
  TopBarLink,
  TopBarLogo,
  TopBarMenu,
  TopBarTitle
} from "kpn-react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import StoryRouter from "storybook-react-router";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Layout", module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter());

stories.add("TopBar", () => (
  <TopBar
    fitLayout={false}
    style={{ boxShadow: "1px 1px 2px rgba(0, 0, 0, .3)" }}
  >
    <TopBarLogo>CT</TopBarLogo>
    <TopBarTitle>Campaigntool</TopBarTitle>
    <TopBarMenu>
      <TopBarItem>
        <TopBarLink active={boolean("active", true)}>Home</TopBarLink>
      </TopBarItem>
      <TopBarItem>
        <TopBarLink>Information</TopBarLink>
      </TopBarItem>
      <TopBarItem>
        <Collapse>
          <TopBarLink>Getting Started</TopBarLink>
          <TopBarActionMenu>
            <li>
              <TopBarLink>Installation</TopBarLink>
            </li>
            <li>
              <TopBarLink>Usage</TopBarLink>
            </li>
          </TopBarActionMenu>
        </Collapse>
      </TopBarItem>
    </TopBarMenu>
  </TopBar>
));
