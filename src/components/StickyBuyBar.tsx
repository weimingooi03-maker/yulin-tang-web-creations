import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const StickyBuyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const products = document.getElementById("products");
      const contact = document.getElementById("contact");
      if (!products) return;
      const productsTop = products.getBoundingClientRect().top;
      const contactTop = contact ? contact.getBoundingClientRect().top : Infinity;
      // Show after user scrolls past hero and before reaching contact
      setVisible(productsTop < window.innerHeight * 0.5 && contactTop > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-primary/20 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <Button
          onClick={scrollToProducts}
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-lg"
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          立即选购 · Buy Now
        </Button>
      </div>
    </div>
  );
};

export default StickyBuyBar;
