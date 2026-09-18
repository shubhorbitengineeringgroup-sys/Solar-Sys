import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050a11] text-white py-12 sm:py-16 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Logo & Description */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20 shadow-lg shadow-accent/5">
                <span className="text-accent font-heading text-xl sm:text-2xl font-black italic">S</span>
              </div>
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                SOLAR<span className="photon-gradient-text">SYS</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
              Empowering businesses and homes with sustainable energy solutions for a cleaner, greener future. We bridge the gap between innovation and environmental efficiency.
            </p>
            <div className="flex gap-3 pt-2">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 text-white/50"
                  aria-label="Social Link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] mb-6 sm:mb-8 text-white/90">Explore</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm font-medium text-white/60">
              <li>
                <a href="/#home" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Products
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] mb-6 sm:mb-8 text-white/90">Capabilities</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm font-medium text-white/60">
              <li>
                <span className="hover:text-accent transition-colors inline-block cursor-default">
                  Solar Installation
                </span>
              </li>
              <li>
                <span className="hover:text-accent transition-colors inline-block cursor-default">
                  Energy Storage
                </span>
              </li>
              <li>
                <span className="hover:text-accent transition-colors inline-block cursor-default">
                  Smart Monitoring
                </span>
              </li>
              <li>
                <span className="hover:text-accent transition-colors inline-block cursor-default">
                  Hybrid Systems
                </span>
              </li>
              <li>
                <span className="hover:text-accent transition-colors inline-block cursor-default">
                  Maintenance & Support
                </span>
              </li>
              <li>
                <span className="hover:text-accent transition-colors inline-block cursor-default">
                  Consultation
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Status */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.25em] mb-6 sm:mb-8 text-white/90">Contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:+919039075049"
                  className="block text-accent text-base sm:text-lg font-bold hover:opacity-80 transition-opacity"
                >
                  +91 9039075049
                </a>
                <a
                  href="mailto:solarsysllp@gmail.com"
                  className="block text-white/60 text-sm hover:text-white transition-colors font-medium break-all"
                >
                  solarsysllp@gmail.com
                </a>
                <a
                  href="https://www.solarsysllp.com"
                  className="block text-white/50 text-xs hover:text-accent transition-colors font-medium"
                >
                  www.solarsysllp.com
                </a>
              </div>
            </div>

            <div className="bg-[#0a121d] border border-white/5 p-4 sm:p-5 rounded-2xl space-y-2 shadow-inner shadow-black/50">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/80">Status</span>
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-xs font-bold text-white/80">Renewable Grid Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] sm:text-xs text-white/40 tracking-[0.15em] font-medium uppercase">
            &copy; {new Date().getFullYear()} SOLARSYS LLP. PRECISION ENGINEERED SUSTAINABILITY.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] sm:text-xs text-white/40 tracking-wider font-medium uppercase">
            <a href="#about" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

