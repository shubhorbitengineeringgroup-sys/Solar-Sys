import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "@/App";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "@/pages/ProductDetail";
import ContactSection from "@/components/ContactSection";
import MobileQuickBar from "@/components/MobileQuickBar";
import ProductsSection from "@/components/ProductsSection";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";

describe("Application, Local Bhopal SEO, and Mobile Responsive Tests", () => {
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

  it("toggles mobile menu and displays localized contact info", () => {
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

    // Check that mobile menu contains "Get Free Solar Quote" and Bhopal address
    expect(screen.getByText(/Get Free Solar Quote/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Arera Colony E-2/i).length).toBeGreaterThan(0);

    // Close menu
    fireEvent.click(toggleButton);
    expect(toggleButton.getAttribute("aria-expanded")).toBe("false");
  });

  it("renders MobileQuickBar with valid call, WhatsApp, and quotation anchors", () => {
    render(<MobileQuickBar />);

    const callLink = screen.getByRole("link", { name: /call solarsys bhopal hotline/i });
    expect(callLink).toHaveAttribute("href", "tel:+917024033333");

    const whatsappLink = screen.getByRole("link", { name: /chat with solarsys on whatsapp/i });
    expect(whatsappLink).toHaveAttribute("href", expect.stringContaining("https://wa.me/917024033333"));

    const quoteLink = screen.getByRole("link", { name: /get free solar site survey quote/i });
    expect(quoteLink).toHaveAttribute("href", "#contact");
  });

  it("renders Footer with explore links, sitemap, llms.txt, and company contact information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/\+91 9039075049/i)).toBeInTheDocument();
    expect(screen.getByText(/solarsysllp@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/www\.solarsysllp\.com/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /llms\.txt/i })).toHaveAttribute("href", "/llms.txt");
    expect(screen.getByRole("link", { name: /sitemap/i })).toHaveAttribute("href", "/sitemap.xml");
  });

  it("renders ContactSection with mobile-friendly form inputs and direct WhatsApp button", () => {
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

    const whatsappAction = screen.getByRole("link", { name: /chat on whatsapp/i });
    expect(whatsappAction).toHaveAttribute("href", expect.stringContaining("https://wa.me/917024033333"));
  });

  it("renders ProductsSection showcasing the 3 official company profile systems and interactive filters", () => {
    render(
      <BrowserRouter>
        <ProductsSection />
      </BrowserRouter>
    );

    expect(screen.getAllByText(/High-Efficiency Solar Systems/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Integrated Renewable Power Systems/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Energy Storage & Automation Solutions/i).length).toBeGreaterThan(0);

    // Verify filter buttons work
    const allButton = screen.getByRole("button", { name: /All Hardware & Solutions/i });
    expect(allButton).toBeInTheDocument();
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
    expect(screen.getAllByText(/#1 Solar EPC & Green Energy Engineering in Bhopal/i).length).toBeGreaterThan(0);
  });

  it("renders primary Bhopal phone +91 7024033333 and registered address in Arera Colony E-2", () => {
    render(<App />);
    expect(screen.getAllByText(/\+91 7024033333/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Arera Colony E-2/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/462016/i).length).toBeGreaterThan(0);
  });

  it("renders all four clean energy portfolio pillars and Bhopal FAQ hub with PM Surya Ghar scheme", () => {
    render(<App />);
    expect(screen.getAllByText(/Wind Energy Systems/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Geothermal Energy/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Biomass & Biogas Energy/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Solar Energy Solutions/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/PM Surya Ghar Muft Bijli Yojana/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Everything You Need to Know About/i)).toBeInTheDocument();
  });
});
