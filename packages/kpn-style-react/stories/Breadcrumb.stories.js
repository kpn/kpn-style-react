import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@kpn-style/react";

import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Components", module);

stories.add("Breadcrumb", () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink>Link 1</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink>Link 2</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink>Current Link</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
));
