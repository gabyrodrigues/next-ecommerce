import { render } from "@testing-library/react";
import { Container } from ".";

describe("<Container />", () => {
  it("should render the container", () => {
    const { container } = render(
      <Container>
        <span>Next E-commerce</span>
      </Container>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
