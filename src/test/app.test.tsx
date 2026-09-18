import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "@/App";
import Navbar from "@/components/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Application and Mobile Responsive Tests", () => {
  it("renders Navbar with brand name and navigation items", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getAllByText(/SOLAR/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Products/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Services/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0);
  });

  it("toggles mobile menu when clicking hamburger button", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton.getAttribute("aria-expanded")).toBe("false");

    // Open menu
    fireEvent.click(toggleButton);
    expect(toggleButton.getAttribute("aria-expanded")).toBe("true");

    // Close menu
    fireEvent.click(toggleButton);
    expect(toggleButton.getAttribute("aria-expanded")).toBe("false");
  });

  it("renders entire App homepage without errors", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
    expect(screen.getByText(/Renewable Energy Excellence/i)).toBeInTheDocument();
  });
});
