import heroProduct from "@/assets/hero-product.jpeg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ChevronDown, Award, Shield } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="flex justify-center lg:justify-start mb-4">
              <img src={logo} alt="魚鱗堂 Logo" className="h-36 md:h-44 w-auto" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-brand text-foreground leading-tight">
                魚鱗堂
              </h1>
              <p className="text-3xl md:text-4xl font-serif text-primary tracking-widest">
                YULIN TANG
              </p>
            </div>
            
            <h2 className="text-2xl md:text-3xl text-foreground font-medium">
              深海鱼鳞胶原蛋白冻
            </h2>
            <p className="text-xl text-primary font-semibold">
              Deep Sea Fish Scales Collagen Jelly
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              不是粉、不是胶囊！100%鱼鳞胶原蛋白冻，可直接饮用或冷藏变成果冻食用。
              <br />
              <span className="text-base md:text-lg">
                Not powder, not capsules! 100% collagen jelly - drink directly or refrigerate for a jelly treat.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-base text-muted-foreground font-medium">天然成分 Natural</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl">🇲🇾 🇸🇬</p>
                <p className="text-base text-muted-foreground font-medium">马来西亚 & 新加坡</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center flex flex-col items-center">
                <div className="flex gap-2">
                  <Shield className="w-7 h-7 text-primary" />
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <p className="text-base text-muted-foreground font-medium">无防腐剂</p>
              </div>
            </div>
          </div>
          
          {/* Product image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
            <img 
              src={heroProduct} 
              alt="魚鱗堂深海胶原蛋白冻"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
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
