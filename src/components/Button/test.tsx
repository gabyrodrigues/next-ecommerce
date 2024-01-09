import { render } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  it("should render correct classNames when variant prop is not passed", () => {
    const button = render(<Button />);

    const classNames =
      "p-2 rounded-lg font-semibold bg-primary text-white border-0 hover:bg-darkPrimary";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
    expect(button.container.firstChild).toMatchSnapshot();
  });
  it("should render variant Filled correct classNames", () => {
    const button = render(<Button variant="filled" />);

    const classNames =
      "p-2 rounded-lg font-semibold bg-primary text-white border-0 hover:bg-darkPrimary";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
  });
  it("should render variant Outline correct classNames", () => {
    const button = render(<Button variant="outline" />);

    const classNames =
      "p-2 rounded-lg font-semibold bg-transparent text-primary border-white border-2 hover:bg-white hover:border-white hover:text-darkPrimary disabled:bg-transparent disabled:border-2 disabled:border-gray-400 disabled:text-gray-900 disabled:opacity-30";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
  });
  it("should render variant Secondary correct classNames", () => {
    const button = render(<Button variant="secondary" />);

    const classNames =
      "p-2 rounded-lg font-semibold bg-transparent text-secondary border-white border-2 hover:bg-white hover:border-white hover:text-darkSecondary disabled:bg-transparent disabled:border-2 disabled:border-gray-400 disabled:text-gray-900 disabled:opacity-30";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
  });
  it("should render variant Unstyled correct classNames", () => {
    const button = render(<Button variant="ghost" />);

    const classNames =
      "p-2 font-semibold bg-transparent text-secondary hover:text-white disabled:bg-transparent disabled:text-gray-900 disabled:opacity-30";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
  });
});
