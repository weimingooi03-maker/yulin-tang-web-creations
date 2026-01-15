import { Sparkles, Heart, Shield, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Sparkles,
    titleZh: "抗衰老",
    titleEn: "Anti-Aging",
    descZh: "促进皮肤弹性，减少细纹和皱纹",
    descEn: "Promotes skin elasticity, reduces fine lines and wrinkles",
  },
  {
    icon: Heart,
    titleZh: "关节健康",
    titleEn: "Joint Health",
    descZh: "支持关节灵活性，缓解关节不适",
    descEn: "Supports joint flexibility and reduces discomfort",
  },
  {
    icon: Shield,
    titleZh: "强化骨骼",
    titleEn: "Bone Strength",
    descZh: "增强骨密度，预防骨质疏松",
    descEn: "Enhances bone density and prevents osteoporosis",
  },
  {
    icon: Droplets,
    titleZh: "深层补水",
    titleEn: "Deep Hydration",
    descZh: "锁住肌肤水分，打造水润光泽",
    descEn: "Locks in moisture for hydrated, glowing skin",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            产品功效 Benefits
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            魚鱗胶原蛋白富含多种氨基酸，为您的健康与美丽提供全方位呵护
            <br />
            <span className="text-sm">
              Rich in amino acids, our fish scales collagen provides comprehensive care for your health and beauty
            </span>
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {benefit.titleZh}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {benefit.titleEn}
                </p>
                <p className="text-muted-foreground text-sm">
                  {benefit.descZh}
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  {benefit.descEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
