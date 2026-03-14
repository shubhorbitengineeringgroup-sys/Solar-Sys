import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050a11] text-white py-16 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20 shadow-lg shadow-accent/5">
                <span className="text-accent font-heading text-2xl font-black italic">S</span>
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight">
                SOLAR<span className="photon-gradient-text">SYS</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light">
              Empowering businesses with sustainable energy solutions for a cleaner, greener future. We bridge the gap between innovation and environmental efficiency.
            </p>
            <div className="flex gap-3 pt-2">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 text-white/40"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-white/90">Explore</h3>
            <ul className="space-y-5 text-sm font-medium text-white/40">
              <li>
                <a href="/" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Products
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-white/90">Capabilities</h3>
            <ul className="space-y-5 text-sm font-medium text-white/40">
              <li>
                <a href="#" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Solar Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Energy Storage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Smart Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Hybrid Systems
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-all hover:translate-x-1 inline-block">
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Status */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-white/90">Contact</h3>
              <div className="space-y-4">
                <a
                  href="tel:+917024128029"
                  className="block text-accent text-lg font-bold hover:opacity-80 transition-opacity"
                >
                  +91 70241 28029
                </a>
                <a
                  href="mailto:vijaytiwari@orbitengineerings.com"
                  className="block text-white/40 text-sm hover:text-white transition-colors font-medium break-all"
                >
                  vijaytiwari@orbitengineerings.com
                </a>
              </div>
            </div>

            <div className="bg-[#0a121d] border border-white/5 p-6 rounded-2xl space-y-3 shadow-inner shadow-black/50">
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

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 tracking-[0.4em] font-bold uppercase">
            &copy; {new Date().getFullYear()} SOLARSYS LLP. PRECISION ENGINEERED SUSTAINABILITY.
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 tracking-[0.2em] font-bold uppercase">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

