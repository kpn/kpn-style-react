import { TitleBar, TitleBarTitle } from "@kpn-style/react";

import React from "react";

const Home = () => (
  <div>
    <TitleBar>
      <TitleBarTitle>Information</TitleBarTitle>
    </TitleBar>
    <h2 className="h2">How does this work</h2>
    <p>Here you can start adding some components</p>
    <p>We recommend making a grid inside the Main module</p>
    <p>You can use Row and Col</p>
  </div>
);

export default Home;