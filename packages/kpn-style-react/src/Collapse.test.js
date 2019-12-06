import Collapse from "./Collapse";
import React from "react";
import { render } from "@testing-library/react";

describe("Collapse behavior", () => {
  it("Collapse sends collapsed prop", () => {
    const InnerComponent = jest.fn();
    InnerComponent.mockReturnValue(<div>holis</div>);

    render(
      <Collapse>
        <InnerComponent />
      </Collapse>
    );
    expect(InnerComponent.mock.calls[0][0].collapsed).toBe(true);
  });

  it("Collapse sends 'expanded' from props", () => {
    const InnerComponent = jest.fn();
    InnerComponent.mockReturnValue(<div>holis</div>);

    const { rerender } = render(
      <Collapse>
        <InnerComponent />
      </Collapse>
    );
    expect(InnerComponent.mock.calls[0][0].expanded).toBe(false);

    rerender(
      <Collapse expanded={true}>
        <InnerComponent />
      </Collapse>
    );
    expect(InnerComponent.mock.calls[2][0].expanded).toBe(true);
  });
});
