import setaPhoto from "@/assets/seta-photo.png";
import productSetB from "@/assets/setb-photo.png";
import productSetC from "@/assets/setc-photo.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, Package, Flame } from "lucide-react";
import { FlagIcon } from "@/components/FlagIcon";
import { useToast } from "@/hooks/use-toast";
import { useCart, type CartProduct } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "set-a",
    image: setaPhoto,
    nameZh: "SET A 配套",
    nameEn: "Set A Package",
    qty: "12罐",
    qtyEn: "12 Bottles x 180ml",
    priceRM: "RM 219",
    priceSGD: "SGD 99",
    priceMY: 219,
    priceSG: 99,
    unitRM: "RM 18.25",
    unitSGD: "SGD 8.25",
    descZh: "入门首选，体验深海胶原蛋白的魅力",
    descEn: "Perfect for first-time users",
    badge: "体验装",
    badgeEn: "Trial Pack",
    isVip: false,
    isBestValue: false,
  },
  {
    id: "set-b",
    image: productSetB,
    nameZh: "SET B 配套",
    nameEn: "Set B Package",
    qty: "24罐",
    qtyEn: "24 Bottles x 180ml",
    priceRM: "RM 389",
    priceSGD: "SGD 160",
    priceMY: 389,
    priceSG: 160,
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
    id: "set-c",
    image: productSetC,
    nameZh: "SET C 配套",
    nameEn: "Set C Package",
    qty: "36罐",
    qtyEn: "36 Bottles x 180ml",
    priceRM: "RM 539",
    priceSGD: "SGD 230",
    priceMY: 539,
    priceSG: 230,
    unitRM: "RM 14.97",
    unitSGD: "SGD 6.39",
    descZh: "全家享用，健康美丽一起分享",
    descEn: "Perfect for the whole family",
    badge: "家庭分享装",
    badgeEn: "Family Pack",
    isVip: true,
    isBestValue: true,
  },
];

const ProductsSection = () => {
  const { toast } = useToast();
  const { addItem, openCart } = useCart();
  const navigate = useNavigate();

  const toCartProduct = (p: typeof products[number]): CartProduct => ({
    id: p.id,
    nameZh: p.nameZh,
    nameEn: p.nameEn,
    qtyLabel: p.qtyEn,
    image: p.image,
    priceMY: p.priceMY,
    priceSG: p.priceSG,
  });

  const handleAddToCart = (p: typeof products[number]) => {
    addItem(toCartProduct(p));
    toast({
      title: "已加入购物车",
      description: `${p.nameZh} / ${p.nameEn} 已加入购物车。`,
    });
    openCart();
  };

  const handleBuyNow = (p: typeof products[number]) => {
    addItem(toCartProduct(p));
    navigate("/checkout");
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
            <span className="font-bold text-base sm:text-lg inline-flex items-center gap-1.5">
              <FlagIcon country="MY" /> 全马 & <FlagIcon country="SG" /> 新加坡 免运费
            </span>
          </div>
          <p className="text-base text-muted-foreground mt-2">
            FREE Shipping to All Malaysia & Singapore
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
                  ? 'ring-2 ring-primary shadow-lg lg:scale-[1.02]' 
                  : product.isVip ? 'ring-2 ring-amber-500/30' : ''
              }`}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Single top-right badge: VIP takes precedence, otherwise category */}
                {product.isVip ? (
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                    <span>👑</span> VIP
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-primary/95 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {product.badge}
                  </div>
                )}
                {product.isBestValue && (
                  <div className="absolute bottom-4 left-4 bg-destructive text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                    <Flame className="w-3 h-3" /> 最划算 Best Value
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground leading-tight">
                  {product.nameZh}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">
                  {product.nameEn}
                </p>

                {/* Qty + per-bottle inline meta */}
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground mb-5 pb-4 border-b border-border/60">
                  <span className="inline-flex items-center gap-1.5 text-foreground font-semibold">
                    <Package className="w-4 h-4 text-primary" />
                    {product.qty} · {product.qtyEn}
                  </span>
                  <span className={product.isBestValue ? 'text-destructive font-semibold' : ''}>
                    每瓶 {product.unitRM} / {product.unitSGD}
                  </span>
                </div>

                {/* Prices — single row, no boxes */}
                <div className="flex items-baseline justify-between mb-5">
                  <div className="flex items-baseline gap-2">
                    <FlagIcon country="MY" />
                    <span className="text-2xl font-bold text-primary">{product.priceRM}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <FlagIcon country="SG" />
                    <span className="text-2xl font-bold text-primary">{product.priceSGD}</span>
                  </div>
                </div>

                {/* Primary action + secondary text link */}
                <Button 
                  className={`w-full font-bold text-base py-6 ${
                    product.isVip
                      ? 'bg-gradient-to-r from-primary via-gold to-accent hover:opacity-90 text-primary-foreground shadow-lg'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  onClick={() => handleBuyNow(product)}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  立即购买 Buy Now
                </Button>
                <button 
                  className="w-full mt-3 text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                  onClick={() => handleAddToCart(product)}
                >
                  加入购物车 Add to Cart
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
