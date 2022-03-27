import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";

afterAll(() => jest.clearAllMocks());

const AllTheProviders = ({ children }) => {
  return <Provider>{children}</Provider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export * from "@testing-library/jest-dom";

export { customRender as render };
