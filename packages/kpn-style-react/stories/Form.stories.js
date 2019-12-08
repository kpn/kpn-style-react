import {
  Col,
  FormFeedback,
  FormGroup,
  FormGroupActionButton,
  FormGroupInput,
  Input,
  Label,
  LabelFor,
  Row
} from "@kpn-style/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components", module).addDecorator(withKnobs);

stories.add("Form", () => {
  const error = boolean("error", true);
  return (
    <Row>
      <Col xs={5}>
        <form>
          <h3>Text input with placeholder and label</h3>
          <Label>Name</Label>
          <Input placeholder="Enter your first name" />

          <h3>Select</h3>
          <Label>Country</Label>
          <Input type="select">
            <option value="ar">Argentina</option>
            <option value="nl">Netherlands</option>
          </Input>

          <h3>Text Area</h3>
          <Label>Data</Label>
          <Input type="textarea">Lorem ipsum</Input>

          <h3>Checbox input</h3>
          <LabelFor>
            <Input type="checkbox" />
            Choose 1
          </LabelFor>
          <LabelFor>
            <Input type="checkbox" />
            Choose 2
          </LabelFor>

          <h3>Radio input</h3>
          <LabelFor>
            <Input name="opt" type="radio" />
            Choose 1
          </LabelFor>
          <LabelFor>
            <Input name="opt" type="radio" />
            Choose 2
          </LabelFor>

          <h3>Form Group</h3>
          <FormGroup error={error}>
            <Label for="last-name"> Last name</Label>
            <FormGroupInput>
              <Input placeholder="Enter your last name" name="last-name" />
            </FormGroupInput>
            <FormFeedback>Please enter your last name</FormFeedback>
          </FormGroup>

          <h3>Form Group with checkbox</h3>
          <FormGroup error={error}>
            <Label for="last-name"> Choose something</Label>
            <FormGroupInput>
              <LabelFor>
                <Input name="opt" type="radio" />
                Choose 1
              </LabelFor>
              <LabelFor>
                <Input name="opt" type="radio" />
                Choose 2
              </LabelFor>
            </FormGroupInput>
            <FormFeedback>Please choose something</FormFeedback>
          </FormGroup>

          <h3>Input with icon action button</h3>
          <FormGroup>
            <FormGroupInput>
              <Input placeholder="Search keyword" name="search" />
            </FormGroupInput>
            <FormGroupActionButton>
              <i className="ui-search" />
            </FormGroupActionButton>
          </FormGroup>

          <h3>Input with text action button</h3>
          <FormGroup>
            <FormGroupInput>
              <Input
                type="password"
                placeholder="Enter your password"
                name="password"
              />
            </FormGroupInput>
            <FormGroupActionButton>Show password</FormGroupActionButton>
          </FormGroup>

          <h3>Inline components using Row and Col</h3>
          <Row>
            <Col xs={12} s={3}>
              <Input placeholder="Enter your first name" />
            </Col>
            <Col xs={12} s={3}>
              <Input placeholder="Enter your last name" />
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
});
