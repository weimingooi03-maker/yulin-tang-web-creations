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
    <section className="py-8 bg-destructive/5 border-y border-destructive/15">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-xl font-serif font-bold text-foreground mb-1">
              ⚠️ 注意事项 <span className="text-destructive text-lg">Precautions</span>
            </h3>
            <p className="text-sm font-bold text-destructive">
              以下人群不宜食用 | Not Recommended For
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {precautions.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-full px-3 py-1.5 border border-destructive/25 text-xs flex items-center gap-1.5"
              >
                <span className="font-bold text-foreground">{item.titleZh}</span>
                <span className="text-muted-foreground">({item.titleEn})</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground">
            * 如有健康疑虑，请先咨询医疗人员 | Consult healthcare professionals if concerned
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrecautionsSection;
