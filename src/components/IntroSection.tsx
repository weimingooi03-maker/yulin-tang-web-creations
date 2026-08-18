import heroZh from "@/assets/what-is-fish-jelly-zh.webp";
import heroEn from "@/assets/what-is-fish-jelly-en.webp";

const IntroSection = () => {
  return (
    <section id="intro" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
          {/* Section title */}
          <div className="w-full text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-black">
              鱼鳞冻介绍
            </h2>
            <p className="text-base sm:text-lg mt-2 tracking-wider uppercase font-semibold bg-gradient-to-r from-primary via-gold to-accent bg-clip-text text-transparent">
              Marine Collagen Jelly Introduction
            </p>
            <div className="w-16 h-0.5 mx-auto mt-4 bg-gradient-to-r from-primary via-gold to-accent" />
          </div>

          {/* Product info images */}
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative">
              <img
                src={heroZh}
                alt="什么是鱼鳞冻 - 魚鱗堂深海鱼鳞胶原蛋白冻"
                loading="lazy"
                className="w-full rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="relative">
              <img
                src={heroEn}
                alt="What is Marine Collagen Jelly - YULIN TANG"
                loading="lazy"
                className="w-full rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
