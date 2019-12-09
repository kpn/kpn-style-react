import { Block, BlockBody, BlockLink, BlockTitle } from "@kpn-style/react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components", module).addDecorator(withKnobs);


stories.add("Block", () => {
  const stretch = boolean("stretch", false);
  const color = select(
    "color",
    {
      null: null,
      [Block.colors.GREEN]: Block.colors.GREEN,
      [Block.colors.BLUE]: Block.colors.BLUE
    },
    null
  );

  return (
    <div className="row">
      <div className="col col--4">
        <Block color={color} stretch={stretch}>
          <BlockBody>
            <BlockTitle>Lorem ipsum dolor</BlockTitle>
            <p className="p">
              Nemo enim ipsam voluptatem quia, voluptas sit aspernatur aut.
            </p>
            <BlockLink>Lorem ipsum</BlockLink>
          </BlockBody>
        </Block>
      </div>
    </div>
  );
});
