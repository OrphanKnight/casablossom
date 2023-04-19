import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import MultipleSelect from "../MultipleSelect";

const mockData = [
  { _id: "1", name: "Option 1" },
  { _id: "2", name: "Option 2" },
  { _id: "3", name: "Option 3" },
];

const Wrapper = ({ children }) => (
  <Formik
    initialValues={{
      subCategories: [],
    }}
    onSubmit={() => {}}
  >
    <Form>{children}</Form>
  </Formik>
);

describe("MultipleSelect component", () => {
  test("renders without crashing", () => {
    render(
      <Wrapper>
        <MultipleSelect
          data={mockData}
          handleChange={() => {}}
          value={[]}
          name="subCategories"
          header="Select SubCategories"
          disabled={false}
        />
      </Wrapper>
    );
  });

  test("displays subcategories and allows selection", async () => {
    render(
      <Wrapper>
        <MultipleSelect
          data={mockData}
          handleChange={() => {}}
          value={[]}
          name="subCategories"
          header="Select SubCategories"
          disabled={false}
        />
      </Wrapper>
    );

    const dropdown = screen.getByRole("button");
    userEvent.click(dropdown);

    const subCategory1 = await screen.findByText("Option 1");
    const subCategory2 = await screen.findByText("Option 2");
    const subCategory3 = await screen.findByText("Option 3");

    expect(subCategory1).toBeInTheDocument();
    expect(subCategory2).toBeInTheDocument();
    expect(subCategory3).toBeInTheDocument();

    userEvent.click(subCategory1);
    userEvent.click(subCategory2);

    userEvent.click(dropdown);

    const chip1 = await screen.findByText("Option 1");
    const chip2 = await screen.findByText("Option 2");

    expect(chip1).toBeInTheDocument();
    expect(chip2).toBeInTheDocument();
  });
});
