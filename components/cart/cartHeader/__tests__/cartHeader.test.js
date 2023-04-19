import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

import CartHeader from "./../CartHeader";
import { toggleAllSelected } from "./../../../../store/cartSlice";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();
useDispatch.mockReturnValue(mockDispatch);

describe("CartHeader", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders CartHeader component", () => {
    useSelector.mockReturnValue({
      cart: {
        cartItems: [],
      },
    });

    const { container } = render(<CartHeader />);
    expect(container).toMatchSnapshot();
  });

  it("selects all items when the checkbox is clicked", () => {
    useSelector.mockReturnValue({
      cart: {
        cartItems: [
          {
            _id: "642dca1f0368f06577d20ada",
            name: "Calla Lilies",
            selected: false,
          },
          {
            _id: "64485566f06577d20ada",
            name: "Drago",
            selected: false,
          },
        ],
      },
    });

    render(<CartHeader />);
    fireEvent.click(screen.getByTestId("checkbox"));

    expect(mockDispatch).toHaveBeenCalledWith(toggleAllSelected(true));
  });

  it("unselects all items when the checkbox is clicked again", () => {
    useSelector.mockReturnValue({
      cart: {
        cartItems: [
          {
            _id: "642dca1f0368f06577d20ada",
            name: "Calla Lilies",
            selected: true,
          },
        ],
      },
    });

    render(<CartHeader />);
    fireEvent.click(screen.getByTestId("checkbox"));

    expect(mockDispatch).toHaveBeenCalledWith(toggleAllSelected(false));
  });
});
