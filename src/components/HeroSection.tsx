import heroBg from "@/assets/hero-solar.jpg";
import heroEarth from "@/assets/hero-earth.jpg";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden bg-[#0a0f18]">
      {/* Background Image Layer with Motion */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 scale-110 animate-pulse-slow"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-[#0a0f18]/60 via-[#0a0f18] to-[#0a0f18] z-0" />

      {/* Background geometric accents */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] z-0 animate-blob pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] z-0 animate-blob animation-delay-2000 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Two-column layout: Left text | Right image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text Content */}
          <div className="space-y-6 sm:space-y-10 opacity-0 animate-fade-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-bold text-accent tracking-[.2em] sm:tracking-[.3em] uppercase backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Renewable Energy Excellence
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black leading-[1.1] text-white">
              Illuminate Your <br />
              <span className="photon-gradient-text">Sustainable</span> Future
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
              SOLARSYS LLP transforms the way the world uses energy. We bridge the gap between
              innovation and accessibility with high-performance solar infrastructure
              engineered for the next generation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 pt-2 sm:pt-4 w-full sm:w-auto">
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="photon" size="lg" className="w-full sm:w-auto h-12 sm:h-16 px-8 sm:px-12 text-base sm:text-xl rounded-full shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all font-bold">
                  Get Started
                </Button>
              </a>
              <a href="#about" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 sm:h-16 px-8 sm:px-12 text-base sm:text-xl rounded-full border-white/20 text-white hover:bg-white/5 bg-transparent font-medium">
                  Our Story
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-8 pt-8 sm:pt-10 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-white"><Counter target="15+" /></div>
                <div className="text-[10px] sm:text-sm text-white/50 uppercase tracking-wider sm:tracking-widest mt-1">Years Exp</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-white"><Counter target="500+" /></div>
                <div className="text-[10px] sm:text-sm text-white/50 uppercase tracking-wider sm:tracking-widest mt-1">Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-white"><Counter target="99%" /></div>
                <div className="text-[10px] sm:text-sm text-white/50 uppercase tracking-wider sm:tracking-widest mt-1">Reliability</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Earth Illustration */}
          <div className="hidden lg:flex items-center justify-center relative">

            {/* Soft ambient glow behind */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl animate-pulse-slow" />

            {/* Outer subtle orbit ring */}
            <div
              className="absolute w-[455px] h-[455px] rounded-full border border-accent/20"
              style={{ boxShadow: '0 0 25px rgba(255,160,0,0.07)' }}
            />

            {/* Earth axial tilt wrapper (~23.5deg like real Earth) */}
            <div
              className="relative z-10"
              style={{ transform: 'rotate(-23.5deg)' }}
            >
              {/* Rotating circle — clips white via overflow-hidden */}
              <div
                className="w-[400px] h-[400px] rounded-full overflow-hidden animate-spin-slow"
                style={{
                  animationDuration: "60s",
                  animationTimingFunction: "linear",
                  boxShadow: '0 0 0 1.5px rgba(255,160,0,0.18), 0 0 50px rgba(255,160,0,0.12)'
                }}
              >
                <img
                  src={heroEarth}
                  alt="Sustainable Earth with Solar Energy"
                  className="w-full h-full object-cover scale-110"
                />
              </div>

              {/* Day/Night shadow overlay — simulates real Earth lighting */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 70% 50%, transparent 35%, rgba(5,10,20,0.55) 70%, rgba(5,10,20,0.85) 100%)',
                  zIndex: 2
                }}
              />
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
