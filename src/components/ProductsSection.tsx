import { useState } from "react";
import setaPhoto from "@/assets/seta-photo.png";
import productSetB from "@/assets/setb-photo.png";
import productSetC from "@/assets/setc-photo.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, Package, Flame, Check, Crown } from "lucide-react";
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
    qty: 12,
    qtyLabel: "12罐",
    qtyEn: "12 Bottles x 180ml",
    priceRM: "RM 219",
    priceSGD: "SGD 99",
    priceMY: 219,
    priceSG: 99,
    unitRM: "RM 18.25",
    unitSGD: "SGD 8.25",
    badge: "体验装",
    badgeEn: "Trial",
    isVip: false,
    isBestValue: false,
    savingsZh: null as string | null,
  },
  {
    id: "set-b",
    image: productSetB,
    nameZh: "SET B 配套",
    nameEn: "Set B Package",
    qty: 24,
    qtyLabel: "24罐",
    qtyEn: "24 Bottles x 180ml",
    priceRM: "RM 389",
    priceSGD: "SGD 160",
    priceMY: 389,
    priceSG: 160,
    unitRM: "RM 16.21",
    unitSGD: "SGD 6.67",
    badge: "热销款",
    badgeEn: "Best Seller",
    isVip: true,
    isBestValue: false,
    savingsZh: "省 RM 49",
  },
  {
    id: "set-c",
    image: productSetC,
    nameZh: "SET C 配套",
    nameEn: "Set C Package",
    qty: 36,
    qtyLabel: "36罐",
    qtyEn: "36 Bottles x 180ml",
    priceRM: "RM 539",
    priceSGD: "SGD 230",
    priceMY: 539,
    priceSG: 230,
    unitRM: "RM 14.97",
    unitSGD: "SGD 6.39",
    badge: "家庭装",
    badgeEn: "Family",
    isVip: true,
    isBestValue: true,
    savingsZh: "省 RM 118",
  },
];

const ProductsSection = () => {
  const { toast } = useToast();
  const { addItem, openCart } = useCart();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState("set-b");
  const selected = products.find((p) => p.id === selectedId)!;

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
        <div className="text-center mb-12">
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
            <span className="font-bold text-base sm:text-lg inline-flex items-center gap-1.5 flex-wrap justify-center">
              <FlagIcon country="MY" /> 全马 & <FlagIcon country="SG" /> 新加坡 免运费
            </span>
          </div>
          <p className="text-base text-muted-foreground mt-2">
            FREE Shipping to All Malaysia & Singapore
          </p>
        </div>

        {/* Unified selector */}
        <Card className="max-w-4xl mx-auto overflow-hidden border-border/50 shadow-xl">
          {/* Segmented picker */}
          <div className="p-4 sm:p-6 bg-gradient-to-b from-primary/10 to-muted/30 border-b-2 border-primary/30">
            <div className="flex flex-col items-center gap-1 mb-4">
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-md animate-pulse">
                <span>👇</span>
                <span>点击下方选择配套 · TAP TO CHOOSE</span>
                <span>👇</span>
              </div>
              <p className="text-sm font-semibold text-foreground mt-2">
                请选择您的配套
              </p>
              <p className="text-xs text-muted-foreground tracking-wider">
                Please Select Your Package
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {products.map((p) => {
                const active = p.id === selectedId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedId(p.id)}
                    className={`relative rounded-xl border-2 p-3 sm:p-4 text-left transition-all ${
                      active
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border bg-background hover:border-primary/40"
                    }`}
                  >
                    {p.isBestValue && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-destructive text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm flex items-center gap-1">
                        <Flame className="w-3 h-3" /> 最划算
                      </div>
                    )}
                    {!p.isBestValue && p.id === "set-b" && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                        热销 Best Seller
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-bold text-sm sm:text-base ${active ? "text-primary" : "text-foreground"}`}>
                        SET {p.id.slice(-1).toUpperCase()}
                      </span>
                      {active && <Check className="w-4 h-4 text-primary" />}
                    </div>
                    <div className="text-[11px] sm:text-xs text-muted-foreground font-medium">
                      {p.qtyLabel} · {p.qty} Bottles
                    </div>
                    <div className="mt-1.5 text-sm sm:text-base font-bold text-foreground">
                      {p.priceRM}
                    </div>
                    {p.savingsZh && (
                      <div className="text-[10px] sm:text-xs text-destructive font-semibold mt-0.5">
                        {p.savingsZh}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected package detail */}
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto bg-muted/20 overflow-hidden">
              <img
                key={selected.id}
                src={selected.image}
                alt={selected.nameEn}
                className="w-full h-full object-cover animate-fade-in"
              />
              {selected.isVip && (
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <Crown className="w-3 h-3" /> VIP
                </div>
              )}
            </div>

            <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
              <div className="inline-flex self-start items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-semibold mb-3">
                {selected.badge} · {selected.badgeEn}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                {selected.nameZh}
              </h3>
              <p className="text-sm text-muted-foreground font-medium mb-4">
                {selected.nameEn}
              </p>

              <div className="flex items-center gap-2 text-sm text-foreground font-semibold mb-4 pb-4 border-b border-border/60">
                <Package className="w-4 h-4 text-primary" />
                {selected.qtyLabel} · {selected.qtyEn}
              </div>

              {/* Prices */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <FlagIcon country="MY" /> 马来西亚
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary leading-none">{selected.priceRM}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">每瓶 {selected.unitRM}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <FlagIcon country="SG" /> 新加坡
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary leading-none">{selected.priceSGD}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">每瓶 {selected.unitSGD}</div>
                  </div>
                </div>
              </div>

              <Button
                className={`w-full font-bold text-base py-6 ${
                  selected.isVip
                    ? "bg-gradient-to-r from-primary via-gold to-accent hover:opacity-90 text-primary-foreground shadow-lg"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                onClick={() => handleBuyNow(selected)}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                立即购买 Buy Now
              </Button>
              <button
                className="w-full mt-3 text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                onClick={() => handleAddToCart(selected)}
              >
                加入购物车 Add to Cart
              </button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductsSection;
