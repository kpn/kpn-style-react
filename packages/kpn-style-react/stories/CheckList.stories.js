import { CheckList } from "@kpn-style/react";
import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components.List", module);

stories.add("CheckList Normal", () => {
  return (
    <CheckList>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit sed do</li>
      <li>Eiusmod tempor incididunt ut labore</li>
      <li>Et dolore magna aliqua</li>
      <li>Ut enim ad minim veniam quis</li>
    </CheckList>
  );
});

stories.add("CheckList Inverted", () => {
  return (
    <div class="pitch pitch--green">
      <div class="pitch__body">
        <CheckList inverted>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit sed do</li>
          <li>Eiusmod tempor incididunt ut labore</li>
          <li>Et dolore magna aliqua</li>
          <li>Ut enim ad minim veniam quis</li>
        </CheckList>
      </div>
    </div>
  );
});
