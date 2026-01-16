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
              <p className="text-foreground/90">
                第一次知道鱼鳞冻，是因为<span className="text-primary font-semibold">爸爸买给妈妈喝</span>。
                那时只知道——它能补胶原蛋白，喝了连脚都不痛了。
              </p>

              <p className="text-foreground/90">
                后来，我们自己试着熬煮，才发现这种好东西很少人知道。
                市面上虽然有人卖，但味道总觉得少了点什么。
              </p>

              <p className="text-foreground/90">
                有一次和伙伴回到他的渔村，他家人拿出住家式的鱼鳞冻给我们尝。
                我们忽然想：<span className="text-primary font-semibold italic">「如果我们能用更好的味道、更用心的方式做出来，是不是能让更多人受益？」</span>
              </p>

              <p className="text-foreground/90">
                于是<span className="font-serif font-bold text-foreground">魚鱗堂</span>开始了。从厨房一步步做起，
                一路聆听顾客反馈、慢慢改良。我们坚持<span className="text-primary font-semibold">精选优质食材</span>、
                进行<span className="text-primary font-semibold">严格化验检测</span>——毕竟是要卖给人吃的，
                当然要用更安全、更负责任的方式。
              </p>

              <div className="pt-4 border-t border-border/50">
                <p className="text-foreground font-medium">
                  今天，我们决定升级——用<span className="text-primary font-semibold">食品级工厂</span>来熬煮、真空杀菌。
                  配方与用料不变，只是为了让每一瓶都<span className="text-primary font-semibold">更安心食用</span>。
                  如今，魚鱗堂已拥有来自<span className="text-primary font-semibold">马来西亚和新加坡</span>的无数回头客与好评。
                </p>
              </div>
            </div>

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
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Our first encounter with fish scale jelly was when <span className="text-primary font-semibold">Dad bought it for Mom</span>. 
                All we knew then was that it could replenish collagen — and after drinking it, even her leg pain disappeared.
              </p>

              <p className="text-foreground/90">
                Later, we tried making it ourselves and discovered that very few people knew about this wonderful product. 
                Although some sellers existed in the market, the taste always seemed to be missing something.
              </p>

              <p className="text-foreground/90">
                One day, while visiting a partner's fishing village, his family offered us their homemade fish scale jelly. 
                We thought: <span className="text-primary font-semibold italic">"If we could make this with better taste and more care, couldn't we help more people benefit from it?"</span>
              </p>

              <p className="text-foreground/90">
                And so <span className="font-serif font-bold text-foreground">YULIN TANG</span> was born. Starting from our kitchen, 
                step by step, listening to customer feedback, and continuously improving. We insist on <span className="text-primary font-semibold">carefully selected premium ingredients</span> and 
                <span className="text-primary font-semibold"> rigorous laboratory testing</span> — after all, this is food for people, 
                so we must do it the safest and most responsible way.
              </p>

              <div className="pt-4 border-t border-border/50">
                <p className="text-foreground font-medium">
                  Today, we've upgraded to <span className="text-primary font-semibold">food-grade factory production</span> with vacuum sterilization. 
                  Our formula and ingredients remain unchanged — we simply want every bottle to be <span className="text-primary font-semibold">safer to consume</span>. 
                  Now, YULIN TANG proudly serves countless loyal customers across <span className="text-primary font-semibold">Malaysia and Singapore</span>.
                </p>
              </div>
            </div>

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
      </div>
    </section>
  );
};

export default AboutSection;
