import heroImage from "@/assets/hero-solar.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background geometric accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-glass-cyan rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-glass-cyan rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div className="space-y-6 opacity-0 animate-fade-up">
           <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-muted-foreground tracking-wide uppercase">
            Reliable Solar Energy Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-foreground">
            Powering a{" "}
            <span className="photon-gradient-text">Greener</span> Tomorrow with Solar Energy
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
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
              <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5">
                Contact Us
              </Button>
            </a>
          </div>
        </div>

        {/* Right: Diamond image */}
        <div className="relative flex items-center justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {/* Gradient glow behind diamond */}
          <div className="absolute w-80 h-80 lg:w-[28rem] lg:h-[28rem] photon-gradient rounded-full blur-3xl opacity-20" />
          <div className="diamond-clip w-72 h-72 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] overflow-hidden relative">
            <img
              src={heroImage}
              alt="Solar panel array installation"
              className="w-full h-full object-cover scale-125"
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
