import { render } from "@testing-library/react";
import NewOrder from "./NewOrder";

// test()
describe(NewOrder, () => {
  it("form label should display the text in english", () => {
    const { getByTestId } = render(<NewOrder />);
    const formLabelText = getByTestId("formLabel").textContent;
    expect(formLabelText).toEqual("Table Number");
  });
});
