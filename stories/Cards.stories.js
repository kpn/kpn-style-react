import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardList,
  CardTitle
} from "kpn-react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import StoryRouter from "storybook-react-router";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components.Cards", module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter());

stories.add("Basic Card", () => {
  const stretch = boolean("stretch", false);

  return (
    <div className="row">
      <div className="col col--4">
        <Card stretch={stretch}>
          <CardHeader>
            <CardTitle>Lorem ipsum</CardTitle>
          </CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Nemo enim ipsam voluptatem quia, voluptas sit
            aspernatur aut, odit aut fugit.
          </CardBody>
        </Card>
      </div>
    </div>
  );
});

stories.add("Card with Footer", () => {
  const stretch = boolean("stretch", false);

  return (
    <div className="row">
      <div className="col col--4">
        <Card stretch={stretch}>
          <CardHeader>
            <CardTitle>Lorem ipsum</CardTitle>
          </CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Nemo enim ipsam voluptatem quia, voluptas sit
            aspernatur aut, odit aut fugit.
          </CardBody>
          <CardBody>Look bodies can be reused!</CardBody>
          <CardFooter>
            <CardList>
              <li>
                <a className="a">Sed ut perspiciatis</a>
              </li>
              <li>
                <a className="a">Sed do eiusmod tempor</a>
              </li>
              <li>
                <a className="a">Odit aut fugit</a>
              </li>
            </CardList>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
});
