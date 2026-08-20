import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VoucherBanner from "@/components/VoucherBanner";
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
import SparkleBackground from "@/components/SparkleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream))]">
      <SparkleBackground />
      <Header />
      <main className="relative z-10 pt-24 md:pt-28">
        <VoucherBanner />
        <HeroSection />
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
