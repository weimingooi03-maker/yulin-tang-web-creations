import { Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackagePreviewSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-3">
          <p className="text-lg sm:text-2xl font-serif font-bold text-foreground tracking-wide">
            魚鱗堂 深海鱼鳞胶原蛋白冻
          </p>
          <p className="text-[11px] sm:text-sm text-primary font-semibold uppercase tracking-wider">
            YULIN TANG Marine Collagen Jelly
          </p>
        </div>
        <div className="max-w-3xl mx-auto rounded-2xl border border-primary/20 bg-card/70 backdrop-blur-sm shadow-md p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div>
              <p className="text-sm sm:text-base font-bold text-foreground">选择配套</p>
              <p className="text-[11px] sm:text-xs text-muted-foreground">Select Your Package</p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
              <Truck className="w-3.5 h-3.5" />
              免运费 Free Shipping
            </div>
          </div>

          <Button onClick={scrollToProducts} className="w-full font-bold" variant="default">
            了解配套 View Packages
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagePreviewSection;
