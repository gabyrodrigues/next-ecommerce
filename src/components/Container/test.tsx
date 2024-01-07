import { render } from "@testing-library/react";
import Container from ".";

describe("<Container />", () => {
  it("should render the heading", () => {
    const { container } = render(
      <Container>
        <span>Won Games</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyle({ maxWidth: "120rem" });
    expect(container.firstChild).toMatchSnapshot();
  });
});
