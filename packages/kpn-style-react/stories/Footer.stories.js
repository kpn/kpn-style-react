import {
  Footer,
  FooterBody,
  FooterInlineList,
  FooterLink,
  FooterList,
  FooterLogo
} from "@kpn-style/react";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components.Footer", module);
stories.add("Basic", () => (
  <div style={{ display: "flex", minHeight: "100vh" }}>
    <Footer style={{ alignSelf: "flex-end", minWidth: "100%" }}>
      <FooterBody>
        <FooterList>
          <dt>
            <FooterLink>Lorem ipsum</FooterLink>
          </dt>
          <dt>
            <FooterLink>Dolor sit amet</FooterLink>
          </dt>
          <dt>
            <FooterLink>Consectetur</FooterLink>
          </dt>
        </FooterList>
      </FooterBody>
    </Footer>
  </div>
));

stories.add("Footer with inline links", () => (
  <div style={{ display: "flex", minHeight: "100vh" }}>
    <Footer style={{ alignSelf: "flex-end", minWidth: "100%" }}>
      <FooterBody>
        <FooterList>
          <dt>
            <FooterLink>Lorem ipsum</FooterLink>
          </dt>
          <dt>
            <FooterLink>Dolor sit amet</FooterLink>
          </dt>
          <dt>
            <FooterLink>Consectetur</FooterLink>
          </dt>
        </FooterList>
      </FooterBody>
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
          <img src="https://style.kpn.com/dummy/logo-kpn-white.png" alt="kpn" />
        </FooterLogo>
      </FooterBody>
    </Footer>
  </div>
));
