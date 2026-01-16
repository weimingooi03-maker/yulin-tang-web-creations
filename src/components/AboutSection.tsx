import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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

        {/* Brand Story - Combined with expand/collapse */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
            {/* Always visible intro */}
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-foreground/90">
                第一次知道鱼鳞冻，是因为<span className="text-primary font-semibold">爸爸买给妈妈喝</span>。
                那时只知道——它能补胶原蛋白，喝了连脚都不痛了。
              </p>
              <p className="text-muted-foreground">
                Our first encounter with fish scale jelly was when Dad bought it for Mom. 
                All we knew then was that it could replenish collagen — and after drinking it, even her leg pain disappeared.
              </p>
            </div>

            {/* Expandable content */}
            {isExpanded && (
              <div className="space-y-6 text-lg leading-relaxed mt-6 pt-6 border-t border-border/30 animate-fade-in">
                <div className="space-y-4">
                  <p className="text-foreground/90">
                    后来，我们自己试着熬煮，才发现这种好东西很少人知道。
                    有一次和伙伴回到他的渔村，他家人拿出住家式的鱼鳞冻给我们尝。
                    我们忽然想：<span className="text-primary font-semibold italic">「如果我们能用更好的味道、更用心的方式做出来，是不是能让更多人受益？」</span>
                  </p>
                  <p className="text-muted-foreground text-base">
                    Later, we tried making it ourselves. One day, while visiting a partner's fishing village, his family offered us their homemade version. 
                    We thought: "If we could make this with better taste and more care, couldn't we help more people?"
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground/90">
                    于是<span className="font-serif font-bold text-foreground">魚鱗堂</span>开始了。我们坚持<span className="text-primary font-semibold">精选优质食材</span>、
                    进行<span className="text-primary font-semibold">严格化验检测</span>——毕竟是要卖给人吃的，当然要用更安全、更负责任的方式。
                  </p>
                  <p className="text-muted-foreground text-base">
                    And so YULIN TANG was born. We insist on carefully selected premium ingredients and rigorous laboratory testing — after all, this is food for people.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                  <p className="text-foreground font-medium">
                    从住家式到<span className="text-primary font-semibold">食品级工厂</span>，我们用真空杀菌技术确保品质。
                    如今，魚鱗堂已拥有来自<span className="text-primary font-semibold">马来西亚和新加坡</span>的无数回头客。
                  </p>
                  <p className="text-muted-foreground text-base mt-2">
                    From homemade to food-grade factory production with vacuum sterilization. Now serving loyal customers across Malaysia and Singapore.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <p className="text-muted-foreground italic">
                    "从家人的需要开始，到让更多人受益。"
                  </p>
                  <p className="text-primary font-serif font-bold mt-2 text-lg">
                    — 魚鱗堂团队 / The YULIN TANG Team
                  </p>
                </div>
              </div>
            )}

            {/* Expand/Collapse button */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full mt-6 pt-4 border-t border-border/30 flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              {isExpanded ? (
                <>
                  <span className="font-medium">收起故事 / Collapse</span>
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span className="font-medium">阅读完整故事 / Read Full Story</span>
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
