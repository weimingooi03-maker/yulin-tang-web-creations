import { MessageCircle, Info, Package } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent("您好！我想了解更多关于魚鱗堂胶原蛋白冻的信息。\nHello! I would like to know more about YULIN TANG Collagen Jelly.");
    window.open(`https://wa.me/601158727742?text=${message}`, "_blank");
  };

  const scrollToIntro = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* 了解产品 Button */}
      <button
        onClick={scrollToIntro}
        className="flex items-center gap-1.5 h-10 pl-3 pr-4 bg-white hover:bg-primary/10 border border-primary/30 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="了解产品 Learn About Product"
      >
        <Info className="w-4 h-4 text-primary shrink-0" />
        <span className="text-xs font-bold text-primary whitespace-nowrap">了解产品</span>
      </button>

      {/* 了解配套 Button */}
      <button
        onClick={scrollToProducts}
        className="flex items-center gap-1.5 h-10 pl-3 pr-4 bg-white hover:bg-primary/10 border border-primary/30 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="了解配套 Learn About Packages"
      >
        <Package className="w-4 h-4 text-primary shrink-0" />
        <span className="text-xs font-bold text-primary whitespace-nowrap">了解配套</span>
      </button>

      {/* WhatsApp Button */}
      <div className="relative">
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 whitespace-nowrap transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
            立即咨询 Chat Now
            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-foreground" />
          </div>
        </div>

        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Contact via WhatsApp"
        >
          {/* Ping animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

          {/* Icon */}
          <MessageCircle className="w-8 h-8 text-white relative z-10" />
        </button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
