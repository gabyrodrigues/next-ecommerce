import { render, screen } from "@testing-library/react";

import Main from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    const { container } = render(<Main />);

    expect(screen.getByRole("heading", { name: /boilerplate next tailwind/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
