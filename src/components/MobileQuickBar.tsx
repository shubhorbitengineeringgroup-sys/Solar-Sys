import { PhoneCall, MessageSquare, Calculator } from "lucide-react";

const MobileQuickBar = () => {
  return (
    <aside
      aria-label="Mobile Quick Contact Bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070c14]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href="tel:+917024033333"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-xs font-bold"
          aria-label="Call SOLARSYS Bhopal Hotline"
        >
          <PhoneCall className="w-3.5 h-3.5 text-accent shrink-0" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/917024033333?text=Hello%20SOLARSYS%20team,%20I%20want%20to%20inquire%20about%20solar%20installation%20in%20Bhopal."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors text-xs font-bold shadow-md shadow-emerald-900/30"
          aria-label="Chat with SOLARSYS on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Free Quote CTA */}
        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-accent text-slate-950 hover:bg-accent/90 transition-colors text-xs font-black uppercase tracking-wider shadow-md shadow-accent/20"
          aria-label="Get Free Solar Site Survey Quote"
        >
          <Calculator className="w-3.5 h-3.5 shrink-0" />
          <span>Free Quote</span>
        </a>
      </div>
    </aside>
  );
};

export default MobileQuickBar;
