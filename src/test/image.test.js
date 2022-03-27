import React from "react";
import {
  screen,
  cleanup,
  render
} from "@testing-library/react";
import ImageList from "../component/list/ImageList/ImageList";

afterEach(() => {
  cleanup();
});

test("it should show image from API", () => {
  render(<ImageList />);
  const imageId = screen.getByTestId("test_id");
  expect(imageId).toBeInTheDocument();
});


