import { AlertTriangle } from "lucide-react";
import precautionsImage from "@/assets/precautions.png";

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
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            <AlertTriangle className="w-4 h-4" />
            温馨提示
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            ⚠️ 注意事项
          </h2>
          <p className="text-xl text-primary font-semibold mb-2">Important Precautions</p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            以下人群不宜食用 / Not recommended for the following groups
          </p>
        </div>

        {/* Image */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={precautionsImage} 
              alt="Precautions - Conditions requiring medical consultation"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Precaution Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {precautions.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-4 text-center border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-base font-bold text-foreground mb-1">
                {item.titleZh}
              </h4>
              <p className="text-sm text-primary font-medium mb-2">
                {item.titleEn}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.descZh}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            * 本产品为保健食品，非药品，如有任何健康疑虑，请先咨询专业医疗人员
            <br />
            <span className="text-xs">
              * This is a health supplement, not medicine. Please consult healthcare professionals if you have any health concerns.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrecautionsSection;
