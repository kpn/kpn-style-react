import { Jumbotron, JumbotronBody, JumbotronTitle } from "@kpn-style/react";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components", module);

stories.add("Jumbotron", () => (
  <Jumbotron>
    <JumbotronBody>
      <JumbotronTitle>Title 1</JumbotronTitle>
    </JumbotronBody>
    <JumbotronBody>
      <JumbotronTitle>Title 2</JumbotronTitle>
      <p className="p">
        Some random text
      </p>
    </JumbotronBody>

  </Jumbotron>
));
