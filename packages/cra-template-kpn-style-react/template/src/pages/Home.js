import { TitleBar, TitleBarTitle } from "@kpn-style/react";

import React from "react";

const Home = () => (
  <div>
    <TitleBar>
      <TitleBarTitle>Home</TitleBarTitle>
    </TitleBar>
    <h1 className="h1">Welcome</h1>
    <p>Welcome to this page</p>
  </div>
);

export default Home;