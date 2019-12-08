import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

test("renders 'Welcome to this page'", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to this page/i);
  expect(linkElement).toBeInTheDocument();
});
