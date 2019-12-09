import {
  Backdrop,
  Button,
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@kpn-style/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";
import { updateKnob } from "./utils";

const stories = storiesOf("Components.Dialog", module).addDecorator(withKnobs);

stories.add("Basic", () => {
  const active = boolean("active", true);
  return (
    <div>
      <Dialog active={active}>
        <DialogHeader>
          <DialogTitle>Consectetur adipiscing elit</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <h2 className="h2">Nemo enim ipsam voluptatem</h2>
          <p className="p">
            Esse cillum dolore eu fugiat. Nulla pariatur excepteur sint occaecat
            cupidatat non proident. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt. Duis aute irure
            dolor in
          </p>
        </DialogBody>
        <DialogFooter>
          <ButtonGroup reverse respond>
            <Button width="4">Confirm</Button>
            <Button type="secondary" width="4">
              Cancel
            </Button>
          </ButtonGroup>
        </DialogFooter>
      </Dialog>
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
      <Dialog active={active}>
        <DialogHeader>
          <DialogTitle>Consectetur adipiscing elit</DialogTitle>

          <DialogClose onClick={onClick} />
        </DialogHeader>
        <DialogBody>
          <h2 className="h2">Nemo enim ipsam voluptatem</h2>
          <p className="p">
            Esse cillum dolore eu fugiat. Nulla pariatur excepteur sint occaecat
            cupidatat non proident. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt. Duis aute irure
            dolor in
          </p>
        </DialogBody>
        <DialogFooter>
          <ButtonGroup reverse respond>
            <Button onClick={onClick} width="4">
              Confirm
            </Button>
            <Button onClick={onClick} type="secondary" width="4">
              Cancel
            </Button>
          </ButtonGroup>
        </DialogFooter>
      </Dialog>
      <Backdrop active={active} onClick={onClick} />
    </div>
  );
});
