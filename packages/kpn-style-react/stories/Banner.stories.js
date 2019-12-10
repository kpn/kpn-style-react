import {
  Banner,
  BannerBody,
  BannerSubTitle,
  BannerTitle
} from "@kpn-style/react";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components", module);

stories.add("Banner", () => (
  <Banner
    style={{
      backgroundImage: "url(https://style.kpn.com/dummy/banner-1920x350.jpg)"
    }}
  >
    <BannerBody>
      <BannerTitle>Lorem Ipsum</BannerTitle>
      <BannerSubTitle>Dolor sit amet</BannerSubTitle>
    </BannerBody>
  </Banner>
));
