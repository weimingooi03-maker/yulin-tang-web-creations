import product4 from "@/assets/product-4.jpeg";
import productSetB from "@/assets/product-setb.png";
import productSetC from "@/assets/product-setc.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, Truck, Package } from "lucide-react";

const products = [
  {
    image: product4,
    nameZh: "SET A 配套",
    nameEn: "Set A Package",
    qty: "12罐",
    qtyEn: "12 Bottles",
    priceRM: "RM 199",
    priceSGD: "SGD 90",
    descZh: "入门首选，体验深海胶原蛋白的魅力",
    descEn: "Perfect for first-time users",
    badge: "体验装",
    badgeEn: "Trial Pack",
  },
  {
    image: productSetB,
    nameZh: "SET B 配套",
    nameEn: "Set B Package",
    qty: "24罐",
    qtyEn: "24 Bottles",
    priceRM: "RM 369",
    priceSGD: "SGD 160",
    descZh: "超值优惠，持续呵护您的健康",
    descEn: "Great value for continued health",
    badge: "热销款",
    badgeEn: "Best Seller",
  },
  {
    image: productSetC,
    nameZh: "SET C 配套",
    nameEn: "Set C Package",
    qty: "36罐",
    qtyEn: "36 Bottles",
    priceRM: "RM 499",
    priceSGD: "SGD 225",
    descZh: "全家享用，健康美丽一起分享",
    descEn: "Perfect for the whole family",
    badge: "家庭分享装",
    badgeEn: "Family Pack",
  },
];

const ProductsSection = () => {
  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`您好！我想订购 ${productName}。\nHello! I would like to order ${productName}.`);
    window.open(`https://wa.me/601158727742?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            我们的产品 Our Products
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            精选优质深海鱼鳞，采用先进工艺萃取，每盒12罐，礼盒精美包装
            <br />
            <span className="text-base md:text-lg">
              Premium deep sea fish scales, advanced extraction technology, 12 bottles per box, elegant gift packaging
            </span>
          </p>
          
          {/* Free Shipping Banner */}
          <div className="mt-8 inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-4 rounded-full">
            <Truck className="w-6 h-6" />
            <span className="font-bold text-lg">🇲🇾 全西马 & 🇸🇬 新加坡 免运费 | 东马运费另计</span>
          </div>
          <p className="text-base text-muted-foreground mt-2">
            FREE Shipping in West Malaysia & Singapore | East Malaysia shipping charges apply
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border/50 bg-card hover:shadow-2xl transition-all duration-500"
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
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button 
                  size="lg"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-primary text-primary-foreground font-bold"
                  onClick={() => handleWhatsApp(product.nameZh)}
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
                
                {/* Price Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1 font-medium">🇲🇾 马来西亚</p>
                    <p className="text-xl font-bold text-primary">{product.priceRM}</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1 font-medium">🇸🇬 新加坡</p>
                    <p className="text-xl font-bold text-primary">{product.priceSGD}</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6"
                  onClick={() => handleWhatsApp(product.nameZh)}
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
