const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-heading text-xl font-bold tracking-tight">
            SOLAR<span className="photon-gradient-text">SYS</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/60">
            <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
            <a href="#products" className="hover:text-primary-foreground transition-colors">Products</a>
            <a href="#projects" className="hover:text-primary-foreground transition-colors">Projects</a>
            <a href="#why-us" className="hover:text-primary-foreground transition-colors">Why Us</a>
            <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} SOLARSYS LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
