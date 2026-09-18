import { useState } from "react";
import { Mail, Globe, Send, Phone, MapPin, MessageSquare, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Rooftop Solar",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Received!",
      description: "Our Bhopal solar engineering team will connect with you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", projectType: "Rooftop Solar", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-background">
      {/* Decorative details */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-20 max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] tracking-widest uppercase">
            Start Your Energy Transition
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-foreground tracking-tight">
            Schedule A Free Site Assessment in <br />
            <span className="photon-gradient-text">Bhopal & Nationwide</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            Get in touch with SOLARSYS LLP for customized solar sizing, PM Surya Ghar subsidy guidance, net-metering approvals, and full EPC quotations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Info Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/60 shadow-lg space-y-6">
              <h3 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                Direct Contact Information
              </h3>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                  <Phone className="w-5 h-5 text-accent group-hover:text-slate-950 transition-colors" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent">Call Primary Hotline & Support</div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <a href="tel:+917024033333" className="text-base sm:text-lg font-bold text-foreground hover:text-accent transition-colors">
                      +91 7024033333 <span className="text-xs font-normal text-muted-foreground">(Primary)</span>
                    </a>
                    <a href="tel:+919039075049" className="text-base sm:text-lg font-bold text-foreground hover:text-accent transition-colors">
                      +91 9039075049 <span className="text-xs font-normal text-muted-foreground">(Support)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                  <Mail className="w-5 h-5 text-accent group-hover:text-slate-950 transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Official Email</div>
                  <a href="mailto:solarsysllp@gmail.com" className="text-base sm:text-lg font-bold text-foreground hover:text-accent transition-colors break-all">
                    solarsysllp@gmail.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                  <Globe className="w-5 h-5 text-accent group-hover:text-slate-950 transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Web Portal</div>
                  <a href="https://solarsysllp.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-foreground hover:text-accent transition-colors">
                    solarsysllp.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                  <MapPin className="w-5 h-5 text-accent group-hover:text-slate-950 transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Bhopal Registered Office</div>
                  <a
                    href="https://maps.google.com/?q=Flat+2,+Block+12,+Shalimar+Enclave,+Arera+Colony+E-2+Sector,+Huzur,+Bhopal,+Madhya+Pradesh+462016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-foreground hover:text-accent transition-colors leading-relaxed block"
                  >
                    Flat 2, Block 12, Shalimar Enclave, <br />
                    Arera Colony E-2 Sector, Huzur, Bhopal, <br />
                    Madhya Pradesh 462016, India
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Action Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/917024033333?text=Hello%20SOLARSYS%20team,%20I%20want%20to%20inquire%20about%20solar%20installation%20in%20Bhopal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp (+91 7024033333)
                </a>
              </div>
            </div>

            {/* Quality Guarantees */}
            <div className="p-4 sm:p-6 rounded-2xl bg-accent/5 border border-accent/20 space-y-2">
              <div className="text-xs font-bold text-foreground uppercase tracking-wider">
                Why Inquire With SOLARSYS?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Zero-cost site assessment
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> MPMKVVCL subsidy guidance
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> 25-year panel performance
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Turnkey civil & electrical EPC
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-2xl sm:rounded-[2.5rem] blur-3xl -z-10 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 opacity-50 pointer-events-none" />
            <form
              onSubmit={handleSubmit}
              className="bg-card/70 backdrop-blur-xl rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 border border-border/60 shadow-2xl relative z-10 space-y-4 sm:space-y-5"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                Request Free Solar Proposal
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-background/70 border border-border/60 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-background/70 border border-border/60 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-medium"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-background/70 border border-border/60 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-medium"
                  placeholder="+91 7024033333"
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 block">
                  Project Details / Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-background/70 border border-border/60 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-medium resize-none"
                  placeholder="Tell us about your requirements (e.g. 5kW Rooftop in Arera Colony Bhopal, monthly bill ₹5000)..."
                />
              </div>

              <button
                type="submit"
                className="get-quote-pill w-full py-4 sm:py-5 text-xs sm:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center shadow-xl shadow-accent/20"
              >
                Send Message <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
