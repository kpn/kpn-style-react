import ActionMenu from "./ActionMenu";
import ActionMenuList from "./ActionMenuList";
import ActionMenuTrigger from "./ActionMenuTrigger";
import React from "react";
import { render } from "@testing-library/react";

describe("ActionMenu behavior", () => {
  it("ActionMenu active flag false", () => {
    const { container } = render(
      <ActionMenu>
        <ActionMenuTrigger />
        <ActionMenuList></ActionMenuList>
      </ActionMenu>
    );
    expect(container.firstChild.classList.contains("action-menu--active")).toBe(
      false
    );
  });

  it("ActionMenu active flag true", () => {
    const { container } = render(
      <ActionMenu active={true}>
        <ActionMenuTrigger />
        <ActionMenuList></ActionMenuList>
      </ActionMenu>
    );
    expect(container.firstChild.classList.contains("action-menu--active")).toBe(
      true
    );
  });
});
