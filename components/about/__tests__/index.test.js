import { render } from "@testing-library/react";
import AboutComponent from "../AboutComponent";

it("renders Checkout component", () => {
  const { container } = render(<AboutComponent />);
  expect(container).toMatchSnapshot();
});
