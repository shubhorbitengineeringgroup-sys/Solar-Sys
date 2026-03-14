import transitionImg from "@/assets/renewable-energy-comparison.png";
import { ArrowRight, Leaf, ShieldAlert } from "lucide-react";

const EnergyTransitionSection = () => {
  return (
    <section className="py-24 bg-[#0a0f18] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with dramatic styling */}
          <div className="relative group animate-fade-in">
            <div className="absolute -inset-4 bg-accent/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={transitionImg}
                alt="Transition from traditional power to solar energy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/80 via-transparent to-transparent" />

              {/* Overlay labels */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="bg-red-500/20 backdrop-blur-md border border-red-500/30 px-4 py-2 rounded-lg flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-200">The Past: Fossil Fuels</span>
                </div>
                <div className="bg-green-500/20 backdrop-blur-md border border-green-500/30 px-4 py-2 rounded-lg flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-200">The Future: Clean Solar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Persuasive Text */}
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] tracking-widest uppercase">
              The Evolution of Power
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black leading-tight">
              Why the World is <br />
              <span className="photon-gradient-text">Switching to Solar</span>
            </h2>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p>
                The era of heavy industrial pollution is coming to an end. Traditional power plants
                rely on depleting resources and release tons of CO₂ into our atmosphere every hour.
              </p>
              <p className="font-normal text-white">
                SOLARSYS LLP bridges the gap to a cleaner tomorrow. By transforming your roof
                into a mini-power plant, you're not just saving money — you're activeley
                choosing to stop the cycle of environmental damage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-red-400 font-bold mb-1 italic">Old Way</div>
                <p className="text-xs text-white/50">High monthly costs & environmental debt.</p>
              </div>
              <div className="p-4 bg-accent/10 rounded-2xl border border-accent/20">
                <div className="text-accent font-bold mb-1 italic">Solar Way</div>
                <p className="text-xs text-white/50">One-time investment & carbon-negative living.</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#products" className="inline-flex items-center gap-4 group">
                <span className="text-lg font-bold group-hover:text-accent transition-colors">Explore Solar Solutions</span>
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyTransitionSection;
