import { Col, Container, Row } from "@kpn-style/react";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Layout", module);

stories.add("Grid", () => (
  <Container>
    <Row>
      <Col s={4}>
        <span>From small screen 4/12</span>
      </Col>
      <Col m={4}>
        <span>From small screen 4/12</span>
      </Col>
      <Col l={4}>
        <span>From small screen 4/12</span>
      </Col>
    </Row>

    <h3 className="h3">Responsive columns </h3>
    <Row>
      <Col xs={12} s={4} l={8}>
        <span>XS: 12, S: 4, L: 8</span>
      </Col>
    </Row>
    <h3 className="h3">Auto columns </h3>
    <Row>
      <Col xs>
        <span>Auto</span>
      </Col>
      <Col s>
        <span>Auto</span>
      </Col>
      <Col m>
        <span>Auto</span>
      </Col>
    </Row>
    <h3 className="h3">Spread columns in row </h3>
    <Row spread>
      <Col xs={5}><span>5/12</span></Col>
      <Col xs={5}><span>5/12</span></Col>
    </Row>

  </Container>
));
