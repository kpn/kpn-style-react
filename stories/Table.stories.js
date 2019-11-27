import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import StoryRouter from "storybook-react-router";
import { Table } from "kpn-react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components.Table", module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter());

stories.add("Simple Table", () => {
  // const active = boolean("active", true);

  return (
    <div className="row">
      <div className="col col--6">
        <Table>
          <thead>
            <tr>
              <th>Lorem</th>
              <th>Ipsum</th>
              <th>Dolor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum dolor</td>
              <td>Sit amet consectetur</td>
              <td>Adipiscing elit sed</td>
            </tr>
            <tr>
              <td>Do eiusmod tempor</td>
              <td>Incididunt ut labore</td>
              <td>Et dolore magna</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
});
