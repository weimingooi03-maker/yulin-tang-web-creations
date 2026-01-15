import { Sparkles, Heart, Shield, Droplets, Bone, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Heart,
    titleZh: "缓解关节疼痛",
    titleEn: "Joint Pain Relief",
    descZh: "补充关节软骨所需胶原蛋白，有效缓解关节疼痛和僵硬，恢复关节灵活性",
    descEn: "Replenishes cartilage collagen, effectively relieves joint pain and stiffness, restores mobility",
  },
  {
    icon: Bone,
    titleZh: "强化骨骼",
    titleEn: "Bone Strength",
    descZh: "增强骨密度，预防骨质疏松，特别适合中老年人群保健",
    descEn: "Enhances bone density, prevents osteoporosis, ideal for middle-aged and elderly health",
  },
  {
    icon: Sparkles,
    titleZh: "美容养颜",
    titleEn: "Beauty & Anti-Aging",
    descZh: "促进皮肤弹性和光泽，减少细纹和皱纹，由内而外焕发青春",
    descEn: "Promotes skin elasticity and radiance, reduces fine lines, rejuvenates from within",
  },
  {
    icon: Droplets,
    titleZh: "深层补水",
    titleEn: "Deep Hydration",
    descZh: "锁住肌肤水分，打造水润光泽肌肤，改善干燥暗沉",
    descEn: "Locks in moisture for hydrated, glowing skin, improves dryness and dullness",
  },
  {
    icon: Shield,
    titleZh: "头发指甲健康",
    titleEn: "Hair & Nail Health",
    descZh: "促进头发和指甲生长，使其更加强韧有光泽",
    descEn: "Promotes healthy hair and nail growth, making them stronger and shinier",
  },
  {
    icon: Coffee,
    titleZh: "便捷食用",
    titleEn: "Easy Consumption",
    descZh: "可直接饮用或放冰箱变成美味果冻，方便又好吃",
    descEn: "Drink directly or refrigerate for delicious jelly, convenient and tasty",
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
          <p className="text-muted-foreground max-w-3xl mx-auto">
            魚鱗堂深海鱼鳞胶原蛋白冻，采用100%天然深海鱼鳞萃取，富含优质胶原蛋白，
            专为关节健康与美容养颜设计
            <br />
            <span className="text-sm">
              YULIN TANG Deep Sea Collagen Jelly, extracted from 100% natural deep sea fish scales, 
              rich in premium collagen, designed for joint health and beauty
            </span>
          </p>
        </div>
        
        {/* Why Choose Us */}
        <div className="bg-card rounded-2xl p-8 mb-12 border border-border/50">
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-6">
            为什么选择魚鱗堂？ Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-primary mb-2">100%</p>
              <p className="text-foreground font-medium">纯天然鱼鳞萃取</p>
              <p className="text-sm text-muted-foreground">Pure Natural Fish Scale Extract</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary mb-2">不是粉</p>
              <p className="text-foreground font-medium">不是粉，不是胶囊</p>
              <p className="text-sm text-muted-foreground">Not Powder, Not Capsules</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary mb-2">KKM</p>
              <p className="text-foreground font-medium">马来西亚卫生部认证</p>
              <p className="text-sm text-muted-foreground">Malaysia MOH Certified</p>
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-muted-foreground text-xs mt-2">
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
