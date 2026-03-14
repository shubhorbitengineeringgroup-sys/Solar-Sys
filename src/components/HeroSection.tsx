import heroBg from "@/assets/hero-solar.jpg";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0a0f18]">
      {/* Background Image Layer with Motion */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 scale-110 animate-pulse-slow"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-[#0a0f18]/60 via-[#0a0f18] to-[#0a0f18] z-0" />

      {/* Background geometric accents */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] z-0 animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] z-0 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto space-y-10 opacity-0 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-accent tracking-[.3em] uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Renewable Energy Excellence
          </div>


          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black leading-[1.05] text-white">
            Illuminate Your <br />
            <span className="photon-gradient-text">Sustainable</span> Future
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            SOLARSYS LLP transforms the way the world uses energy. We bridge the gap between
            innovation and accessibility with high-performance solar infrastructure
            engineered for the next generation.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a href="#contact">
              <Button variant="photon" size="lg" className="h-16 px-12 text-xl rounded-full shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all font-bold">
                Get Started
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" size="lg" className="h-16 px-12 text-xl rounded-full border-white/20 text-white hover:bg-white/5 bg-transparent font-medium">
                Our Story
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-12 pt-16 border-t border-white/10 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white"><Counter target="15+" /></div>
              <div className="text-sm text-white/50 uppercase tracking-widest mt-1">Years Exp</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white"><Counter target="500+" /></div>
              <div className="text-sm text-white/50 uppercase tracking-widest mt-1">Projects</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white"><Counter target="99%" /></div>
              <div className="text-sm text-white/50 uppercase tracking-widest mt-1">Reliability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-t from-accent to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
