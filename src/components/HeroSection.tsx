import heroImage from "@/assets/green-city-solar.png";
import heroBg from "@/assets/hero-solar.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-[#0a0f18]">
      {/* Background Image Layer with Motion */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-110 animate-pulse-slow"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-r from-[#0a0f18] via-[#0a0f18]/80 to-transparent z-0" />

      {/* Background geometric accents */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] z-0 animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px] z-0 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text */}
        <div className="space-y-8 opacity-0 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-accent tracking-[.2em] uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Renewable Energy Excellence
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black leading-[1.05] text-white">
            Illuminate Your <br />
            <span className="photon-gradient-text">Sustainable</span> Future
          </h1>
          
          <p className="text-xl text-white/70 max-w-xl leading-relaxed font-light">
            SOLARSYS LLP transforms the way the world uses energy. We bridge the gap between 
            innovation and accessibility with high-performance solar infrastructure 
            engineered for the next generation.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-4">
            <a href="#contact">
              <Button variant="photon" size="lg" className="h-14 px-10 text-lg rounded-full shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all font-bold">
                Get Started
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full border-white/20 text-white hover:bg-white/5 bg-transparent font-medium">
                Our Story
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-xs text-white/50 uppercase tracking-widest">Years Exp</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-xs text-white/50 uppercase tracking-widest">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99%</div>
              <div className="text-xs text-white/50 uppercase tracking-widest">Reliability</div>
            </div>
          </div>
        </div>

        {/* Right: Premium Image Treatment */}
        <div className="relative flex items-center justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-full max-w-2xl group">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-[80px] group-hover:bg-accent/30 transition-all duration-700" />
            <div className="relative bg-white/5 backdrop-blur-sm p-4 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Solar technology illustration"
                className="w-full h-auto object-contain rounded-[1.5rem] transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            
            {/* Dynamic floating elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center animate-float shadow-2xl">
              <div className="w-12 h-12 photon-gradient diamond-clip opacity-80" />
            </div>
            <div className="absolute -bottom-8 -left-8 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-1 animate-float shadow-2xl" style={{ animationDelay: "2s" }}>
              <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Real-time stats</span>
              <span className="text-white font-bold">8.4 kW Generated</span>
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
