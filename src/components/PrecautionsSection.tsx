import { AlertTriangle } from "lucide-react";
import precautionsImage from "@/assets/precautions.png";

const precautions = [
  {
    titleZh: "海鲜过敏者",
    titleEn: "Seafood Allergy",
    descZh: "对海鲜或鱼类过敏者请勿食用",
    descEn: "Not suitable for those allergic to seafood or fish",
  },
  {
    titleZh: "痛风 / 高尿酸",
    titleEn: "Gout / High Uric Acid",
    descZh: "痛风或高尿酸患者请避免食用",
    descEn: "Not recommended for gout or high uric acid patients",
  },
  {
    titleZh: "肾脏疾病",
    titleEn: "Kidney Disease",
    descZh: "肾脏功能不佳者请先咨询医生",
    descEn: "Consult your doctor if you have kidney issues",
  },
  {
    titleZh: "孕妇 / 哺乳期",
    titleEn: "Pregnancy / Nursing",
    descZh: "怀孕或哺乳期间请先咨询医生",
    descEn: "Please consult your doctor during pregnancy or nursing",
  },
  {
    titleZh: "儿童",
    titleEn: "Children",
    descZh: "本产品为成人保健品，儿童无需食用",
    descEn: "Adult supplement, not necessary for children",
  },
];

const PrecautionsSection = () => {
  return (
    <section className="py-16 bg-amber-50/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <AlertTriangle className="w-4 h-4" />
            温馨提示
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            ⚠️ 注意事项
          </h2>
          <p className="text-xl text-primary font-semibold mb-2">Important Precautions</p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            以下人群在食用前请先咨询专业医生 / Please consult a doctor before consumption if you have the following conditions
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
              className="bg-white rounded-xl p-4 text-center border border-amber-200/50 shadow-sm hover:shadow-md transition-shadow"
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
