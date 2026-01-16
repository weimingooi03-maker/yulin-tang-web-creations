const precautions = [
  {
    titleZh: "海鲜过敏者",
    titleEn: "Seafood Allergy",
    descZh: "不宜食用",
    descEn: "Not recommended",
  },
  {
    titleZh: "痛风 / 高尿酸",
    titleEn: "Gout / High Uric Acid",
    descZh: "不宜食用",
    descEn: "Not recommended",
  },
  {
    titleZh: "肾脏疾病",
    titleEn: "Kidney Disease",
    descZh: "不宜食用",
    descEn: "Not recommended",
  },
  {
    titleZh: "孕妇 / 哺乳期",
    titleEn: "Pregnancy / Nursing",
    descZh: "不宜食用",
    descEn: "Not recommended",
  },
  {
    titleZh: "12岁以下孩童",
    titleEn: "Children Under 12",
    descZh: "不宜食用",
    descEn: "Not recommended",
  },
];

const PrecautionsSection = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
            ⚠️ 注意事项 <span className="text-primary">Precautions</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            以下人群不宜食用 | Not recommended for
          </p>
        </div>

        {/* Compact Precaution Tags */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-6">
          {precautions.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-full px-4 py-2 border border-border/50 shadow-sm flex items-center gap-2"
            >
              <span className="text-sm font-bold text-foreground">{item.titleZh}</span>
              <span className="text-xs text-muted-foreground">({item.titleEn})</span>
            </div>
          ))}
        </div>

        {/* Short Disclaimer */}
        <p className="text-center text-xs text-muted-foreground">
          * 如有健康疑虑，请先咨询医疗人员 | Consult healthcare professionals if concerned
        </p>
      </div>
    </section>
  );
};

export default PrecautionsSection;
