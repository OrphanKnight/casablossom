import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryFilter from "../CategoryFilter";

const mockCategories = [
  { _id: "1", name: "Category 1" },
  { _id: "2", name: "Category 2" },
];

const mockSubCategories = [
  { _id: "3", name: "SubCategory 1", parentId: "1" },
  { _id: "4", name: "SubCategory 2", parentId: "2" },
];

const mockFilter = jest.fn();
const mockReplaceQuery = jest.fn((key, value) => ({ active: value === "1" }));

const categoryHandler = (category) => {
  mockFilter({ category });
};

describe("CategoryFilter component", () => {
  test("renders the component with categories", () => {
    render(
      <CategoryFilter
        categories={mockCategories}
        subCategories={mockSubCategories}
        categoryHandler={categoryHandler}
        replaceQuery={mockReplaceQuery}
      />
    );

    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
  });

  test("triggers categoryHandler when a category is clicked", () => {
    render(
      <CategoryFilter
        categories={mockCategories}
        subCategories={mockSubCategories}
        categoryHandler={categoryHandler}
        replaceQuery={mockReplaceQuery}
      />
    );

    fireEvent.click(screen.getByText("Category 1"));
    expect(mockFilter).toHaveBeenCalledWith({ category: "1" });
  });
});
