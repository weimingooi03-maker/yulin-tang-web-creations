import heroImage from "@/assets/unique-formula.png";
import heroZh from "@/assets/what-is-fish-jelly-zh.png";
import heroEn from "@/assets/what-is-fish-jelly-en.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-muted" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
          {/* Feature image - hero attraction */}
          <div className="relative w-full max-w-5xl opacity-0 animate-fade-in-delay-2">
            {/* Glow aura */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/30 rounded-[2rem] blur-3xl opacity-70 animate-hero-glow" />
            {/* Shimmer sweep */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="魚鱗堂 独特配方 Unique Formula - Selected Deep-Sea Fish Scales Collagen"
                className="w-full rounded-2xl shadow-2xl animate-hero-float"
              />
              <div className="pointer-events-none absolute inset-0 -translate-x-full animate-hero-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>


          {/* Section title */}
          <div className="w-full text-center pt-6 opacity-0 animate-fade-in-delay-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide bg-gradient-to-r from-primary via-gold to-accent bg-clip-text text-transparent">
              鱼鳞冻介绍
            </h2>
            <p className="text-base sm:text-lg mt-2 tracking-wider uppercase font-semibold bg-gradient-to-r from-primary via-gold to-accent bg-clip-text text-transparent">
              Marine Collagen Jelly Introduction
            </p>
            <div className="w-16 h-0.5 mx-auto mt-4 bg-gradient-to-r from-primary via-gold to-accent" />
          </div>

          {/* Product info images */}
          <div className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-0 animate-fade-in-delay-3">
            <div className="relative">
              <img
                src={heroZh}
                alt="什么是鱼鳞冻 - 魚鱗堂深海鱼鳞胶原蛋白冻"
                loading="lazy"
                className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative">
              <img
                src={heroEn}
                alt="What is Marine Collagen Jelly - YULIN TANG"
                loading="lazy"
                className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-10 h-10 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;
