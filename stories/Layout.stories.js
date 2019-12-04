import {
  AppBody,
  AppLayout,
  Main,
  SideBar,
  TitleBar,
  TitleBarTitle,
  TopBar
} from "@kpn-style/react";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Layout", module);

stories.add("Body and Layout", () => (
  <AppBody>
    <AppLayout>
      <TopBar>KPN</TopBar>
      <SideBar>This is SideBar</SideBar>
      <Main>
        <TitleBar>
          <TitleBarTitle>Layout</TitleBarTitle>
        </TitleBar>
        ...
        <p>hey</p>
        <p>hey</p>
        <p>hey</p>
      </Main>
    </AppLayout>
  </AppBody>
));
