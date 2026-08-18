import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PackagePreviewSection from "@/components/PackagePreviewSection";
import IntroSection from "@/components/IntroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SafetySection from "@/components/SafetySection";
import PrecautionsSection from "@/components/PrecautionsSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/60 to-muted/60">
      <Header />
      <main className="pt-24 md:pt-28">
        <HeroSection />
        <PackagePreviewSection />
        <IntroSection />
        <BenefitsSection />
        <SafetySection />
        <ProductsSection />
        <AboutSection />
        <PrecautionsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
