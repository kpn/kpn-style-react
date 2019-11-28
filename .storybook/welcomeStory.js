import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome", module).add("to kpn-style-react", () => (
  <div>
    <h1>
      Welcome to{" "}
      <a href="https://github.com/kpn/kpn-style-react">kpn-react-style</a>
    </h1>
    <a href="https://github.com/kpn/kpn-style-react/actions">
      <img
        src="https://github.com/kpn/kpn-style-react/workflows/Test%20React%20App/badge.svg?style=flat-square"
        alt="Github Actions"
      />
    </a>{" "}
    <a href="https://www.npmjs.org/package/kpn-style-react">
      <img
        src="https://img.shields.io/npm/v/kpn-style-react?style=flat-square"
        alt="npm package"
      />
    </a>{" "}
    <a href="https://conventionalcommits.org">
      <img
        src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square"
        alt="Conventional Commits"
      />
    </a>{" "}
    <img
      alt="GitHub"
      src="https://img.shields.io/github/license/kpn/kpn-style-react?style=flat-square"
    />
    <h2>Installation</h2>
    <p>
      <pre>
        <code>yarn add kpn-style kpn-style-react</code>
      </pre>
    </p>
    <h2>Configuration</h2>
    <p>
      You'll need to import the css or the scss from kpn-style. In your main
      scss file kpn-styles :
      <pre>
        <code>
          @import "~@kpn-style/bundle/bundle"; @include font-face(
          "kpn-ui-icons", normal, 400, "~@kpn-style/bundle/base/ui-icon",
          "kpn-ui-icons" );
        </code>{" "}
      </pre>
    </p>
    <h2>Information</h2>
    <p>
      For more information about setting up, contributin to this repo check the{" "}
      <a href="https://github.com/kpn/kpn-style-react">README</a> in github
    </p>
    <h2>Contributing</h2>
    <p>
      Check the{" "}
      <a href="https://github.com/kpn/kpn-style-react">Github repository</a>
    </p>
  </div>
));
