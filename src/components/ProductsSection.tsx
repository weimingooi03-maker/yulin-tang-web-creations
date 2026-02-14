import product4 from "@/assets/product-4.jpeg";
import productSetB from "@/assets/product-setb.png";
import productSetC from "@/assets/product-setc-new.jpeg";
import voucherImg from "@/assets/voucher-rm20.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, Truck, Package, Flame, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const products = [
  {
    image: product4,
    nameZh: "SET A 配套",
    nameEn: "Set A Package",
    qty: "12罐",
    qtyEn: "12 Bottles x 150ml",
    priceRM: "RM 219",
    priceSGD: "SGD 90",
    unitRM: "RM 18.25",
    unitSGD: "SGD 7.50",
    descZh: "入门首选，体验深海胶原蛋白的魅力",
    descEn: "Perfect for first-time users",
    badge: "体验装",
    badgeEn: "Trial Pack",
    isVip: false,
    isBestValue: false,
  },
  {
    image: productSetB,
    nameZh: "SET B 配套",
    nameEn: "Set B Package",
    qty: "24罐",
    qtyEn: "24 Bottles x 150ml",
    priceRM: "RM 389",
    priceSGD: "SGD 160",
    unitRM: "RM 16.21",
    unitSGD: "SGD 6.67",
    descZh: "超值优惠，持续呵护您的健康",
    descEn: "Great value for continued health",
    badge: "热销款",
    badgeEn: "Best Seller",
    isVip: true,
    isBestValue: false,
  },
  {
    image: productSetC,
    nameZh: "SET C 配套",
    nameEn: "Set C Package",
    qty: "36罐",
    qtyEn: "36 Bottles x 150ml",
    priceRM: "RM 519",
    priceSGD: "SGD 225",
    unitRM: "RM 14.42",
    unitSGD: "SGD 6.25",
    descZh: "全家享用，健康美丽一起分享",
    descEn: "Perfect for the whole family",
    badge: "家庭分享装",
    badgeEn: "Family Pack",
    isVip: true,
    isBestValue: true,
  },
];

const ProductsSection = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30分钟倒计时

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 30 * 60));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };




  const handleWhatsApp = (nameZh: string, nameEn: string) => {
    const message = encodeURIComponent(`您好！我想订购 ${nameZh}。\nHello! I would like to order ${nameEn}.`);
    window.open(`https://wa.me/601158727742?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
            我们的产品
          </h2>
          <p className="text-lg text-primary font-semibold mb-4">Our Products</p>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground font-medium max-w-2xl mx-auto">
            深海鱼鳞胶原蛋白
          </p>
          <p className="text-base text-primary font-semibold max-w-2xl mx-auto">
            Premium Deep-Sea Fish Scales Collagen
          </p>
          
          {/* Free Shipping Banner */}
          <div className="mt-8 inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-4 rounded-full">
            <Truck className="w-6 h-6" />
            <span className="font-bold text-base sm:text-lg">🇲🇾 全西马 & 🇸🇬 新加坡 免运费 | East Malaysia: Extra Shipping | 东马运费另计</span>
          </div>
          <p className="text-base text-muted-foreground mt-2">
            FREE Shipping in West Malaysia & Singapore | East Malaysia shipping charges apply
          </p>
        </div>
        

        {/* VIP简洁提示 */}
        <div className="mb-8 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-100 to-amber-50 border-2 border-amber-400 text-amber-900 px-5 sm:px-6 py-3 rounded-2xl sm:rounded-full shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-xl">👑</span>
              <span className="font-bold text-sm sm:text-base">购买 SET B / SET C 即成为 VIP 会员</span>
            </div>
            <span className="text-amber-700 text-xs sm:text-sm">优先参与未来活动与专属优惠 | Priority Access to Events & Offers</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden border-border/50 bg-card hover:shadow-2xl transition-all duration-500 ${
                index === 1 
                  ? 'ring-2 ring-primary shadow-lg scale-[1.02]' 
                  : product.isVip ? 'ring-2 ring-amber-500/30' : ''
              }`}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.nameEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-base font-bold">
                  {product.badge}
                </div>
                {/* Best Value Badge */}
                {product.isBestValue && (
                  <div className="absolute bottom-4 left-4 bg-destructive text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Flame className="w-3 h-3" /> 最划算 Best Value
                  </div>
                )}
                {/* VIP Badge */}
                {product.isVip && (
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <span>👑</span> VIP
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button 
                   size="lg"
                   className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 md:opacity-0 md:translate-y-full md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 bg-primary text-primary-foreground font-bold"
                   onClick={() => handleWhatsApp(product.nameZh, product.nameEn)}
                 >
                   <ShoppingCart className="w-5 h-5 mr-2" />
                   立即订购
                 </Button>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">{product.qty}</span>
                  <span className="text-lg text-muted-foreground">/ {product.qtyEn}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {product.nameZh}
                </h3>
                <p className="text-base text-muted-foreground mb-3 font-medium">
                  {product.nameEn}
                </p>
                <p className="text-base text-muted-foreground mb-4">
                  {product.descZh}
                </p>

                {/* 优惠倒计时 + 优惠券 */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-muted-foreground">优惠倒计时 | Offer Ends In</span>
                  </div>
                  <p className="text-lg font-bold text-primary font-mono mb-2">{formatTime(timeLeft)}</p>
                  <img 
                    src={voucherImg} 
                    alt="RM20 OFF Voucher 优惠卷" 
                    className="w-full rounded-md border border-primary/20 shadow-sm"
                  />
                  <p className="text-xs text-muted-foreground mt-2">限时优惠卷！把握机会，立即订购 | Limited Voucher! Don't miss out!</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1 font-medium">🇲🇾 Malaysia</p>
                    <p className="text-xl font-bold text-primary">{product.priceRM}</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1 font-medium">🇸🇬 Singapore</p>
                    <p className="text-xl font-bold text-primary">{product.priceSGD}</p>
                  </div>
                </div>
                <div className={`text-center mb-4 px-3 py-2 rounded-lg ${product.isBestValue ? 'bg-destructive/10 border border-destructive/30' : 'bg-muted/50'}`}>
                  <p className={`text-xs font-bold ${product.isBestValue ? 'text-destructive' : 'text-muted-foreground'}`}>
                    每瓶仅 {product.unitRM} / {product.unitSGD}
                    {product.isBestValue && ' ✨ 最优惠！'}
                  </p>
                  <p className="text-xs text-muted-foreground">per bottle</p>
                </div>
                
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6"
                  onClick={() => handleWhatsApp(product.nameZh, product.nameEn)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp 订购
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
