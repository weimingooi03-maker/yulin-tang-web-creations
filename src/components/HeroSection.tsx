import heroImage from "@/assets/unique-formula.png.asset.json";
import { Button } from "@/components/ui/button";
import { ChevronDown, Gift } from "lucide-react";

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
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8">
          {/* Feature image */}
          <div className="w-full opacity-0 animate-fade-in-delay-2">
            <img
              src={heroImage.url}
              alt="魚鱗堂 独特配方 Unique Formula - Selected Deep-Sea Fish Scales Collagen"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-7">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-xl"
              onClick={scrollToProducts}
            >
              立即订购 Order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-xl font-semibold"
              onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
            >
              了解更多 Learn More
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-2 opacity-0 animate-fade-in-delay-8 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-base text-muted-foreground font-medium">天然成分 Natural</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl">🇲🇾 🇸🇬</p>
              <p className="text-base text-muted-foreground font-medium">免运费 Free Shipping</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center flex flex-col items-center">
              <Gift className="w-7 h-7 text-primary" />
              <p className="text-base text-muted-foreground font-medium">送礼滋补佳品</p>
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
