import {
  Pagination,
  PaginationLink,
  PaginationPager,
  PaginationSelect,
  PaginationSelectField
} from "kpn-style-react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";
import { updateKnob } from "./utils";

const stories = storiesOf("Components.Pagination", module).addDecorator(
  withKnobs
);

stories.add("Simple", () => {
  const active = boolean("active", true);

  return (
    <Pagination>
      <PaginationPager>
        <li>
          <PaginationLink direction="Prev"></PaginationLink>
        </li>
        <li>
          <PaginationLink active={active}>1</PaginationLink>
        </li>
        <li>
          <PaginationLink>2</PaginationLink>
        </li>
        <li>
          <PaginationLink>3</PaginationLink>
        </li>
        <li>
          <PaginationLink>4</PaginationLink>
        </li>
        <li>
          <PaginationLink direction="Next"></PaginationLink>
        </li>
      </PaginationPager>
      <PaginationSelectField>
        Rows per page:
        <PaginationSelect>
          <option>5</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </PaginationSelect>
      </PaginationSelectField>
    </Pagination>
  );
});

stories.add("With Behavior Logic", () => {
  const activePage = text("active", "1");

  const onClick = evt => {
    updateKnob("active", evt.target.text);
  };
  return (
    <Pagination>
      <PaginationPager>
        <li>
          <PaginationLink
            direction="Prev"
            onClick={() => {
              if (activePage === "1") {
                return;
              }
              updateKnob("active", (Number(activePage) - 1).toString());
            }}
          ></PaginationLink>
        </li>
        <li>
          <PaginationLink active={activePage === "1"} onClick={onClick}>
            1
          </PaginationLink>
        </li>
        <li>
          <PaginationLink active={activePage === "2"} onClick={onClick}>
            2
          </PaginationLink>
        </li>
        <li>
          <PaginationLink active={activePage === "3"} onClick={onClick}>
            3
          </PaginationLink>
        </li>
        <li>
          <PaginationLink active={activePage === "4"} onClick={onClick}>
            4
          </PaginationLink>
        </li>
        <li>
          <PaginationLink
            direction="Next"
            onClick={() => {
              if (activePage === "4") {
                return;
              }
              updateKnob("active", (Number(activePage) + 1).toString());
            }}
          ></PaginationLink>
        </li>
      </PaginationPager>
      <PaginationSelectField>
        Rows per page:
        <PaginationSelect>
          <option>5</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </PaginationSelect>
      </PaginationSelectField>
    </Pagination>
  );
});
