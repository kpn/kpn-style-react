import { Button, ButtonGroup } from "kpn-style-react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const sizeSelect = () => {
  const label = "size";
  const options = {
    none: null,
    small: "small",
    large: "large"
  };
  const defaultValue = null;

  return select(label, options, defaultValue);
};

const typeSelect = () => {
  const label = "type";
  const options = {
    none: null,
    secondary: "secondary",
    link: "link"
  };
  const defaultValue = null;

  return select(label, options, defaultValue);
};

const widthSelect = () => {
  const label = "width";
  const options = {
    none: null,
    1: 1,
    2: 2,
    3: 3,
    4: 4
  };
  const defaultValue = null;

  return select(label, options, defaultValue);
};

const stories = storiesOf("Components.Buttons", module)
  .addDecorator(withKnobs);

stories.add("Button", () => {
  const disabled = boolean("disabled", false);
  const fluid = boolean("fluid", false);
  const spinner = boolean("spinner", false);

  const size = sizeSelect();
  const type = typeSelect();
  const width = widthSelect();
  return (
    <Button
      disabled={disabled}
      fluid={fluid}
      size={size}
      spinner={spinner}
      type={type}
      width={width}
    >
      Hello
    </Button>
  );
});

stories.add("Button group", () => {
  const alignRight = boolean("alignRight", false);
  const respond = boolean("respond", false);
  const reverse = boolean("reverse", false);

  return (
    <ButtonGroup alignRight={alignRight} respond={respond} reverse={reverse}>
      <Button>Hello</Button>
      <Button>Bye</Button>
    </ButtonGroup>
  );
});
