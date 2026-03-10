import heroImage from "@/assets/green-city-solar.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-black" />
      <div
        className="absolute inset-0 z-0 bg-cover bg-repeat-x opacity-30 animate-slide-bg"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Background geometric accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-glass-cyan rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-glass-cyan rounded-full blur-3xl opacity-30 z-0" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div className="space-y-6 opacity-0 animate-fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-black/20 text-xs font-medium text-white/90 tracking-wide uppercase backdrop-blur-sm">
            Reliable Solar Energy Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-white">
            Powering a{" "}
            <span className="photon-gradient-text">Greener</span> Tomorrow with Solar Energy
          </h1>
          <p className="text-lg text-white/80 max-w-lg leading-relaxed">
            SOLARSYS LLP is your trusted partner in harnessing the power of the sun.
            We design, install, and maintain high-performance solar energy systems
            for homes, businesses, and industries across the region.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact">
              <Button variant="photon" size="lg">
                Get Quote
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
                Contact Us
              </Button>
            </a>
          </div>
        </div>

        {/* Right: Diamond image */}
        <div className="relative flex items-center justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {/* Gradient glow behind diamond */}
          <div className="absolute w-80 h-80 lg:w-[28rem] lg:h-[28rem] photon-gradient rounded-full blur-3xl opacity-20" />
          <div className="w-full max-w-lg lg:max-w-xl overflow-hidden relative drop-shadow-2xl flex items-center justify-center">
            <img
              src={heroImage}
              alt="Solar panel array installation"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
          {/* Decorative smaller diamonds */}
          <div className="absolute -top-4 -right-4 w-16 h-16 diamond-clip photon-gradient opacity-60" />
          <div className="absolute -bottom-6 -left-2 w-10 h-10 diamond-clip bg-glass-cyan" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
