import {
  MegaMenu,
  MegaMenuGroup,
  MegaMenuItem,
  MegaMenuLink,
  MegaMenuLogo,
  MegaMenuMenu,
  MegaMenuSubMenu
} from "@kpn-style/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Layout", module).addDecorator(withKnobs);

stories.add("MegaMenu", () => (
  <MegaMenu style={{ boxShadow: "1px 1px 2px rgba(0, 0, 0, .3)" }}>
    <MegaMenuLogo>KPN</MegaMenuLogo>

    <MegaMenuMenu>
      <MegaMenuItem trigger>Menu</MegaMenuItem>
      <MegaMenuItem>
        <MegaMenuLink active={boolean("active", true)}>Home</MegaMenuLink>
      </MegaMenuItem>
      <MegaMenuItem>
        <MegaMenuLink>Information</MegaMenuLink>
      </MegaMenuItem>

      <MegaMenuItem>
        <MegaMenuLink>Getting Started</MegaMenuLink>
        <MegaMenuSubMenu>
          <MegaMenuGroup>
            <li>
              <MegaMenuLink>Installation</MegaMenuLink>
            </li>
            <li>
              <MegaMenuLink>Usage</MegaMenuLink>
            </li>
          </MegaMenuGroup>
          <MegaMenuGroup>
            <li>
              <MegaMenuLink>FAQ</MegaMenuLink>
            </li>
            <li>
              <MegaMenuLink>Contact</MegaMenuLink>
            </li>
          </MegaMenuGroup>
        </MegaMenuSubMenu>
      </MegaMenuItem>
    </MegaMenuMenu>
  </MegaMenu>
));
