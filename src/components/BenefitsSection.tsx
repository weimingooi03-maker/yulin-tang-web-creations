import { Sparkles, Heart, Shield, Droplets, Bone, Coffee, Star, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroProduct from "@/assets/hero-product.jpeg";
import product1 from "@/assets/product-1.jpeg";
import eatingMethod from "@/assets/eating-method.png";
import lowSugar from "@/assets/low-sugar.png";

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

const reviews = [
  {
    name: "李女士",
    location: "🇲🇾 吉隆坡",
    rating: 5,
    content: "吃了两个月，关节疼痛明显减轻了，皮肤也变得更有弹性！",
    contentEn: "After 2 months, my joint pain significantly reduced and my skin became more elastic!",
  },
  {
    name: "陈先生",
    location: "🇸🇬 新加坡",
    rating: 5,
    content: "味道很好，冷藏后变成果冻更美味，每天期待吃！",
    contentEn: "Tastes great! Even better when chilled as jelly, I look forward to it every day!",
  },
  {
    name: "张阿姨",
    location: "🇲🇾 槟城",
    rating: 5,
    content: "给父母买的，他们说膝盖比以前灵活多了，很满意！",
    contentEn: "Bought for my parents, they said their knees are more flexible now. Very satisfied!",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            产品功效 Benefits
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            魚鱗堂深海鱼鳞胶原蛋白冻，采用100%天然深海鱼鳞萃取，富含优质胶原蛋白，
            专为关节健康与美容养颜设计
            <br />
            <span className="text-base md:text-lg">
              YULIN TANG Deep Sea Collagen Jelly, extracted from 100% natural deep sea fish scales, 
              rich in premium collagen, designed for joint health and beauty
            </span>
          </p>
        </div>
        
        {/* Benefits Cards - Product Benefits FIRST */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="w-18 h-18 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-9 h-9 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {benefit.titleZh}
                </h3>
                <p className="text-base text-primary font-medium mb-3">
                  {benefit.titleEn}
                </p>
                <p className="text-base text-muted-foreground">
                  {benefit.descZh}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {benefit.descEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Why Choose Us */}
        <div className="bg-card rounded-2xl p-8 mb-12 border border-border/50">
          <h3 className="text-3xl font-serif font-bold text-foreground text-center mb-8">
            为什么选择魚鱗堂？ Why Choose Us?
          </h3>
          
          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={heroProduct} 
                alt="魚鱗堂产品"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={product1} 
                alt="产品展示"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={lowSugar} 
                alt="低糖健康"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-lg text-foreground font-bold">纯天然鱼鳞萃取</p>
              <p className="text-base text-muted-foreground">Pure Natural Fish Scale Extract</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary mb-2">不是粉</p>
              <p className="text-lg text-foreground font-bold">不是粉，不是胶囊</p>
              <p className="text-base text-muted-foreground">Not Powder, Not Capsules</p>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <p className="text-lg text-foreground font-bold">马来西亚MESTI & GMP认证</p>
              <p className="text-base text-muted-foreground">Malaysia MESTI & GMP Certified</p>
            </div>
          </div>
        </div>

        {/* How to Enjoy Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-foreground text-center mb-8">
            食用方法 How to Enjoy
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={eatingMethod} 
                alt="食用方法 - 直接饮用或冷藏成果冻"
                className="w-full h-auto"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6 text-center">
              <div className="p-6 bg-card rounded-xl border border-border/50">
                <h4 className="text-2xl font-bold text-foreground mb-2">水状直接饮用</h4>
                <p className="text-lg text-primary font-medium mb-2">Drink Directly</p>
                <p className="text-base text-muted-foreground">
                  开封即饮，口感顺滑，淡淡清香，方便快捷
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border/50">
                <h4 className="text-2xl font-bold text-foreground mb-2">冷藏成果冻</h4>
                <p className="text-lg text-primary font-medium mb-2">Refrigerate as Jelly</p>
                <p className="text-base text-muted-foreground">
                  放入冰箱冷藏几小时，可享用果冻口感，清凉爽口
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-serif font-bold text-foreground">
              顾客好评 Customer Reviews
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base text-foreground mb-3 italic">
                    "{review.content}"
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    "{review.contentEn}"
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t border-border">
                    <span className="text-base font-bold text-foreground">{review.name}</span>
                    <span className="text-base text-muted-foreground">{review.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
