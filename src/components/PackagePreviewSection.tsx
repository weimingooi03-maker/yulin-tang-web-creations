import { Truck, ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/components/ProductsSection";
import { formatPrice } from "@/lib/utils";

const PackagePreviewSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto rounded-2xl border border-primary/20 bg-card/70 backdrop-blur-sm shadow-md p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div>
              <p className="text-sm sm:text-base font-bold text-foreground">选择配套</p>
              <p className="text-[11px] sm:text-xs text-muted-foreground">Select Your Package</p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
              <Truck className="w-3.5 h-3.5" />
              免运费 Free Shipping
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={scrollToProducts}
                className="relative rounded-xl border border-border/60 bg-background/70 p-2.5 sm:p-3 text-center hover:border-primary/40 hover:bg-background transition-colors"
              >
                {p.isBestValue && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-destructive text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm flex items-center gap-0.5">
                    <Flame className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> 最划算
                  </div>
                )}
                <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground">
                  SET {p.id.slice(-1).toUpperCase()}
                </p>
                <p className="text-base sm:text-lg font-extrabold text-primary leading-tight">
                  {formatPrice(p.priceMY, "MY")}
                </p>
                <p className="text-[10px] text-muted-foreground">{p.qtyLabel}</p>
              </button>
            ))}
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
