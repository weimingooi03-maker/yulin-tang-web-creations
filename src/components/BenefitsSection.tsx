import { Sparkles, Heart, Shield, Droplets, Bone, Coffee, Users, ShieldCheck, Calendar, Leaf } from "lucide-react";
import benefitJoint from "@/assets/benefit-joint.png";
import benefitBone from "@/assets/benefit-bone.png";
import benefitBeauty from "@/assets/benefit-beauty.png";
import benefitHydration from "@/assets/benefit-hydration.png";
import benefitHairNail from "@/assets/benefit-hair-nail.png";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import eatingMethod from "@/assets/eating-method.png";
import review1 from "@/assets/review-1.jpeg";
import review2 from "@/assets/review-2.jpeg";
import review3 from "@/assets/review-3.jpeg";
import review4 from "@/assets/review-4.jpeg";
import whatIsFishJellyEn from "@/assets/what-is-fish-jelly-en.png";
import tasteProfile from "@/assets/taste-profile.jpeg";
import whyChoose1 from "@/assets/why-choose-1.jpeg";
import whyChoose2 from "@/assets/why-choose-2.jpeg";
import whyChoose3 from "@/assets/why-choose-3.png";
import whenToTakeCn from "@/assets/when-to-take-cn.png";
import whenToTakeEn from "@/assets/when-to-take-en.png";



const benefits = [
  {
    icon: Heart,
    image: benefitJoint,
    titleZh: "缓解关节疼痛",
    titleEn: "Joint Pain Relief",
    descZh: "补充关节软骨所需胶原蛋白，有效缓解关节疼痛和僵硬，恢复关节灵活性",
    descEn: "Replenishes cartilage collagen, effectively relieves joint pain and stiffness, restores mobility",
  },
  {
    icon: Bone,
    image: benefitBone,
    titleZh: "强化骨骼",
    titleEn: "Bone Strength",
    descZh: "增强骨密度，预防骨质疏松，特别适合中老年人群保健",
    descEn: "Enhances bone density, prevents osteoporosis, ideal for middle-aged and elderly health",
  },
  {
    icon: Sparkles,
    image: benefitBeauty,
    titleZh: "美容养颜",
    titleEn: "Beauty & Anti-Aging",
    descZh: "促进皮肤弹性和光泽，减少细纹和皱纹，由内而外焕发青春",
    descEn: "Promotes skin elasticity and radiance, reduces fine lines, rejuvenates from within",
  },
  {
    icon: Droplets,
    image: benefitHydration,
    titleZh: "深层补水",
    titleEn: "Deep Hydration",
    descZh: "锁住肌肤水分，打造水润光泽肌肤，改善干燥暗沉",
    descEn: "Locks in moisture for hydrated, glowing skin, improves dryness and dullness",
  },
  {
    icon: Shield,
    image: benefitHairNail,
    titleZh: "头发指甲健康",
    titleEn: "Hair & Nail Health",
    descZh: "促进头发和指甲生长，使其更加强韧有光泽",
    descEn: "Promotes healthy hair and nail growth, making them stronger and shinier",
  },
];

// Animated Benefit Cards Component
const BenefitCards = ({ benefits }: { benefits: { icon: any; image: string; titleZh: string; titleEn: string; descZh: string; descEn: string }[] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {benefits.map((benefit, index) => (
        <Card 
          key={index} 
          className={`group hover:shadow-lg transition-all duration-300 border-border/50 bg-card hover:-translate-y-1 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ 
            transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
            transitionProperty: "all",
            transitionDuration: "500ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-1">
              {benefit.titleZh}
            </h3>
            <p className="text-sm text-primary font-semibold mb-2">
              {benefit.titleEn}
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {benefit.descZh}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Product Benefits */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            产品功效
          </h2>
          <p className="text-lg text-primary font-semibold mb-3">Benefits</p>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        
        {/* Benefits Cards */}
        <BenefitCards benefits={benefits} />

        {/* Taste Profile Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center mb-3">
            产品口味
          </h3>
          <p className="text-lg text-primary font-semibold text-center mb-6">Taste Profile</p>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={tasteProfile} 
                alt="Taste Profile - 50% Red Date, 40% Longan, 10% Pandan, 0% Fishy"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-card rounded-2xl border border-border/50 shadow-md">
                <p className="text-2xl font-bold text-primary mb-1">50%</p>
                <p className="text-lg font-bold text-foreground">红枣味</p>
                <p className="text-sm text-muted-foreground">Red Date</p>
              </div>
              <div className="p-4 bg-card rounded-2xl border border-border/50 shadow-md">
                <p className="text-2xl font-bold text-primary mb-1">40%</p>
                <p className="text-lg font-bold text-foreground">桂圆味</p>
                <p className="text-sm text-muted-foreground">Longan</p>
              </div>
              <div className="p-4 bg-card rounded-2xl border border-border/50 shadow-md">
                <p className="text-2xl font-bold text-primary mb-1">10%</p>
                <p className="text-lg font-bold text-foreground">斑斓味</p>
                <p className="text-sm text-muted-foreground">Pandan</p>
              </div>
              <div className="p-4 bg-card rounded-2xl border border-border/50 shadow-md">
                <p className="text-2xl font-bold text-primary mb-1">0%</p>
                <p className="text-lg font-bold text-foreground">鱼腥味</p>
                <p className="text-sm text-muted-foreground">No Fishy Taste</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Enjoy Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center mb-3">
            食用方法
          </h3>
          <p className="text-lg text-primary font-semibold text-center mb-6">How to Enjoy</p>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={eatingMethod} 
                alt="How to Enjoy - Drink directly or refrigerate as jelly"
                className="w-full h-auto"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8 text-center">
              <div className="p-8 bg-card rounded-2xl border border-border/50 shadow-md">
                <h4 className="text-2xl font-serif font-bold text-foreground mb-3">水状直接饮用</h4>
                <p className="text-lg text-primary font-semibold mb-3">Drink Directly (Liquid)</p>
                <p className="text-base text-foreground/80 leading-relaxed">
                  开封即饮，口感顺滑，淡淡清香，方便快捷
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Ready to drink, smooth texture with a light aroma, quick and convenient
                </p>
              </div>
              <div className="p-8 bg-card rounded-2xl border border-border/50 shadow-md">
                <h4 className="text-2xl font-serif font-bold text-foreground mb-3">冷藏成果冻</h4>
                <p className="text-lg text-primary font-semibold mb-3">Refrigerate as Jelly</p>
                <p className="text-base text-foreground/80 leading-relaxed">
                  放入冰箱冷藏几小时，可享用果冻口感，清凉爽口
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Refrigerate for a few hours for a refreshing jelly treat, cool and delicious
                </p>
              </div>
            </div>
            
            {/* When to Take Images */}
            <div className="grid md:grid-cols-2 gap-2 mt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={whenToTakeCn} 
                  alt="什么时候吃效果最佳 - 早上空腹前或晚上睡前"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={whenToTakeEn} 
                  alt="When to Take - Before Breakfast or Before Bed"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us */}
        <div className="bg-card rounded-2xl p-8 mb-14 border border-border/50 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center mb-1">
            为什么选择我们
          </h3>
          <p className="text-lg text-primary font-semibold text-center mb-6">Why Choose Us</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 max-w-4xl mx-auto">
            <div className="bg-card border border-primary/30 rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div className="text-xl font-bold text-primary">7500mg</div>
              <div className="text-xs font-medium text-foreground">胶原蛋白 Collagen</div>
            </div>
            <div className="bg-card border border-primary/30 rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <div className="text-sm font-bold text-foreground">天然低糖</div>
              <div className="text-xs text-muted-foreground">Low Sugar</div>
            </div>
            <div className="bg-card border border-primary/30 rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <div className="text-sm font-bold text-foreground">无添加糖</div>
              <div className="text-xs text-muted-foreground">No Added Sugar</div>
            </div>
            <div className="bg-card border border-primary/30 rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <div className="text-sm font-bold text-foreground">无重金属</div>
              <div className="text-xs text-muted-foreground">Heavy Metal Free</div>
            </div>
            <div className="bg-card border border-primary/30 rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <div className="text-sm font-bold text-foreground">无防腐剂</div>
              <div className="text-xs text-muted-foreground">Preservative Free</div>
            </div>
            <div className="bg-card border border-primary/30 rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              <div className="text-sm font-bold text-foreground">保质期1年+</div>
              <div className="text-xs text-muted-foreground">1+ Year Shelf Life</div>
            </div>
          </div>
          {/* Images Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src={whyChoose1} 
                  alt="食材可以帮助什么 - Ingredients Benefits"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src={whyChoose2} 
                  alt="3种必需的氨基酸 - Essential Amino Acids"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">3 Essential Amino Acids</p>
            </div>
          </div>


        {/* Customer Reviews */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
              顾客好评
            </h3>
            <p className="text-lg text-primary font-semibold">Customer Reviews</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-card">
              <img 
                src={review1} 
                alt="Customer Review - Joint Pain Relief"
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm font-bold text-foreground mb-1">陈女士 · 吉隆坡</p>
                <p className="text-xs text-muted-foreground">"喝了两个月，膝盖明显不那么痛了！"</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-card">
              <img 
                src={review2} 
                alt="Customer Review - Repeat Purchase"
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm font-bold text-foreground mb-1">林阿姨 · 新加坡</p>
                <p className="text-xs text-muted-foreground">"买给妈妈喝，已经回购第三次！"</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-card">
              <img 
                src={review3} 
                alt="Customer Review - Skin Improvement"
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm font-bold text-foreground mb-1">黄小姐 · 槟城</p>
                <p className="text-xs text-muted-foreground">"皮肤更有弹性，朋友都问用了什么保养品！"</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-card">
              <img 
                src={review4} 
                alt="Customer Review - Knee Pain Improvement"
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm font-bold text-foreground mb-1">顾客好评</p>
                <p className="text-xs text-muted-foreground">"妈妈吃了两个星期后，膝盖感觉舒服多了，走路也更顺畅了"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
