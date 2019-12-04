import {
  AppBody,
  AppLayout,
  Collapse,
  Main,
  SideBar,
  SideBarLink,
  SideBarMenu,
  SideBarSubMenu,
  TitleBar,
  TitleBarTitle,
  TopBar,
  TopBarActionMenu,
  TopBarItem,
  TopBarLink,
  TopBarLogo,
  TopBarMenu,
  TopBarTitle
} from "@kpn-style/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Layout", module).addDecorator(withKnobs);

stories.add("Layout Example", () => (
  <AppBody>
    <AppLayout>
      <TopBar>
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
      <SideBar>
        <div className="side-bar__action-bar">
          <a href="#a" className="side-bar__link">
            <i className="ui-account"></i> John Doe
          </a>
          <button className="side-bar__close">Close</button>
        </div>
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
      <Main>
        <TitleBar>
          <TitleBarTitle>Full example</TitleBarTitle>
        </TitleBar>
        <div>
          <p>Some content</p>
          <p>More content</p>
          <p>Extra content</p>
        </div>
      </Main>
    </AppLayout>
  </AppBody>
));
