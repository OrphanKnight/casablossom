import { render, fireEvent, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import SizesFilter from "../index";

const sizes = ["S", "M", "L", "XL", "XXL"];
const sizeHandler = jest.fn();

describe("SizesFilter component", () => {
  beforeEach(() => {
    render(
      <RouterContext.Provider
        value={{
          query: {},
          pathname: "/",
          asPath: "/",
          push: jest.fn(),
          replace: jest.fn(),
          reload: jest.fn(),
          back: jest.fn(),
          prefetch: jest.fn(),
          beforePopState: jest.fn(),
          events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
          isFallback: false,
          isReady: true,
          isPreview: false,
          isLocaleDomain: false,
          basePath: "",
        }}
      >
        <SizesFilter sizes={sizes} sizeHandler={sizeHandler} />
      </RouterContext.Provider>
    );
  });

  test("renders sizes correctly", () => {
    sizes.forEach((size) => {
      expect(screen.getByText(size)).toBeInTheDocument();
    });
  });

  test("calls sizeHandler with correct value when size is clicked", () => {
    sizes.forEach((size) => {
      fireEvent.click(screen.getByText(size));
      expect(sizeHandler).toHaveBeenCalledWith(size);
    });
  });
});
