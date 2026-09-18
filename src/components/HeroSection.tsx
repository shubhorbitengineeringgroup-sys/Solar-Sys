import heroBg from "@/assets/hero-solar.jpg";
import heroEarth from "@/assets/hero-earth.jpg";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { PhoneCall, ShieldCheck, MapPin, Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-[#0a0f18]">
      {/* Background Image Layer with Motion */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 scale-105 animate-pulse-slow pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-[#0a0f18]/70 via-[#0a0f18]/90 to-[#0a0f18] z-0" />

      {/* Background geometric accents */}
      <div className="absolute top-1/4 -right-20 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-accent/10 rounded-full blur-[100px] sm:blur-[140px] z-0 animate-blob pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/20 rounded-full blur-[100px] z-0 animate-blob animation-delay-2000 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Two-column responsive layout */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">

          {/* LEFT — Text Content (cols 7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 opacity-0 animate-fade-up text-center lg:text-left">
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-accent/30 bg-accent/10 text-[10px] sm:text-xs font-bold text-accent tracking-[.15em] sm:tracking-[.25em] uppercase backdrop-blur-md shadow-lg shadow-accent/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>#1 Solar EPC Bhopal</span>
              <span className="text-white/40">•</span>
              <span>Renewable Energy Excellence</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-black leading-[1.12] text-white tracking-tight">
              Clean Energy For A <br className="hidden sm:inline" />
              <span className="photon-gradient-text">Sustainable</span> Future
              <span className="block text-base sm:text-2xl lg:text-3xl font-semibold text-accent/90 mt-2.5 sm:mt-3 tracking-normal">
                #1 Solar EPC & Green Energy Engineering in Bhopal
              </span>
            </h1>

            <p className="text-sm sm:text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
              <strong className="text-white font-semibold">SOLARSYS (LLP)</strong> engineers state-of-the-art rooftop & commercial solar installations, wind, geothermal, biomass, and microgrid infrastructure in <span className="text-accent font-medium">Bhopal, Madhya Pradesh</span> and worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full">
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="photon" size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-7 sm:px-9 text-sm sm:text-base rounded-full shadow-2xl shadow-accent/25 hover:shadow-accent/40 font-bold transition-all">
                  Get Free Site Survey <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="tel:+917024033333" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-full border-accent/40 text-white hover:bg-accent/10 bg-white/5 font-semibold flex items-center justify-center gap-2">
                  <PhoneCall className="w-4 h-4 text-accent" /> +91 7024033333
                </Button>
              </a>
            </div>

            {/* Micro badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> PM Surya Ghar Subsidy Direct
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" /> Shalimar Enclave, Arera Colony Bhopal
              </span>
            </div>

            {/* Key Statistics Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
              <div className="bg-white/[0.03] p-3 sm:p-4 rounded-xl border border-white/5">
                <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-white"><Counter target="15+" /></div>
                <div className="text-[9px] sm:text-xs text-white/50 uppercase tracking-wider font-semibold mt-1">Years Exp</div>
              </div>
              <div className="bg-white/[0.03] p-3 sm:p-4 rounded-xl border border-white/5">
                <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-white"><Counter target="500+" /></div>
                <div className="text-[9px] sm:text-xs text-white/50 uppercase tracking-wider font-semibold mt-1">Installations</div>
              </div>
              <div className="bg-white/[0.03] p-3 sm:p-4 rounded-xl border border-white/5">
                <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-white"><Counter target="50MW+" /></div>
                <div className="text-[9px] sm:text-xs text-white/50 uppercase tracking-wider font-semibold mt-1">Capacity</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Earth & Clean Energy Visual (Visible on Mobile & Desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0">
            {/* Ambient glow */}
            <div className="absolute w-[260px] sm:w-[380px] lg:w-[480px] h-[260px] sm:h-[380px] lg:h-[480px] rounded-full bg-accent/15 blur-3xl animate-pulse-slow pointer-events-none" />

            {/* Outer orbit ring */}
            <div
              className="absolute w-[250px] sm:w-[360px] lg:w-[440px] h-[250px] sm:h-[360px] lg:h-[440px] rounded-full border border-accent/25"
              style={{ boxShadow: '0 0 30px rgba(255,160,0,0.1)' }}
            />

            {/* Earth visual wrapper */}
            <div
              className="relative z-10"
              style={{ transform: 'rotate(-23.5deg)' }}
            >
              <div
                className="w-[210px] h-[210px] sm:w-[320px] sm:h-[320px] lg:w-[390px] lg:h-[390px] rounded-full overflow-hidden animate-spin-slow shadow-2xl relative"
                style={{
                  animationDuration: "60s",
                  animationTimingFunction: "linear",
                  boxShadow: '0 0 0 2px rgba(255,160,0,0.25), 0 0 60px rgba(255,160,0,0.15)'
                }}
              >
                <img
                  src={heroEarth}
                  alt="SOLARSYS LLP - Premier Solar Energy and Clean Infrastructure in Bhopal, India"
                  loading="eager"
                  decoding="async"
                  width={390}
                  height={390}
                  className="w-full h-full object-cover scale-110"
                />
              </div>

              {/* Realistic atmospheric shadow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 70% 50%, transparent 35%, rgba(5,10,20,0.55) 70%, rgba(5,10,20,0.88) 100%)',
                  zIndex: 2
                }}
              />
            </div>

            {/* Floating Info Pills on the visual for both mobile and desktop */}
            <div className="w-full max-w-sm flex flex-wrap justify-center sm:justify-between items-center gap-2 mt-4 sm:mt-6 z-20">
              <div className="bg-[#0f172a]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-white/90 shadow-xl flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Tier-1 Monocrystalline</span>
              </div>
              <div className="bg-[#0f172a]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-emerald-400 shadow-xl flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span>MPMKVVCL Approved</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-8 sm:h-10 rounded-full bg-gradient-to-t from-accent to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
