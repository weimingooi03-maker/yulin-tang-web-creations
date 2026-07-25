import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    questionZh: "鱼鳞冻是什么？和胶原蛋白粉有什么区别？",
    questionEn: "What is fish scale collagen jelly? How is it different from collagen powder?",
    answerZh: "鱼鳞冻是从深海鱼鳞中提取的天然胶原蛋白，制成果冻状，口感Q弹美味。相比胶原蛋白粉，鱼鳞冻更容易被人体吸收，而且无需冲泡，开盖即食，方便携带。",
    answerEn: "Fish scale collagen jelly is natural collagen extracted from deep-sea fish scales, made into a delicious jelly form. Compared to collagen powder, it's easier to absorb and requires no mixing - just open and enjoy!",
  },
  {
    questionZh: "里面的成分有什么？",
    questionEn: "What are the ingredients?",
    answerZh: "主要成分为天然鱼鳞胶原蛋白，搭配红枣、龙眼与斑斓精制而成。红枣补血养颜，龙眼安神助眠，斑斓清香解腻，让口感更温润顺口。",
    answerEn: "Made with natural fish scale collagen, red dates, longan and pandan. Red dates nourish blood and skin, longan calms the mind and aids sleep, while pandan adds a refreshing aroma for a smoother taste.",
  },
  {
    questionZh: "产品有没有添加防腐剂？可以保存多久？",
    questionEn: "Are preservatives added? How long can it be kept?",
    answerZh: "无添加防腐剂，经过高温杀菌确保无菌，可保存一年。",
    answerEn: "No preservatives added. High-temperature sterilization ensures a sterile product with a one-year shelf life.",
  },
  {
    questionZh: "多久能看到效果？",
    questionEn: "How long before I see results?",
    answerZh: "效果因人而异。大多数顾客在持续食用2-4周后开始感受到皮肤更有弹性、关节更灵活。建议持续食用3个月以上获得最佳效果。",
    answerEn: "Results vary by individual. Most customers notice improved skin elasticity and joint flexibility after 2-4 weeks of consistent consumption. We recommend at least 3 months for best results.",
  },
  {
    questionZh: "运费怎么算？多久能收到？",
    questionEn: "How is shipping calculated? When will I receive my order?",
    answerZh: "全马和新加坡免运费！订单确认后，马来西亚一般2-4个工作日送达，新加坡3-5个工作日。",
    answerEn: "Free shipping to all Malaysia and Singapore! After order confirmation: Malaysia 2-4 business days, Singapore 3-5 business days.",
  },
  {
    questionZh: "怎么下单购买？",
    questionEn: "How do I place an order?",
    answerZh: "① 选择配套：点击想要的 SET A / B / C，选择数量。\n② 填写资料：按「立即购买」，输入姓名、电话、地址等收货资料。\n③ 发送 WhatsApp：检查订单总额后，点击 WhatsApp 链接，专属客服会马上为您确认订单与安排发货。",
    answerEn: "① Choose Package: Tap SET A / B / C and select quantity.\n② Fill in Details: Click 'Buy Now' and enter your name, phone, and delivery address.\n③ Send via WhatsApp: Review the total, tap the WhatsApp link, and our team will confirm your order and arrange shipment.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              常见问题
            </h2>
          </div>
          <p className="text-xl text-primary font-semibold mb-2">
            Frequently Asked Questions
          </p>
          <p className="text-muted-foreground">
            解答您的疑问 | Answers to Your Questions
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-xl px-4 md:px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left py-4 md:py-5 hover:no-underline gap-3">
                <div className="flex items-start gap-3 pr-2">
                  <span className="hidden sm:flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-base md:text-lg font-semibold text-foreground mb-0.5">
                      {faq.questionZh}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {faq.questionEn}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 md:pb-5">
                <div className="pt-2 border-t border-border/30">
                  <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-2 mt-3 md:mt-4">
                    {faq.answerZh}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {faq.answerEn}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20">
          <p className="text-lg text-foreground mb-2">
            还有其他问题？
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Have more questions? Contact us directly!
          </p>
          <a
            href="https://wa.me/601158727742"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp 咨询
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
