import {
  Col,
  Notification,
  NotificationBody,
  NotificationClose,
  NotificationHeader,
  Row
} from "@kpn-style/react";
import { select, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components.Notifications", module).addDecorator(
  withKnobs
);

stories.add("Notification", () => {
  const type = select(
    "type",
    {
      [Notification.types.INFO]: Notification.types.INFO,
      [Notification.types.CAUTION]: Notification.types.CAUTION,
      [Notification.types.SUCCESS]: Notification.types.SUCCESS,
      [Notification.types.ERROR]: Notification.types.ERROR
    },
    Notification.types.INFO
  );

  return (
    <Row>
      <Col xs="8">
        <Notification type={type}>
          <NotificationHeader>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit sed do
            eiusmod tempor incididunt
          </NotificationHeader>
        </Notification>
      </Col>
    </Row>
  );
});
stories.add("Notification with body and close", () => {
  const type = select(
    "type",
    {
      [Notification.types.INFO]: Notification.types.INFO,
      [Notification.types.CAUTION]: Notification.types.CAUTION,
      [Notification.types.SUCCESS]: Notification.types.SUCCESS,
      [Notification.types.ERROR]: Notification.types.ERROR
    },
    Notification.types.INFO
  );

  return (
    <Row>
      <Col xs="8">
        <Notification type={type}>
          <NotificationHeader>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit sed do
            eiusmod tempor incididunt.
          </NotificationHeader>
          <NotificationBody>
            <p className="p">
              Nemo enim ipsam voluptatem quia, voluptas sit aspernatur aut.
            </p>
          </NotificationBody>
          <NotificationClose></NotificationClose>
        </Notification>
      </Col>
    </Row>
  );
});
