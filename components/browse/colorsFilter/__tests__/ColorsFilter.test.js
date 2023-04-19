import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ColorsFilter from "../ColorsFilter";

const mockColors = ["#FF0000", "#00FF00", "#0000FF"];
const mockFilter = jest.fn();
const mockReplaceQuery = jest.fn((key, value) => ({
  active: value === "#FF0000",
  result: "#00FF00",
}));

const mockRouterQuery = {
  color: "#FF0000",
};

const replaceQuery = (queryName, value) => {
  const existedQuery = mockRouterQuery[queryName];
  const valueCheck = existedQuery?.search(value);
  const _check = existedQuery?.search(`_${value}`);
  let result = "";
  if (existedQuery) {
    if (existedQuery == value) {
      result = {};
    } else {
      if (valueCheck !== -1) {
        if (_check !== -1) {
          result = existedQuery?.replace(`_${value}`, "");
        } else if (valueCheck == 0) {
          result = existedQuery?.replace(`${value}_`, "");
        } else {
          result = existedQuery?.replace(value, "");
        }
      } else {
        result = `${existedQuery}_${value}`;
      }
    }
  } else {
    result = value;
  }
  return {
    result,
    active: existedQuery && valueCheck !== -1 ? true : false,
  };
};

const colorHandler = (color) => {
  mockFilter({ color });
};

describe("ColorsFilter component", () => {
  test("renders the component with colors", () => {
    render(
      <ColorsFilter
        colors={mockColors}
        colorHandler={colorHandler}
        replaceQuery={mockReplaceQuery}
      />
    );

    expect(screen.getByText("Colors")).toBeInTheDocument();
    mockColors.forEach((color) => {
      expect(screen.getByTestId(`color-btn-${color}`)).toBeInTheDocument();
    });
  });

  test("toggle show state when Colors header is clicked", () => {
    render(
      <ColorsFilter
        colors={mockColors}
        colorHandler={colorHandler}
        replaceQuery={replaceQuery}
      />
    );

    fireEvent.click(screen.getByTestId("colors-header"));
    expect(screen.getByTestId("colors-header")).toBeVisible();
  });

  test("triggers colorHandler when a color button is clicked", () => {
    render(
      <ColorsFilter
        colors={mockColors}
        colorHandler={colorHandler}
        replaceQuery={mockReplaceQuery}
      />
    );

    fireEvent.click(screen.getByTestId("color-btn-#FF0000"));
    expect(mockFilter).toHaveBeenCalledWith({ color: "#00FF00" });
  });
});
