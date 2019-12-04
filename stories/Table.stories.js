import React from "react";
import { Table } from "@kpn-style/react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Components.Table", module).addDecorator(withKnobs);

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
