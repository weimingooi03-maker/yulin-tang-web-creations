import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/unique-formula.webp";
import floralImage from "@/assets/floral-series-coming-soon.webp";
import customers80kImg from "@/assets/hero-80k-customers.webp";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const heroSlides = [
  {
    src: customers80kImg,
    alt: "服务超过 80,000 名马来西亚与新加坡顾客的胶原产品，好评高达 92% - Trusted by 80,000+ customers across Malaysia & Singapore",
  },
  {
    src: heroImage,
    alt: "魚鱗堂 独特配方 Unique Formula - Selected Deep-Sea Fish Scales Collagen",
  },
  {
    src: floralImage,
    alt: "魚鱗堂 花香系列 即将推出 Floral Series Coming Soon - Chrysanthemum Flavor",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const goToNext = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const goToPrev = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      goToNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    isDragging.current = false;
    const distance = dragStartX.current - e.clientX;
    const minDragDistance = 40;
    if (distance > minDragDistance) {
      goToNext();
    } else if (distance < -minDragDistance) {
      goToPrev();
    }
    dragStartX.current = null;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    dragStartX.current = null;
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-muted" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 pt-6 pb-6 md:pt-8 md:pb-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
          {/* SEO: visually-hidden primary heading (page has no other H1) */}
          <h1 className="sr-only">
            魚鱗堂 YULIN TANG 深海鱼鳞胶原蛋白冻 - 缓解关节疼痛、强化骨骼、养颜美容，马来西亚新加坡免运费配送
          </h1>
          {/* Feature image carousel - hero attraction */}
          <div className="relative w-full max-w-5xl opacity-0 animate-fade-in-delay-2">
            {/* Glow aura */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/30 rounded-[2rem] blur-3xl opacity-70 animate-hero-glow" />
            {/* Slides */}
            <div
              className="relative overflow-hidden rounded-2xl aspect-square sm:aspect-[4/3] md:aspect-[16/10] shadow-2xl bg-secondary/40 touch-pan-y cursor-grab active:cursor-grabbing"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
            >
              {heroSlides.map((slide, idx) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[1400ms] ease-in-out select-none ${
                    idx === activeSlide ? "opacity-100 animate-hero-float" : "opacity-0"
                  }`}
                />
              ))}
              {/* Shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full animate-hero-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              {/* Manual arrows */}
              <button
                onClick={goToPrev}
                aria-label="上一张 Previous slide"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/60 backdrop-blur-sm border border-white/20 text-foreground/80 hover:text-primary hover:bg-white/50 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={goToNext}
                aria-label="下一张 Next slide"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/60 backdrop-blur-sm border border-white/20 text-foreground/80 hover:text-primary hover:bg-white/50 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Slide controls: clickable dots + play/pause */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10 px-3 py-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-white/20 shadow-sm">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`切换到第 ${idx + 1} 张 Slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === activeSlide
                        ? "w-8 bg-primary shadow-md shadow-primary/50"
                        : "w-1.5 bg-foreground/30 hover:bg-foreground/50"
                    }`}
                  />
                ))}
                <button
                  onClick={() => setIsPlaying((prev) => !prev)}
                  aria-label={isPlaying ? "暂停轮播 Pause slideshow" : "播放轮播 Play slideshow"}
                  className="ml-1 p-1 rounded-full text-foreground/70 hover:text-primary hover:bg-white/40 transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
