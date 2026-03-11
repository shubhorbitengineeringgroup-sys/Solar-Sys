import { useState } from "react";
import { Mail, Globe, Send, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative details */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] tracking-widest uppercase mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            Ready to <span className="photon-gradient-text">Switch</span> to Solar?
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Contact us today for a free consultation, site assessment, or custom quote. 
            Our expert team is here to answer all your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-sm">
                  <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Call Us</div>
                  <div className="text-xl font-bold text-foreground">+91 9039075049</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-sm">
                  <Globe className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Website</div>
                  <div className="text-xl font-bold text-foreground">www.solarsysllp.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-sm">
                  <Mail className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Email Us</div>
                  <div className="text-xl font-bold text-foreground">solarsysllp@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-sm">
                  <MapPin className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Our Office</div>
                  <div className="text-lg font-bold text-foreground leading-snug">
                    Flat 2, Block 12, Shalimar Enclave, <br />
                    Arera Colony E-3 Sector, Huzur, Bhopal, <br />
                    Madhya Pradesh - 462016
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-[2.5rem] blur-3xl -z-10 translate-x-4 translate-y-4 opacity-50" />
            <form onSubmit={handleSubmit} className="bg-card/40 backdrop-blur-xl rounded-[2.5rem] p-10 border border-border/50 shadow-2xl relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-background/50 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-background/50 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 block">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-background/50 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button 
                type="submit" 
                className="get-quote-pill w-full py-5 text-sm font-black uppercase tracking-[0.2em]"
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
