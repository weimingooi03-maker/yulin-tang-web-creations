const stats = [
  { num: "80,000+", zh: "顾客选择", en: "Happy Customers" },
  { num: "92%", zh: "好评率", en: "Positive Rating" },
  { num: "4.9★", zh: "平均评分", en: "Average Rating" },
  { num: "100%", zh: "腥味退款", en: "Fishy-Taste Refund" },
];

const TrustBanner = () => {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-primary/20 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary tracking-tight">
                {s.num}
              </div>
              <div className="mt-1 flex flex-col gap-0.5">
                <span className="text-xs md:text-sm text-foreground font-medium">{s.zh}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{s.en}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
