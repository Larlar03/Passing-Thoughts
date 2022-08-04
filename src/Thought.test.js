import React from "react";
import Thought from "./Thought";
import App from "./App";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

/* Test App Component */
test("header should say: Passing Thoughts", () => {
  // Render App
  render(<App />);

  // Extract Header element
  const header = screen.getByText("Passing Thoughts");

  // Assert that header includes the right text
  expect(header).toHaveTextContent("Passing Thoughts");
});

/* Test Thought Component */
test("check remove button is enabled", () => {
  // Render Thought component
  render(<Thought thought={{ text: "hello" }} removeThought={() => {}} />);

  const button = screen.getByRole("button");
  //   expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});
