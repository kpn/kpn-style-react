import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  ProgressBar,
  Row
} from "@kpn-style/react";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";
import { updateKnob } from "./utils";

const stories = storiesOf("Components.ProgressBar", module).addDecorator(
  withKnobs
);

stories.add("Simple", () => {
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1
  };
  const value = number("value", 0, options);
  const _text = text("text", "Please wait");
  return <ProgressBar value={value} text={_text} />;
});

stories.add("Animated", () => {
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1
  };
  const _text = text("text");
  const value = number("value", 0, options);
  const delayInMilliseconds = 100; //1 second
  setTimeout(function() {
    if (value <= 95) {
      updateKnob("value", value + 5);
    } else {
      updateKnob("value", 0);
    }
  }, delayInMilliseconds);
  return <ProgressBar value={value} text={_text} />;
});

stories.add("Blocking content", () => {
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1
  };
  const value = number("value", 0, options);
  const _text = text("text", "Please wait");
  const blocking = boolean("blocking", true);
  const hidden = boolean("hidden", false);
  return (
    <Row>
      <Col xs={4}>
        <ProgressBar
          value={value}
          text={_text}
          blocking={blocking}
          hidden={hidden}
        >
          <Card>
            <CardBody>Hello</CardBody>
          </Card>
        </ProgressBar>
      </Col>
    </Row>
  );
});

stories.add("Animated Blocking content", () => {
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1
  };
  const value = number("value", 0, options);
  const _text = text("text", "Please wait");
  const blocking = boolean("blocking", true);
  const delayInMilliseconds = 100; //1 second
  const timer = () => {
    const ti = setTimeout(function() {
      updateKnob("value", value + 10);
      if (value > 89) {
        updateKnob("blocking", false);
        stop()
      }

    }, delayInMilliseconds);

    function stop() {
      clearTimeout(ti)

    }
  };
  if (value < 100) {
    timer();
  }
  return (
    <Row>
      <Col xs={4}>
        <ProgressBar
          value={value}
          text={_text}
          blocking={blocking}
          hidden={!blocking}
        >
          <Card>
            <CardHeader>
              <CardTitle>Welcome</CardTitle>
            </CardHeader>
            <CardBody>Hello to this fantastic place</CardBody>
          </Card>
          <small>Terms and conditions may apply</small>
        </ProgressBar>
      </Col>
    </Row>
  );
});
