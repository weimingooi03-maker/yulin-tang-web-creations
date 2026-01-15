import product1 from "@/assets/product-1.jpeg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ChevronDown, Award } from "lucide-react";

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
              <img src={logo} alt="魚鱗堂 Logo" className="h-24 w-auto" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                魚鱗堂
              </h1>
              <p className="text-2xl md:text-3xl font-serif text-primary tracking-widest">
                YULIN TANG
              </p>
            </div>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              深海鱼鳞胶原蛋白冻
            </h2>
            <p className="text-lg text-primary font-medium">
              Deep Sea Fish Scales Collagen Jelly
            </p>
            
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              不是粉、不是胶囊！100%鱼鳞胶原蛋白冻，可直接饮用或冷藏变成果冻食用。
              <br />
              <span className="text-sm">
                Not powder, not capsules! 100% collagen jelly - drink directly or refrigerate for a jelly treat.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
                onClick={scrollToProducts}
              >
                立即订购 Order Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              >
                了解更多 Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">天然成分 Natural</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl">🇲🇾 🇸🇬</p>
                <p className="text-sm text-muted-foreground">马来西亚 & 新加坡</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center flex flex-col items-center">
                <Award className="w-6 h-6 text-primary" />
                <p className="text-sm text-muted-foreground">KKM 认证</p>
              </div>
            </div>
          </div>
          
          {/* Product image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
            <img 
              src={product1} 
              alt="魚鱗堂深海胶原蛋白冻"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-center text-sm leading-tight">
                礼盒装<br />12罐/盒<br />Gift Box
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;
