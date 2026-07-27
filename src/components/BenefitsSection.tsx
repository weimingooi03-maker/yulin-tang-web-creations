import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ShieldCheck, Sparkles, Bone, Heart, Leaf, Moon, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import eatingMethod from "@/assets/eating-method-3ways.png";
import reviewFishy from "@/assets/review-fishy-taste.jpeg.asset.json";
import reviewKnees from "@/assets/review-knees-comfort.jpeg.asset.json";
import reviewWalk from "@/assets/review-walk-longer.jpeg.asset.json";
import reviewSkinVisible from "@/assets/review-skin-visible.jpeg.asset.json";
import reviewSkinAcne from "@/assets/review-skin-acne.jpeg.asset.json";
import reviewOverall from "@/assets/review-overall.jpeg.asset.json";
import tasteProfile from "@/assets/taste-profile.png";
import bestTimeToTake from "@/assets/best-time-to-take.png";
import benefitJointBone from "@/assets/benefit-joint-bone.png";
import benefitBeautyComplexion from "@/assets/benefit-beauty-complexion.png";
import naturalIngredients from "@/assets/natural-ingredients.png";
import sterilizationSafety from "@/assets/sterilization-safety.png.asset.json";

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

const reviews = [
  {
    img: reviewFishy.url,
    alt: "Customer Review - No fishy taste",
    name: "Taste Approved",
    quote: "It doesn't taste fishy, and it's not overly sweet.",
  },
  {
    img: reviewKnees.url,
    alt: "Customer Review - Knees feel more comfortable after 2 weeks",
    name: "Mom · 2 Weeks",
    quote: "Knees feel more comfortable and walking is much smoother!",
  },
  {
    img: reviewWalk.url,
    alt: "Customer Review - Can walk longer without resting",
    name: "Mom · 2 Weeks",
    quote: "She can walk much longer without needing to rest.",
  },
  {
    img: reviewSkinVisible.url,
    alt: "Customer Review - Visible skin changes, healthier glow",
    name: "Real Result",
    quote: "My skin has become more stable, I feel more confident every day!",
  },
  {
    img: reviewSkinAcne.url,
    alt: "Customer Review - Soothes redness and acne",
    name: "Skin Recovery",
    quote: "Soothes redness & acne, skin looks smooth and radiant.",
  },
  {
    img: reviewOverall.url,
    alt: "Customer Review - Joint & skin improvement",
    name: "Loyal Customer",
    quote: "Joint pain improved, skin smoother — daily life feels easier!",
  },
];

const BenefitsSection = () => {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }));

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
              精选三种天然食材 · Three Natural Ingredients
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50 mb-6">
              <img
                src={naturalIngredients}
                alt="天然食材功效图 - Natural Ingredients Benefits: Longan, Red Dates, Pandan"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  icon: Moon,
                  zh: "龙眼干",
                  en: "Dried Longan",
                  benefitZh: "补益心脾，养血安神",
                  benefitEn: "Nourishes blood & calms the mind",
                  color: "bg-amber-100 text-amber-700",
                },
                {
                  icon: Heart,
                  zh: "红枣",
                  en: "Red Dates",
                  benefitZh: "补中益气，养血健脾",
                  benefitEn: "Boosts Qi & nourishes blood",
                  color: "bg-red-100 text-red-700",
                },
                {
                  icon: Leaf,
                  zh: "斑斓",
                  en: "Pandan",
                  benefitZh: "清香怡人，帮助消化",
                  benefitEn: "Refreshing & aids digestion",
                  color: "bg-green-100 text-green-700",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 bg-card rounded-2xl border border-border/50 shadow-sm text-center"
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full flex items-center justify-center mb-2 ${item.color}`}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-foreground leading-tight">
                    {item.zh}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-primary font-semibold uppercase tracking-wide mb-1">
                    {item.en}
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-snug">
                    {item.benefitZh}
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-snug">
                    {item.benefitEn}
                  </p>
                </div>
              ))}
            </div>
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
          <div className="text-center mb-4">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
              顾客好评
            </h3>
            <p className="text-lg text-primary font-semibold">Customer Reviews</p>
            <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium animate-pulse">
              <ChevronLeft className="w-4 h-4" />
              <span>左右滑动查看更多 · Swipe to see more</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="max-w-6xl mx-auto px-6 sm:px-10"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((r, i) => (
                <CarouselItem key={i} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-card h-full hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={r.img}
                      alt={r.alt}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={800}
                      sizes="(max-width: 768px) 45vw, (max-width: 1200px) 30vw, 280px"
                      className="w-full h-auto aspect-square object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm font-bold text-foreground mb-1">{r.name}</p>
                      <p className="text-xs text-muted-foreground">"{r.quote}"</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-2" />
            <CarouselNext className="hidden sm:flex -right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
