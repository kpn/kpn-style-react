import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTitle
} from "@kpn-style/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components", module).addDecorator(withKnobs);
const onClick = (name, value) => {
  window.__STORYBOOK_ADDONS.channel.emit("storybookjs/knobs/change", {
    name: name,
    value: !value
  });
};

stories.add("Accordion", () => {
  const expanded = boolean("expanded", true);
  const expandedSecond = boolean("expandedSecond", false);
  return (
    <div className="row">
      <div className="col col--4">
        <Accordion>
          <AccordionItem
            expanded={expanded}
            onClick={() => {
              onClick("expanded", expanded);
            }}
          >
            <AccordionTitle>Lorem ipsum dolor sit amet</AccordionTitle>
            <AccordionContent>
              Ut enim ad minim veniam quis nostrud exercitation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            expanded={expandedSecond}
            onClick={() => {
              onClick("expandedSecond", expandedSecond);
            }}
          >
            <AccordionTitle>Consectetur adipiscing elit</AccordionTitle>
            <AccordionContent>
              Duis aute irure dolor in reprehenderit in voluptate
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
});
