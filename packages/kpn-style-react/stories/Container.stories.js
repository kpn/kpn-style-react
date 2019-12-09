import { boolean, withKnobs } from "@storybook/addon-knobs";

import { Container } from "@kpn-style/react";
import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Layout", module).addDecorator(withKnobs);

stories.add("Container", () => {
  const centered = boolean("centered", false);
  const tall = boolean("tall", false);
  const main = boolean("main", false);
  const limited = boolean("limited", false);
  return (
    <Container
      centered={centered}
      tall={tall}
      main={main}
      limited={limited}
      style={{
        backgroundColor: "#09f",
        ...(centered && { maxWidth: "160px" })
      }}
    >
      Lorem ipsum dolor sit amet
    </Container>
  );
});
