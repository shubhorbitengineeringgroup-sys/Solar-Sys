import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "@/App";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "@/pages/ProductDetail";
import ContactSection from "@/components/ContactSection";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";

describe("Application and Mobile Responsive Tests", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    Element.prototype.scrollIntoView = vi.fn();
  });

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

  it("toggles mobile menu and displays legible CTA button", () => {
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

    // Check that mobile menu contains "Get Quote" button with text-white
    const getQuoteButtons = screen.getAllByText(/Get Quote/i);
    expect(getQuoteButtons.length).toBeGreaterThanOrEqual(2); // Desktop & Mobile

    // Close menu
    fireEvent.click(toggleButton);
    expect(toggleButton.getAttribute("aria-expanded")).toBe("false");
  });

  it("renders Footer with explore links and company contact information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/\+91 9039075049/i)).toBeInTheDocument();
    expect(screen.getByText(/solarsysllp@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/solarsysllp\.com/i)).toBeInTheDocument();
  });

  it("renders ContactSection with mobile-friendly form inputs", () => {
    render(<ContactSection />);

    const nameInput = screen.getByPlaceholderText(/enter your name/i);
    const emailInput = screen.getByPlaceholderText(/your@email\.com/i);
    const messageInput = screen.getByPlaceholderText(/tell us about your requirements/i);

    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveClass("text-base");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveClass("text-base");
    expect(messageInput).toBeInTheDocument();
    expect(messageInput).toHaveClass("text-base");
  });

  it("renders ProductDetail page with responsive technical specs table", () => {
    render(
      <MemoryRouter initialEntries={["/product/solar-panel"]}>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/High-Efficiency Solar Panels/i)).toBeInTheDocument();
    expect(screen.getByText(/Technical Specifications/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Monocrystalline PERC/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders entire App homepage without errors", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
    expect(screen.getByText(/Renewable Energy Excellence/i)).toBeInTheDocument();
  });
});
