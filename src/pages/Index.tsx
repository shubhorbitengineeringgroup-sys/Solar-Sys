import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EnergyTransitionSection from "@/components/EnergyTransitionSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import BhopalSolarFaqSection from "@/components/BhopalSolarFaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white pb-14 lg:pb-0">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EnergyTransitionSection />
        <ServicesSection />
        <ProductsSection />
        <ProjectsSection />
        <WhyChooseUsSection />
        <BhopalSolarFaqSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
};

export default Index;

