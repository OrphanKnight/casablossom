import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeadingFilters from "../HeadingFilters";
import { useRouter } from "next/router";

// Mock Next.js useRouter to simulate router query values
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("HeadingFilters component", () => {
  const replaceQuery = jest.fn();
  const priceHandler = jest.fn();
  const multiPriceHandler = jest.fn();
  const shippingHandler = jest.fn();
  const sortHandler = jest.fn();

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      query: {},
    }));
    render(
      <HeadingFilters
        priceHandler={priceHandler}
        multiPriceHandler={multiPriceHandler}
        shippingHandler={shippingHandler}
        replaceQuery={replaceQuery}
        sortHandler={sortHandler}
      />
    );
  });

  test("renders Price input fields", () => {
    const minPriceInput = screen.getByPlaceholderText("min");
    const maxPriceInput = screen.getByPlaceholderText("max");

    expect(minPriceInput).toBeInTheDocument();
    expect(maxPriceInput).toBeInTheDocument();
  });

  test("renders Free Shipping checkbox", () => {
    const shippingCheckbox = screen.getByLabelText("Free Shipping");
    expect(shippingCheckbox).toBeInTheDocument();
  });

  test("renders Sort by dropdown", () => {
    const sortByDropdown = screen.getByText(/Sort by/i);
    expect(sortByDropdown).toBeInTheDocument();
  });

  test("calls priceHandler with correct values when min and max price inputs change", () => {
    const minPriceInput = screen.getByPlaceholderText("min");
    const maxPriceInput = screen.getByPlaceholderText("max");

    fireEvent.change(minPriceInput, { target: { value: "20" } });
    expect(priceHandler).toHaveBeenLastCalledWith("20", "min");

    fireEvent.change(maxPriceInput, { target: { value: "100" } });
    expect(priceHandler).toHaveBeenLastCalledWith("100", "max");
  });
});
