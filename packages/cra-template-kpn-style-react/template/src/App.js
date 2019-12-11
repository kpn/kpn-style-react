import {
  AppBody,
  AppLayout,
  Main,
  SideBar,
  SideBarActionMenu,
  SideBarClose,
  SideBarMenu,
  TopBar,
  TopBarItem,
  TopBarLogo,
  TopBarMenu,
  TopBarTitle
} from "@kpn-style/react";
import React, { useState } from "react";

import Home from "pages/Home";
import Information from "pages/Information";
import { Router } from "@reach/router";
import SideBarLinkActive from "components/router/SideBarLinkActive";
import TopBarLinkActive from "components/router/TopBarLinkActive";

function App() {
  const [sideBarActive, setSideBarActive] = useState(false);

  return (
    <AppBody>
      <AppLayout activeSideBar={sideBarActive}>
        <TopBar>
          <TopBarLogo>KPN</TopBarLogo>
          <TopBarTitle>My App</TopBarTitle>
          <TopBarMenu>
            <TopBarItem>
              <TopBarLinkActive to="/">Home</TopBarLinkActive>
            </TopBarItem>
            <TopBarItem>
              <TopBarLinkActive to="information">Information</TopBarLinkActive>
            </TopBarItem>

            <TopBarItem
              trigger
              onClick={() => {
                setSideBarActive(true);
              }}
            />
          </TopBarMenu>
        </TopBar>
        <SideBar>
          <SideBarActionMenu>
            <SideBarClose
              onClick={() => {
                setSideBarActive(false);
              }}
            />
          </SideBarActionMenu>
          <SideBarMenu>
            <li>
              <SideBarLinkActive to="/">Home</SideBarLinkActive>
            </li>
            <li>
              <SideBarLinkActive to="information">
                Information
              </SideBarLinkActive>
            </li>
          </SideBarMenu>
        </SideBar>
        <Main>
          <Router>
            <Home path="/" />
            <Information path="information" />
          </Router>
        </Main>
      </AppLayout>
    </AppBody>
  );
}

export default App;
