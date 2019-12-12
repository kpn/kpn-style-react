import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Spinner
} from "@kpn-style/react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components.Spinner", module).addDecorator(withKnobs);

stories.add("Simple", () => {
  const color = select(
    "color",
    {
      null: null,
      [Spinner.colors.WHITE]: Spinner.colors.WHITE
    },
    null
  );
  const _text = text("text", "Please wait");
  return <Spinner text={_text} color={color} />;
});

stories.add("Blocking content", () => {
  const _text = text("text", "Please wait");
  const blocking = boolean("blocking", true);
  const hidden = boolean("hidden", false);
  const color = select(
    "color",
    {
      null: null,
      [Spinner.colors.WHITE]: Spinner.colors.WHITE
    },
    null
  );
  return (
    <Row>
      <Col xs={4}>
        <Spinner text={_text} blocking={blocking} hidden={hidden} color={color}>
          <Card>
            <CardHeader>
              <CardTitle>Welcome</CardTitle>
            </CardHeader>
            <CardBody>Hello to this fantastic place</CardBody>
          </Card>
          <small>Terms and conditions may apply</small>
        </Spinner>
      </Col>
    </Row>
  );
});
