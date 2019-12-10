import {
  AppBody,
  AppLayout,
  Collapse,
  Footer,
  FooterBody,
  FooterInlineList,
  FooterLink,
  FooterLogo,
  Main,
  SideBar,
  SideBarActionMenu,
  SideBarClose,
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
import { updateKnob } from "./utils";

const stories = storiesOf("Layout", module).addDecorator(withKnobs);

stories.add("App Example", () => {
  const activeSideBar = boolean("activeSideBar", false);

  return (
    <AppBody>
      <AppLayout activeSideBar={activeSideBar}>
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
            <TopBarItem
              trigger
              onClick={() => updateKnob("activeSideBar", true)}
            >
              Menu
            </TopBarItem>
          </TopBarMenu>
        </TopBar>
        <SideBar>
          <SideBarActionMenu>
            <SideBarLink>
              <i className="ui-account" /> Jon Doe
            </SideBarLink>
            <SideBarClose onClick={() => updateKnob("activeSideBar", false)} />
          </SideBarActionMenu>

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
        <Footer>
          <FooterBody>
            <FooterInlineList>
              <li>
                <FooterLink>Lorem ipsum</FooterLink>
              </li>
              <li>
                <FooterLink>Dolor sit amet</FooterLink>
              </li>
              <li>
                <FooterLink>Consectetur</FooterLink>
              </li>
            </FooterInlineList>
            <FooterInlineList separated>
              <li>
                <FooterLink>Lorem ipsum</FooterLink>
              </li>
              <li>
                <FooterLink>Dolor sit amet</FooterLink>
              </li>
              <li>
                <FooterLink>Consectetur</FooterLink>
              </li>
            </FooterInlineList>
            <FooterLogo>
              <img
                src="https://style.kpn.com/dummy/logo-kpn-white.png"
                alt="kpn"
              />
            </FooterLogo>
          </FooterBody>
        </Footer>
      </AppLayout>
    </AppBody>
  );
});
