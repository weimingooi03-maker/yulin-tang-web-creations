import { ShieldCheck, Sparkles, Bone, Heart, Leaf, Moon, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import eatingMethod from "@/assets/eating-method-3ways.png";
import review1 from "@/assets/review-1.jpeg";
import review3 from "@/assets/review-3.jpeg";
import review2Asset from "@/assets/review-aunt-lin-sg.jpeg.asset.json";
import review4Asset from "@/assets/review-beauty-before-after.jpeg.asset.json";
import tasteProfile from "@/assets/taste-profile.png";
import bestTimeToTake from "@/assets/best-time-to-take.png";
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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            产品功效
          </h2>
          <p className="text-base text-primary font-semibold tracking-wide">Benefits</p>
        </div>

        {/* Benefit Visual Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {benefitVisuals.map((item, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden border-border/50 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5 space-y-3">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <h.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-foreground leading-tight">
                        {h.titleZh}
                        <span className="ml-1.5 text-xs text-primary font-semibold uppercase tracking-wide">
                          {h.titleEn}
                        </span>
                      </h4>
                      <p className="text-sm text-foreground/80 leading-snug">
                        {h.descZh}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Natural Ingredients */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
              天然食材
            </h3>
            <p className="text-lg text-primary font-semibold">Natural Ingredients</p>
            <p className="text-sm text-muted-foreground mt-1">
              精选四种核心成分 · Four Key Ingredients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              {
                icon: Droplets,
                zh: "深海鱼鳞",
                en: "Fish Scales",
                benefitZh: "7500mg 胶原蛋白",
                benefitEn: "7500mg Collagen",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Heart,
                zh: "红枣",
                en: "Red Dates",
                benefitZh: "补血养颜",
                benefitEn: "Nourishes Blood",
                color: "bg-red-100 text-red-600",
              },
              {
                icon: Moon,
                zh: "龙眼",
                en: "Longan",
                benefitZh: "安神助眠",
                benefitEn: "Calms & Aids Sleep",
                color: "bg-amber-100 text-amber-600",
              },
              {
                icon: Leaf,
                zh: "斑斓",
                en: "Pandan",
                benefitZh: "清香解腻",
                benefitEn: "Refreshing Aroma",
                color: "bg-green-100 text-green-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-card rounded-2xl border border-border/50 shadow-sm text-center"
              >
                <div
                  className={`w-11 h-11 mx-auto rounded-full flex items-center justify-center mb-2 ${item.color}`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-foreground leading-tight">
                  {item.zh}
                </h4>
                <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1.5">
                  {item.en}
                </p>
                <p className="text-sm text-foreground/90 font-medium">
                  {item.benefitZh}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {item.benefitEn}
                </p>
              </div>
            ))}
          </div>
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
                alt="3 种食用方法 - 3 Ways to Enjoy YULIN TANG Fish Scale Collagen Jelly"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
              <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-md">
                <h4 className="text-xl font-serif font-bold text-foreground mb-2">直接开瓶食用</h4>
                <p className="text-base text-primary font-semibold mb-3">Enjoy Directly</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  开瓶即饮，方便快捷
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Open and drink, convenient and ready to enjoy.
                </p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-md">
                <h4 className="text-xl font-serif font-bold text-foreground mb-2">热水泡罐子</h4>
                <p className="text-base text-primary font-semibold mb-3">Pour with Hot Water</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  倒入热水，温润好吸收
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Pour in hot water, warm and nourishing collagen drink.
                </p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-md">
                <h4 className="text-xl font-serif font-bold text-foreground mb-2">放冰箱果冻口感</h4>
                <p className="text-base text-primary font-semibold mb-3">Chill for Jelly Texture</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  冷藏后Q弹爽口
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Chill in the fridge for a bouncy, jelly-like texture.
                </p>
              </div>
            </div>
            
            {/* Best Time to Take */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  什么时候吃效果最佳？
                </h3>
                <p className="text-lg text-primary font-semibold">
                  Best Time to Enjoy for Maximum Results
                </p>
              </div>
              <div className="relative max-w-4xl mx-auto">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                  <img
                    src={bestTimeToTake}
                    alt="什么时候吃效果最佳 - 早上空腹前或晚上睡前一小时"
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
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
                <p className="text-sm font-bold text-foreground mb-1">Ms Tan · Kuala Lumpur</p>
                <p className="text-xs text-muted-foreground">"After two months, my knee pain has noticeably eased!"</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-card">
              <img 
                src={review2Asset.url} 
                alt="Customer Review - Mr Lim, mother's knee pain improved"
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm font-bold text-foreground mb-1">Mr Lim</p>
                <p className="text-xs text-muted-foreground">"After 12 days, my mum's knee pain eased and she can walk much more smoothly!"</p>
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
                <p className="text-sm font-bold text-foreground mb-1">Ms Ng</p>
                <p className="text-xs text-muted-foreground">"My skin feels more elastic. Friends keep asking what skincare I use!"</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-card">
              <img 
                src={review4Asset.url} 
                alt="Customer Review - Visible skin improvement before and after"
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm font-bold text-foreground mb-1">Real Result</p>
                <p className="text-xs text-muted-foreground">"Skin looks more even, fewer breakouts, and a natural healthy glow!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
