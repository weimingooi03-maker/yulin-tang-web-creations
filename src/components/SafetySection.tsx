import { Card, CardContent } from "@/components/ui/card";
import sterilizationSafety from "@/assets/sterilization-safety.png";

const SafetySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
            高温真空杀菌
          </h3>
          <p className="text-lg text-primary font-semibold">
            High Temperature Vacuum Sterilization
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="overflow-hidden border-border/50 shadow-xl">
            <div className="rounded-2xl overflow-hidden p-4">
              <img
                src={sterilizationSafety}
                alt="高温真空杀菌 - 365天常温保存，无防腐剂，锁住营养安心饮用"
                loading="lazy"
                className="w-full max-w-sm mx-auto h-auto"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h4 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2">
                为什么可以收1年？
              </h4>
              <p className="text-base text-primary font-semibold mb-4">
                Why Can It Last 1 Year?
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed max-w-md mx-auto">
                采用高温真空杀菌技术，杀灭微生物后即时密封，无需防腐剂也能在常温下保存 365 天，完整锁住营养与风味。
              </p>
              <p className="text-xs text-muted-foreground mt-2 max-w-md mx-auto">
                High-temperature vacuum sterilization eliminates microorganisms before instant sealing, allowing 365-day room-temperature storage without preservatives while preserving nutrients and flavor.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
