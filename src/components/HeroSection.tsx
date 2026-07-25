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
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
          {/* Feature image */}
          <div className="w-full opacity-0 animate-fade-in-delay-2">
            <img
              src={heroImage}
              alt="魚鱗堂 独特配方 Unique Formula - Selected Deep-Sea Fish Scales Collagen"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>


          {/* Product info images */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-0 animate-fade-in-delay-3 pt-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              <img
                src={heroZh}
                alt="什么是鱼鳞冻 - 魚鱗堂深海鱼鳞胶原蛋白冻"
                loading="lazy"
                className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
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
