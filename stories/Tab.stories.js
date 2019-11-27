import { Tab, TabItem, TabLink, TabMenu } from "kpn-style-react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components", module).addDecorator(withKnobs);

stories.add("Tab", () => {
  const active = boolean("active", true);

  return (
    <div className="row">
      <div className="col col--4">
        <Tab>
          <TabMenu>
            <TabItem>
              <TabLink active={active}>Home</TabLink>
            </TabItem>
            <TabItem>
              <TabLink>Services</TabLink>
            </TabItem>
          </TabMenu>
        </Tab>
      </div>
    </div>
  );
});
