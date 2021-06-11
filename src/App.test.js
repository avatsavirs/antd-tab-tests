import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<Tabs />", () => {
  it("should verify that Tabs component renders and functions properly when called with required dataSource", async () => {
    render(<App />);
    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      /tab 1/i
    );
    expect(screen.getByRole("tabpanel", { hidden: false })).toHaveTextContent(
      /this is tab 1/i
    );
    userEvent.click(screen.getByRole("tab", { name: /tab 2/i }));
    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      /tab 2/i
    );
    await new Promise((res) => setTimeout(res, 100));
  });
});
