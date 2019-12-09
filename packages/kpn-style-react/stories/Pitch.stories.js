import { Col, Pitch, PitchBody, PitchTitle, Row } from "@kpn-style/react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components", module).addDecorator(withKnobs);

stories.add("Pitch", () => {
  const limited = boolean("limited", false);
  const last = boolean("last", false);
  const color = select(
    "color",
    {
      null: null,
      [Pitch.colors.GREEN]: Pitch.colors.GREEN,
      [Pitch.colors.BLUE]: Pitch.colors.BLUE,
      [Pitch.colors.WHITE]: Pitch.colors.WHITE
    },
    null
  );

  return (
    <Row>
      <Col xs={6}>
        <Pitch color={color} limited={limited} last={last}>
          <PitchBody>
            <PitchTitle>Lorem ipsum dolor</PitchTitle>
            <p className="p">
              Nemo enim ipsam voluptatem quia, voluptas sit aspernatur aut.
            </p>
          </PitchBody>
        </Pitch>
      </Col>
    </Row>
  );
});
