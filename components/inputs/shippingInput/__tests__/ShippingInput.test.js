import { render, fireEvent, screen } from "@testing-library/react";
import { Formik, Form } from "formik";
import ShippingInput from "../index";

describe("ShippingInput component", () => {
  beforeEach(() => {
    render(
      <Formik
        initialValues={{
          testInput: "",
        }}
        onSubmit={() => {}}
      >
        <Form>
          <ShippingInput placeholder="Test input" name="testInput" />
        </Form>
      </Formik>
    );
  });

  test("renders input field", () => {
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("displays placeholder", () => {
    const placeholder = screen.getByText("Test input");
    expect(placeholder).toBeInTheDocument();
  });

  test("updates input value", () => {
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "New value" } });
    expect(input.value).toBe("New value");
  });

  test("moves placeholder on focus", () => {
    const input = screen.getByRole("textbox");
    const placeholder = screen.getByText("Test input");

    expect(placeholder.className).not.toContain("move");
    fireEvent.focus(input);
    expect(placeholder.className).toContain("move");
  });

  test("keeps placeholder moved when input is not empty", () => {
    const input = screen.getByRole("textbox");
    const placeholder = screen.getByText("Test input");

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "New value" } });
    fireEvent.blur(input);
    expect(placeholder.className).toContain("move");
  });

  test("returns placeholder when input is empty", () => {
    const input = screen.getByRole("textbox");
    const placeholder = screen.getByText("Test input");

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "New value" } });
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);
    expect(placeholder.className).not.toContain("move");
  });
});
