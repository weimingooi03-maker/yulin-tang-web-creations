import { Heart, Users, Sparkles, Factory } from "lucide-react";

const milestones = [
  {
    icon: Heart,
    titleZh: "起源",
    titleEn: "Origin",
    descZh: "源于家人的爱",
    descEn: "Born from family love",
  },
  {
    icon: Users,
    titleZh: "初心",
    titleEn: "Mission",
    descZh: "让更多人受益",
    descEn: "Help more people",
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

        {/* Brand Story */}
        <div className="max-w-4xl mx-auto mb-16">
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
                一路聆听顾客反馈、慢慢改良，也收获了无数回头客和好评。
              </p>

              {/* Today */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-foreground font-medium">
                  今天，我们决定升级——用<span className="text-primary font-semibold">食品级工厂</span>来熬煮、真空杀菌。
                  配方与用料不变，只是为了让每一瓶都<span className="text-primary font-semibold">更安心食用</span>。
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-border/30 text-center">
              <p className="text-muted-foreground italic">
                "从家人的需要开始，到让更多人受益。"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                "From family needs, to benefiting more people."
              </p>
              <p className="text-primary font-serif font-bold mt-4 text-xl">
                — 魚鱗堂团队
              </p>
            </div>
          </div>
        </div>
        
        {/* Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <milestone.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{milestone.titleZh}</h3>
              <p className="text-sm text-primary font-semibold mb-2">{milestone.titleEn}</p>
              <p className="text-sm text-muted-foreground">{milestone.descZh}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
