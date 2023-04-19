import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Formik, Form } from "formik";
import "@testing-library/jest-dom/extend-expect";
import SingularSelect from "../SingularSelect";

const sampleData = [
  { _id: "1", name: "Option 1" },
  { _id: "2", name: "Option 2" },
  { _id: "3", name: "Option 3" },
];

const setup = (props) => {
  return render(
    <Formik initialValues={{ testSelect: "" }} onSubmit={() => {}}>
      <Form>
        <SingularSelect
          name="testSelect"
          data={sampleData}
          placeholder="Select an option"
          {...props}
        />
      </Form>
    </Formik>
  );
};

test("renders the SingularSelect component with options", () => {
  setup();

  fireEvent.mouseDown(screen.getByRole("button"));
  const listBox = screen.getByRole("listbox");
  expect(listBox).toBeInTheDocument();
  expect(screen.getByText("No Selected / Or Empty")).toBeInTheDocument();
  expect(screen.getByText("Option 1")).toBeInTheDocument();
  expect(screen.getByText("Option 2")).toBeInTheDocument();
  expect(screen.getByText("Option 3")).toBeInTheDocument();
});

test("selects an option and triggers onChange event", () => {
  const handleChange = jest.fn();
  setup({ handleChange });

  fireEvent.mouseDown(screen.getByRole("button"));
  fireEvent.click(screen.getByText("Option 1"));

  expect(handleChange).toHaveBeenCalled();
});

test("renders the provided header", () => {
  setup({ header: "Sample Header" });

  fireEvent.mouseDown(screen.getByRole("button"));
  expect(screen.getByText("Sample Header")).toBeInTheDocument();
});
