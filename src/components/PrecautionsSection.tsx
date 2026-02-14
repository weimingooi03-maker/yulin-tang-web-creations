import precautionsImage from "@/assets/precautions.png";
import { AlertTriangle } from "lucide-react";

const precautions = [
  {
    titleZh: "海鲜过敏者",
    titleEn: "Seafood Allergy",
  },
  {
    titleZh: "痛风 / 高尿酸",
    titleEn: "Gout / High Uric Acid",
  },
  {
    titleZh: "肾脏疾病",
    titleEn: "Kidney Disease",
  },
  {
    titleZh: "孕妇 / 哺乳期",
    titleEn: "Pregnancy / Nursing",
  },
  {
    titleZh: "12岁以下孩童",
    titleEn: "Children Under 12",
  },
];

const PrecautionsSection = () => {
  return (
    <section className="py-12 bg-destructive/5 border-y-2 border-destructive/20">
      <div className="container mx-auto px-4">
        {/* Header - More prominent */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-bold mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>请注意 Please Note</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
            ⚠️ 注意事项 <span className="text-destructive">Precautions</span>
          </h3>
          <p className="text-base font-bold text-destructive">
            以下人群不宜食用 | Not Recommended For
          </p>
        </div>

        {/* Image - Prominent */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-destructive/20">
            <img 
              src={precautionsImage} 
              alt="注意事项 - Precautions"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Compact Precaution Tags */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-4">
          {precautions.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-full px-4 py-2 border-2 border-destructive/30 shadow-sm flex items-center gap-2"
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
