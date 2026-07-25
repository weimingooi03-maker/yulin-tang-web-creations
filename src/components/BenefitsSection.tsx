import { ShieldCheck, Sparkles, Bone, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import eatingMethod from "@/assets/eating-method.png";
import review1 from "@/assets/review-1.jpeg";
import review2 from "@/assets/review-2.jpeg";
import review3 from "@/assets/review-3.jpeg";
import review4 from "@/assets/review-4.jpeg";
import tasteProfile from "@/assets/taste-profile.png";
import whenToTakeCn from "@/assets/when-to-take-cn.png";
import whenToTakeEn from "@/assets/when-to-take-en.png";
import benefitJointBone from "@/assets/benefit-joint-bone.png";
import benefitBeautyComplexion from "@/assets/benefit-beauty-complexion.png";

const benefitVisuals = [
  {
    image: benefitJointBone,
    alt: "缓解关节疼痛 强化骨骼 - Relieve Joint Pain & Strengthen Bones",
    highlights: [
      {
        icon: Heart,
        titleZh: "缓解关节疼痛",
        titleEn: "Relieve Joint Pain",
        descZh: "舒缓僵硬酸痛",
        descEn: "Eases stiffness & soreness",
      },
      {
        icon: Bone,
        titleZh: "强化骨骼密度",
        titleEn: "Strengthen Bones",
        descZh: "骨骼更强韧有力",
        descEn: "Stronger, denser bones",
      },
    ],
  },
  {
    image: benefitBeautyComplexion,
    alt: "养颜美容 改变气色 - Beautify Skin & Improve Complexion",
    highlights: [
      {
        icon: Sparkles,
        titleZh: "养颜美容",
        titleEn: "Beautify Skin",
        descZh: "肌肤紧致水润有弹性",
        descEn: "Firmer, dewy, elastic skin",
      },
      {
        icon: ShieldCheck,
        titleZh: "改变气色",
        titleEn: "Improve Complexion",
        descZh: "唤醒自然红润光泽",
        descEn: "Naturally rosy, healthy glow",
      },
    ],
  },
];

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
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/80">
            一瓶 7500mg 深海鱼鳞胶原，四大核心功效，由内而外全面呵护
            <span className="block text-sm text-muted-foreground mt-1">
              7,500mg marine collagen per bottle — four core benefits that care for you inside out
            </span>
          </p>
        </div>

        {/* Benefit Visual Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {benefitVisuals.map((item, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <CardContent className="p-6 space-y-4">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                      <h.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-foreground leading-tight">
                        {h.titleZh}
                        <span className="ml-2 text-sm text-primary font-semibold uppercase tracking-wide">
                          {h.titleEn}
                        </span>
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed mt-1">
                        {h.descZh}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{h.descEn}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>


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
                alt="Taste Profile - 50% Longan, 40% Red Dates, 10% Pandan, 0% Fishy Taste"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
              <div className="p-4 bg-card rounded-2xl border border-border/50 shadow-md">
                <p className="text-2xl font-bold text-primary mb-1">50%</p>
                <p className="text-lg font-bold text-foreground">龙眼味</p>
                <p className="text-sm text-muted-foreground">Longan</p>
              </div>
              <div className="p-4 bg-card rounded-2xl border border-border/50 shadow-md">
                <p className="text-2xl font-bold text-primary mb-1">40%</p>
                <p className="text-lg font-bold text-foreground">红枣味</p>
                <p className="text-sm text-muted-foreground">Red Dates</p>
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
            {/* 100% Refund Guarantee */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/5 via-card to-primary/5 p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-serif font-bold text-foreground mb-1">
                    有腥味，100% 退款
                  </p>
                  <p className="text-base md:text-lg text-primary font-semibold">
                    100% Refund if Fishy Taste
                  </p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
                我们对口感充满信心。若开瓶后品尝到任何鱼腥味，请联系客服全额退款。
                <span className="block sm:inline"> We stand by our taste. Contact us for a full refund if you detect any fishy flavor.</span>
              </p>
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
