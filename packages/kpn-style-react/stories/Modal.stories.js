import {
  Backdrop,
  Button,
  Modal,
  ModalBody,
  ModalClose
} from "@kpn-style/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";
import { updateKnob } from "./utils";

const stories = storiesOf("Components.Modal", module).addDecorator(withKnobs);

stories.add("Basic", () => {
  const active = boolean("active", true);
  return (
    <div>
      <Modal active={active}>
        <ModalClose />
        <ModalBody>
          <h2 className="h2">Nemo enim ipsam voluptatem</h2>
          <p className="p">
            Esse cillum dolore eu fugiat. Nulla pariatur excepteur sint occaecat
            cupidatat non proident. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt. Duis aute irure
            dolor in
          </p>
        </ModalBody>
      </Modal>
      <Backdrop active={active} />
    </div>
  );
});

stories.add("Behavior example", () => {
  const active = boolean("active", false);
  const onClick = () => updateKnob("active", !active);
  const keyPress = evt => {
    if (evt.key === "Escape") {
      updateKnob("active", false);
    }
  };
  document.addEventListener("keydown", evt => keyPress(evt));
  return (
    <div>
      <Button onClick={onClick}>Click me</Button>
      <Modal active={active}>
        <ModalClose onClick={onClick} />
        <ModalBody>
          <h2 className="h2">Nemo enim ipsam voluptatem</h2>
          <p className="p">
            Esse cillum dolore eu fugiat. Nulla pariatur excepteur sint occaecat
            cupidatat non proident. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt. Duis aute irure
            dolor in
          </p>
        </ModalBody>
      </Modal>
      <Backdrop active={active} onClick={onClick} />
    </div>
  );
});
