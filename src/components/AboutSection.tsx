import { Award, Leaf, FlaskConical, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    titleZh: "天然原料",
    titleEn: "Natural Ingredients",
  },
  {
    icon: FlaskConical,
    titleZh: "科学配方",
    titleEn: "Scientific Formula",
  },
  {
    icon: Award,
    titleZh: "品质保证",
    titleEn: "Quality Assured",
  },
  {
    icon: Truck,
    titleZh: "快速配送",
    titleEn: "Fast Delivery",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              关于魚鱗堂
              <span className="block text-xl text-primary font-normal mt-2">About YULIN TANG</span>
            </h2>
            <div className="w-24 h-1 bg-primary" />
            <p className="text-muted-foreground leading-relaxed">
              魚鱗堂致力于为马来西亚和新加坡的顾客提供最优质的鱼鳞胶原蛋白产品。我们精选深海鱼类，采用先进的提取技术，确保每一份产品都富含高纯度胶原蛋白。
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              YULIN TANG is dedicated to providing premium fish scales collagen products to customers in Malaysia and Singapore. We carefully select deep-sea fish and use advanced extraction technology to ensure high-purity collagen in every product.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              我们相信，美丽源于内在的健康。通过每日补充胶原蛋白，您可以从内到外焕发青春光彩，拥有健康肌肤和灵活关节。
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              We believe that beauty comes from inner health. By supplementing collagen daily, you can radiate youthful glow from within, achieving healthy skin and flexible joints.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.titleZh}</h3>
                <p className="text-sm text-muted-foreground">{feature.titleEn}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
