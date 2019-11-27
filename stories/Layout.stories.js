import {
  AppBody,
  AppLayout,
  Main,
  SideBar,
  TitleBar,
  TitleBarTitle,
  TopBar
} from "kpn-react";

import React from "react";
import StoryRouter from "storybook-react-router";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Layout", module).addDecorator(StoryRouter());

stories.add("Body and Layout", () => (
  <AppBody>
    <AppLayout>
      <TopBar>KPN</TopBar>
      <SideBar>SideBar babe</SideBar>
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
