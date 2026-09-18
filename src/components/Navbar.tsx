import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveLink("");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for navbar height

      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(link.href);
          }
        }
      }

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
        setActiveLink("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      setActiveLink(href);
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border transition-all">
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6">
        <a
          href="/#home"
          className="font-heading text-xl sm:text-2xl font-black tracking-tight text-foreground transition-transform hover:scale-105"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          SOLAR<span className="photon-gradient-text">SYS</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 px-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`get-quote-pill text-[10px] lg:text-xs px-2.5 lg:px-3.5 py-1.5 ${
                activeLink === link.href ? "active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={`get-quote-pill text-[10px] lg:text-xs px-3.5 lg:px-4 py-1.5 ml-1 lg:ml-2 ${
              activeLink === "#contact" ? "active" : ""
            }`}
          >
            Get Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border px-4 py-6 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`get-quote-pill w-full text-center py-3 text-xs tracking-wider ${
                  activeLink === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`get-quote-pill w-full mt-2 text-center py-3.5 bg-accent text-white font-black uppercase tracking-[0.2em] shadow-xl ${
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
