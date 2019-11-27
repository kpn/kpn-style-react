import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome", module).add("to kpn-style-react", () => (
  <div>
    <h1>
      Welcome to{" "}
      <a href="https://github.com/kpn/kpn-style-react">kpn-react-style</a>
    </h1>
    <h3>Installation</h3>
    <p>
      <pre>
        <code>yarn add kpn-style kpn-style-react</code>
      </pre>
    </p>
    <h3>Information</h3>
    <p>
      For more information about setting up, contributin to this repo check the{" "}
      <a href="https://github.com/kpn/kpn-style-react">README</a> in github
    </p>
  </div>
));
