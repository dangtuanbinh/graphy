import React from "react";
import {screen,render} from "@testing-library/react"
import ImageList from "../component/list/ImageList/ImageList"

test("it should display image from API", () => {
    render(<ImageList />)
    const imageId = screen.getAllByTestId("test_id")
    expect(imageId).toBeInTheDocument()
})