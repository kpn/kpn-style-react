import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components.List", module);

stories.add("Normal lists", () => {
  return (
    <div>
      <p>This list elements won't have React Components for now</p>
      <p>If you think they should please open a ticket</p>
      <h3>Unordered List</h3>
      <ul class="ul">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit sed do</li>
        <li>Eiusmod tempor incididunt ut labore</li>
        <li>Et dolore magna aliqua</li>
        <li>Ut enim ad minim veniam quis</li>
      </ul>
      <h3>Ordered List</h3>
      <ol class="ol">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit sed do</li>
        <li>Eiusmod tempor incididunt ut labore</li>
        <li>Et dolore magna aliqua</li>
        <li>Ut enim ad minim veniam quis</li>
      </ol>
      <h3>Description list</h3>
      <dl class="dl">
        <dt>Name</dt>
        <dd>John</dd>
        <dt>Last name</dt>
        <dd>Doe</dd>
        <dt>Gender</dt>
        <dd>Male</dd>
        <dt>Date of birth</dt>
        <dd>03-05-1941</dd>
      </dl>
    </div>
  );
});
