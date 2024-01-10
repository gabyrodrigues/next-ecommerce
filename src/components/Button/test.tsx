import { render } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  it("should render correct classNames when variant prop is not passed", () => {
    const button = render(<Button />);

    const classNames =
      "flex justify-center p-2 rounded-lg font-semibold bg-primary text-white border-0 hover:bg-darkPrimary disabled:border-transparent disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
    expect(button.container.firstChild).toMatchSnapshot();
  });
  it("should render variant Filled correct classNames", () => {
    const button = render(<Button variant="filled" />);

    const classNames =
      "flex justify-center p-2 rounded-lg font-semibold bg-primary text-white border-0 hover:bg-darkPrimary disabled:border-transparent disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
  });
  it("should render variant Destructive correct classNames", () => {
    const button = render(<Button variant="destructive" />);

    const classNames =
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
  });
  it("should render variant Outline correct classNames", () => {
    const button = render(<Button variant="outline" />);

    const classNames =
      "flex justify-center p-2 rounded-lg font-semibold bg-transparent text-primary border-white border-2 hover:bg-white hover:border-white hover:text-darkPrimary disabled:border-2 disabled:border-gray-400 disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
  });
  it("should render variant Secondary correct classNames", () => {
    const button = render(<Button variant="secondary" />);

    const classNames =
      "flex justify-center p-2 rounded-lg font-semibold bg-transparent text-secondary border-white border-2 hover:bg-white hover:border-white hover:text-darkSecondary disabled:border-2 disabled:border-gray-400 disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
  });
  it("should render variant Ghost correct classNames", () => {
    const button = render(<Button variant="ghost" />);

    const classNames =
      "flex justify-center p-2 font-semibold bg-transparent text-secondary hover:text-white disabled:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
  });
  it("should render variant Link correct classNames", () => {
    const button = render(<Button variant="link" />);

    const classNames = "text-primary underline-offset-4 hover:underline";
    const buttonClassNames = button.getByRole("button").className.includes(classNames);

    expect(buttonClassNames).toBeTruthy();
  });
});
