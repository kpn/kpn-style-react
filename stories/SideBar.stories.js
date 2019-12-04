import {
  Collapse,
  SideBar,
  SideBarLink,
  SideBarMenu,
  SideBarSubMenu
} from "@kpn-style/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Layout", module).addDecorator(withKnobs);

stories.add("Side Bar", () => (
  <SideBar fitLayout={false}>
    <SideBarMenu>
      <li>
        <SideBarLink active={boolean("active", true)}>Home</SideBarLink>
      </li>
      <li>
        <SideBarLink>Information</SideBarLink>
      </li>
      <li>
        <Collapse>
          <SideBarLink>Getting Started</SideBarLink>
          <SideBarSubMenu>
            <li>
              <SideBarLink active={boolean("active", true)}>
                Installation
              </SideBarLink>
            </li>
            <li>
              <SideBarLink>Usage</SideBarLink>
            </li>
          </SideBarSubMenu>
        </Collapse>
      </li>
    </SideBarMenu>
  </SideBar>
));
