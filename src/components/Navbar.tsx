import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const links = [
    { label: "About", href: "/#about" },
    { label: "Products", href: "/#products" },
    { label: "Projects", href: "/#projects" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="/" className="font-heading text-2xl font-bold tracking-tight text-foreground" onClick={() => setActiveLink("")}>
          SOLAR<span className="photon-gradient-text">SYS</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 px-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`get-quote-pill text-[10px] px-3.5 py-1.5 ${
                activeLink === link.href ? "active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setActiveLink("#contact")}
            className={`get-quote-pill text-[10px] px-4 py-1.5 ml-2 ${
              activeLink === "#contact" ? "active" : ""
            }`}
          >
            Get Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-6">
          <div className="flex flex-col gap-3 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`get-quote-pill w-full text-center py-3 ${
                  activeLink === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                setActiveLink("#contact");
                setIsOpen(false);
              }}
              className={`get-quote-pill w-full mt-2 text-center py-4 bg-accent text-white font-black uppercase tracking-[0.2em] shadow-2xl ${
                activeLink === "#contact" ? "active" : ""
              }`}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
