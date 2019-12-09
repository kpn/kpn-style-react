import {
  Col,
  Content,
  ContentBody,
  ContentFooter,
  ContentHeader,
  ContentList,
  ContentTitle,
  Row
} from "@kpn-style/react";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components.Content", module);

stories.add("Basic Content", () => (
  <Row>
    <Col xs={4}>
      <Content>
        <ContentHeader>
          <ContentTitle>Lorem ipsum</ContentTitle>
        </ContentHeader>
        <ContentBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Nemo enim ipsam voluptatem quia, voluptas sit
          aspernatur aut, odit aut fugit.
        </ContentBody>
      </Content>
    </Col>
  </Row>
));

stories.add("Content with Footer", () => (
  <Row>
    <Col xs={4}>
      <Content>
        <ContentHeader>
          <ContentTitle>Lorem ipsum</ContentTitle>
        </ContentHeader>
        <ContentBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Nemo enim ipsam voluptatem quia, voluptas sit
          aspernatur aut, odit aut fugit.
        </ContentBody>
        <ContentBody>Look bodies can be reused!</ContentBody>
        <ContentFooter>
          <ContentList>
            <li>
              <a href="#a">Sed ut perspiciatis</a>
            </li>
            <li>
              <a href="#a">Sed do eiusmod tempor</a>
            </li>
            <li>
              <a href="#a">Odit aut fugit</a>
            </li>
          </ContentList>
        </ContentFooter>
      </Content>
    </Col>
  </Row>
));
