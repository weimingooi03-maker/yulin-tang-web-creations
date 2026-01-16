import { Sparkles, Heart, Shield, Droplets, Bone, Coffee, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import eatingMethod from "@/assets/eating-method.png";
import review1 from "@/assets/review-1.jpeg";
import review2 from "@/assets/review-2.jpeg";
import review3 from "@/assets/review-3.jpeg";
import gmpLogo from "@/assets/gmp-logo.png";
import mestiLogo from "@/assets/mesti-logo.png";
import whatIsFishJellyEn from "@/assets/what-is-fish-jelly-en.png";
import tasteProfile from "@/assets/taste-profile.jpeg";
import whyChoose1 from "@/assets/why-choose-1.jpeg";
import whyChoose2 from "@/assets/why-choose-2.jpeg";
import whyChoose3 from "@/assets/why-choose-3.png";
import whenToTakeCn from "@/assets/when-to-take-cn.png";
import whenToTakeEn from "@/assets/when-to-take-en.png";
import sterilizationMachine from "@/assets/sterilization-machine.jpeg";


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
];

// Animated Benefit Cards Component
const BenefitCards = ({ benefits }: { benefits: typeof import("lucide-react") extends { Heart: infer T } ? { icon: T; titleZh: string; titleEn: string; descZh: string; descEn: string }[] : never }) => {
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
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {benefits.map((benefit, index) => (
        <Card 
          key={index} 
          className={`group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card hover:-translate-y-2 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
            transitionProperty: "all",
            transitionDuration: "500ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <benefit.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
              {benefit.titleZh}
            </h3>
            <p className="text-lg text-primary font-semibold mb-4">
              {benefit.titleEn}
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              {benefit.descZh}
            </p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {benefit.descEn}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        
        {/* What is Fish Scale Jelly Image */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={whatIsFishJellyEn} 
                alt="What is Fish Scale Jelly? - Natural beauty jelly made by slowly simmering fish scale collagen"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Product Benefits */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 tracking-wide">
            产品功效
          </h2>
          <p className="text-xl md:text-2xl font-serif text-primary mb-4">Benefits</p>
          <div className="w-32 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            魚鱗堂深海鱼鳞胶原蛋白冻，采用100%天然深海鱼鳞萃取，富含优质胶原蛋白，
            专为关节健康与美容养颜设计
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mt-3 leading-relaxed">
            YULIN TANG Deep Sea Collagen Jelly, extracted from 100% natural deep sea fish scales, 
            rich in premium collagen, designed for joint health and beauty
          </p>
        </div>
        
        {/* Benefits Cards */}
        <BenefitCards benefits={benefits} />

        {/* Taste Profile Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-4">
            产品口味
          </h3>
          <p className="text-xl text-primary font-semibold text-center mb-10">Taste Profile</p>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={tasteProfile} 
                alt="Taste Profile - 50% Red Date, 40% Longan, 10% Pandan, 0% Fishy"
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
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-4">
            食用方法
          </h3>
          <p className="text-xl text-primary font-semibold text-center mb-10">How to Enjoy</p>
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
            <div className="grid md:grid-cols-2 gap-4 mt-8">
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
        <div className="bg-card rounded-3xl p-10 mb-16 border border-border/50 shadow-lg">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-2">
            为什么选择魚鱗堂？
          </h3>
          <p className="text-xl text-primary font-semibold text-center mb-3">Why Choose Us?</p>
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold px-6 py-3 rounded-full text-xl shadow-lg animate-pulse">
              <Sparkles className="w-6 h-6" />
              <span>每瓶含 <span className="text-2xl">7500mg</span> 胶原蛋白</span>
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
          
          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={whyChoose1} 
                alt="食材可以帮助什么 - Ingredients Benefits"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={whyChoose2} 
                alt="3种必需的氨基酸 - Essential Amino Acids"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={whyChoose3} 
                alt="低糖健康 - Low Sugar Healthy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Vacuum Sterilization Technology */}
          <div className="bg-secondary/30 rounded-2xl p-8 border border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={sterilizationMachine} 
                  alt="魚鱗堂真空杀菌设备 - Vacuum Sterilization Equipment"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🔬</span>
                  <h4 className="text-2xl font-serif font-bold text-foreground">真空杀菌技术</h4>
                </div>
                <p className="text-lg text-primary font-semibold mb-4">Vacuum Sterilization Technology</p>
                <p className="text-base text-foreground/90 leading-relaxed mb-4">
                  采用与国际食品厂一致的<span className="font-bold text-primary">高温高压杀菌技术</span>（类似罐装燕窝饮品的处理方式）
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">1️⃣</span>
                    <div>
                      <p className="font-bold text-foreground">高温高压杀菌</p>
                      <p className="text-sm text-muted-foreground">彻底消灭所有细菌和微生物</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">2️⃣</span>
                    <div>
                      <p className="font-bold text-foreground">真空密封包装</p>
                      <p className="text-sm text-muted-foreground">无菌环境隔绝外部细菌</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                  <p className="text-base font-bold text-foreground text-center">
                    ✨ 无需防腐剂，安全保存
                  </p>
                  <p className="text-sm text-muted-foreground text-center mt-1">
                    No preservatives needed, safe storage guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section - Clean Logos Only */}
        <div className="bg-card rounded-3xl p-10 mb-16 border border-border/50 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center mb-3">
            品质认证
          </h3>
          <p className="text-lg text-primary font-semibold text-center mb-4">Quality Certifications</p>
          <p className="text-base text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Certified by Ministry of Health Malaysia (Kementerian Kesihatan Malaysia)
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {/* GMP Logo */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 md:w-52 md:h-52 flex items-center justify-center">
                <img 
                  src={gmpLogo} 
                  alt="GMP Food Safety Malaysia - Kementerian Kesihatan"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Good Manufacturing Practice
              </p>
            </div>
            
            {/* MeSTI Logo */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-32 md:w-64 md:h-40 flex items-center justify-center">
                <img 
                  src={mestiLogo} 
                  alt="MeSTI - Makanan Selamat Tanggungjawab Industri"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Food Safety Industry Responsibility
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews with Real Images */}
        <div className="mt-20">
          <div className="flex flex-col items-center justify-center gap-3 mb-12">
            <Users className="w-10 h-10 text-primary" />
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              顾客好评
            </h3>
            <p className="text-xl text-primary font-semibold">Customer Reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={review1} 
                alt="Customer Review - Joint Pain Relief Testimonial"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={review2} 
                alt="Customer Review - Years of Practice Testimonial"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={review3} 
                alt="Customer Review - Before and After Skin Improvement"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
