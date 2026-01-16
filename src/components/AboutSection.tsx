import { Heart, Users, Sparkles, Factory, FlaskConical, Leaf } from "lucide-react";

const milestones = [
  {
    icon: Heart,
    titleZh: "起源",
    titleEn: "Origin",
    descZh: "源于家人的爱",
    descEn: "Born from family love",
  },
  {
    icon: FlaskConical,
    titleZh: "化验",
    titleEn: "Lab Tested",
    descZh: "严格品质检测",
    descEn: "Strict quality testing",
  },
  {
    icon: Leaf,
    titleZh: "精选",
    titleEn: "Selected",
    descZh: "优质天然食材",
    descEn: "Premium ingredients",
  },
  {
    icon: Users,
    titleZh: "信赖",
    titleEn: "Trusted",
    descZh: "马新回头客",
    descEn: "MY & SG customers",
  },
  {
    icon: Sparkles,
    titleZh: "坚持",
    titleEn: "Dedication",
    descZh: "用心改良配方",
    descEn: "Perfecting our recipe",
  },
  {
    icon: Factory,
    titleZh: "升级",
    titleEn: "Upgrade",
    descZh: "食品级工厂生产",
    descEn: "Food-grade factory",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            关于魚鱗堂
          </h2>
          <p className="text-xl text-primary font-semibold mb-4">Our Story</p>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Brand Story - Chinese */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
            <div className="space-y-6 text-lg leading-relaxed">
              {/* Opening */}
              <p className="text-foreground/90">
                第一次知道鱼鳞冻，是因为<span className="text-primary font-semibold">爸爸买给妈妈喝</span>。
                那时只知道——它能补胶原蛋白，喝了连脚都不痛了。
              </p>

              {/* Discovery */}
              <p className="text-foreground/90">
                后来，我们自己试着熬煮，才发现这种好东西很少人知道。
                市面上虽然有人卖，但味道总觉得少了点什么。
              </p>

              {/* Inspiration */}
              <p className="text-foreground/90">
                有一次和伙伴回到他的渔村，他家人拿出住家式的鱼鳞冻给我们尝。
                我们忽然想：<span className="text-primary font-semibold italic">「如果我们能用更好的味道、更用心的方式做出来，是不是能让更多人受益？」</span>
              </p>

              {/* Journey */}
              <p className="text-foreground/90">
                于是<span className="font-serif font-bold text-foreground">魚鱗堂</span>开始了。从厨房一步步做起，
                一路聆听顾客反馈、慢慢改良。我们坚持<span className="text-primary font-semibold">精选优质食材</span>、
                进行<span className="text-primary font-semibold">严格化验检测</span>——毕竟是要卖给人吃的，
                当然要用更安全、更负责任的方式。
              </p>

              {/* Today */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-foreground font-medium">
                  今天，我们决定升级——用<span className="text-primary font-semibold">食品级工厂</span>来熬煮、真空杀菌。
                  配方与用料不变，只是为了让每一瓶都<span className="text-primary font-semibold">更安心食用</span>。
                  如今，魚鱗堂已拥有来自<span className="text-primary font-semibold">马来西亚和新加坡</span>的无数回头客与好评。
                </p>
              </div>
            </div>

            {/* Signature Chinese */}
            <div className="mt-8 pt-6 border-t border-border/30 text-center">
              <p className="text-muted-foreground italic">
                "从家人的需要开始，到让更多人受益。"
              </p>
              <p className="text-primary font-serif font-bold mt-4 text-xl">
                — 魚鱗堂团队
              </p>
            </div>
          </div>
        </div>

        {/* Brand Story - English */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
            <div className="space-y-6 text-lg leading-relaxed">
              {/* Opening */}
              <p className="text-foreground/90">
                Our first encounter with fish scale jelly was when <span className="text-primary font-semibold">Dad bought it for Mom</span>. 
                All we knew then was that it could replenish collagen — and after drinking it, even her leg pain disappeared.
              </p>

              {/* Discovery */}
              <p className="text-foreground/90">
                Later, we tried making it ourselves and discovered that very few people knew about this wonderful product. 
                Although some sellers existed in the market, the taste always seemed to be missing something.
              </p>

              {/* Inspiration */}
              <p className="text-foreground/90">
                One day, while visiting a partner's fishing village, his family offered us their homemade fish scale jelly. 
                We thought: <span className="text-primary font-semibold italic">"If we could make this with better taste and more care, couldn't we help more people benefit from it?"</span>
              </p>

              {/* Journey */}
              <p className="text-foreground/90">
                And so <span className="font-serif font-bold text-foreground">YULIN TANG</span> was born. Starting from our kitchen, 
                step by step, listening to customer feedback, and continuously improving. We insist on <span className="text-primary font-semibold">carefully selected premium ingredients</span> and 
                <span className="text-primary font-semibold"> rigorous laboratory testing</span> — after all, this is food for people, 
                so we must do it the safest and most responsible way.
              </p>

              {/* Today */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-foreground font-medium">
                  Today, we've upgraded to <span className="text-primary font-semibold">food-grade factory production</span> with vacuum sterilization. 
                  Our formula and ingredients remain unchanged — we simply want every bottle to be <span className="text-primary font-semibold">safer to consume</span>. 
                  Now, YULIN TANG proudly serves countless loyal customers across <span className="text-primary font-semibold">Malaysia and Singapore</span>.
                </p>
              </div>
            </div>

            {/* Signature English */}
            <div className="mt-8 pt-6 border-t border-border/30 text-center">
              <p className="text-muted-foreground italic">
                "From family needs, to benefiting more people."
              </p>
              <p className="text-primary font-serif font-bold mt-4 text-xl">
                — The YULIN TANG Team
              </p>
            </div>
          </div>
        </div>
        
        {/* Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="p-5 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <milestone.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{milestone.titleZh}</h3>
              <p className="text-sm text-primary font-semibold mb-1">{milestone.titleEn}</p>
              <p className="text-xs text-muted-foreground">{milestone.descZh}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
