import { useState } from "react";
import setaPhoto from "@/assets/seta-photo.png";
import productSetB from "@/assets/setb-photo.png";
import productSetC from "@/assets/setc-photo.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, Package, Flame, Check, Crown, Minus, Plus, Sparkles } from "lucide-react";
import { FlagIcon } from "@/components/FlagIcon";
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
    originalMY: 239,
    originalSG: 109,
    unitRM: "RM 18.25",
    unitSGD: "SGD 8.25",
    badge: "体验装",
    badgeEn: "Trial",
    isVip: false,
    isBestValue: false,
    savingsZh: null as string | null,
    stockLeft: 18,
    stockTotal: 40,
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
    originalMY: 409,
    originalSG: 170,
    unitRM: "RM 16.21",
    unitSGD: "SGD 6.67",
    badge: "热销款",
    badgeEn: "Best Seller",
    isVip: true,
    isBestValue: false,
    savingsZh: "省 RM 49",
    stockLeft: 7,
    stockTotal: 40,
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
    originalMY: 559,
    originalSG: 240,
    unitRM: "RM 14.97",
    unitSGD: "SGD 6.39",
    badge: "家庭装",
    badgeEn: "Family",
    isVip: true,
    isBestValue: true,
    savingsZh: "省 RM 118",
    stockLeft: 4,
    stockTotal: 30,
  },
];

const ProductsSection = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState("set-b");
  const [quantity, setQuantity] = useState(1);
  const selected = products.find((p) => p.id === selectedId)!;

  const totalMY = selected.priceMY * quantity;
  const totalSG = selected.priceSG * quantity;
  const originalTotalMY = selected.originalMY * quantity;
  const originalTotalSG = selected.originalSG * quantity;

  const selectSet = (id: string) => {
    setSelectedId(id);
    setQuantity(1);
  };

  const toCartProduct = (p: typeof products[number]): CartProduct => ({
    id: p.id,
    nameZh: p.nameZh,
    nameEn: p.nameEn,
    qtyLabel: p.qtyEn,
    image: p.image,
    priceMY: p.priceMY,
    priceSG: p.priceSG,
  });

  const handleBuyNow = (p: typeof products[number]) => {
    addItem(toCartProduct(p), quantity);
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

        {/* Voucher Banner */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/50 bg-gradient-to-r from-primary/10 via-gold/10 to-accent/10 p-4 sm:p-5 shadow-md">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary/50" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary/50" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
              <div className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> 限时优惠 · Voucher
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm sm:text-base">
                <span className="inline-flex items-center gap-1.5 font-bold text-foreground">
                  <FlagIcon country="MY" />
                  <span className="text-primary text-lg">−RM 20</span>
                  <span className="text-xs text-muted-foreground">全配套 All Packages</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-bold text-foreground">
                  <FlagIcon country="SG" />
                  <span className="text-primary text-lg">−SGD 5</span>
                  <span className="text-xs text-muted-foreground">仅限 SET C Only</span>
                </span>
              </div>
            </div>
            <p className="text-center text-[11px] text-muted-foreground mt-2">
              已自动套用，无需输入优惠码 · Auto-applied at checkout, no code needed
            </p>
          </div>
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
                    onClick={() => selectSet(p.id)}
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
                    <div className="mt-1.5 text-[10px] sm:text-xs font-medium text-primary">
                      选配套 Select
                    </div>
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

              <div className="flex items-center justify-between text-sm text-foreground font-semibold mb-4 pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-primary" />
                  <span>{selected.qtyLabel} · {selected.qtyEn}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>7500mg</span>
                </div>
              </div>

              {/* Prices */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <FlagIcon country="MY" />
                    <span className="flex flex-col leading-tight">
                      <span className="text-foreground font-semibold">马来西亚</span>
                      <span className="text-[11px]">Malaysia</span>
                    </span>
                  </span>
                  <div className="text-right">
                    <div className="flex items-baseline justify-end gap-2">
                      <span className="text-sm text-muted-foreground line-through">RM {originalTotalMY}</span>
                      <span className="text-[10px] font-bold text-destructive bg-destructive/10 px-1.5 py-0.5 rounded">−RM {discMY * quantity}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary leading-none">RM {totalMY}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      每瓶 / per bottle RM {(totalMY / (selected.qty * quantity)).toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <FlagIcon country="SG" />
                    <span className="flex flex-col leading-tight">
                      <span className="text-foreground font-semibold">新加坡</span>
                      <span className="text-[11px]">Singapore</span>
                    </span>
                  </span>
                  <div className="text-right">
                    {discSG > 0 && (
                      <div className="flex items-baseline justify-end gap-2">
                        <span className="text-sm text-muted-foreground line-through">SGD {originalTotalSG}</span>
                        <span className="text-[10px] font-bold text-destructive bg-destructive/10 px-1.5 py-0.5 rounded">−SGD {discSG * quantity}</span>
                      </div>
                    )}
                    <div className="text-2xl font-bold text-primary leading-none">SGD {totalSG}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      每瓶 / per bottle SGD {(totalSG / (selected.qty * quantity)).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stock urgency bar */}
              {(() => {
                const pct = Math.max(5, Math.min(100, Math.round((selected.stockLeft / selected.stockTotal) * 100)));
                const low = selected.stockLeft <= 5;
                return (
                  <div className="mb-4" aria-live="polite">
                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                      <span className={low ? "text-destructive" : "text-foreground"}>
                        本周仅剩 {selected.stockLeft} 份
                      </span>
                      <span className="text-muted-foreground">
                        Only {selected.stockLeft} left this week
                      </span>
                    </div>
                    <div className="relative h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${
                          low
                            ? "bg-gradient-to-r from-destructive via-orange-500 to-destructive animate-pulse"
                            : "bg-gradient-to-r from-primary via-gold to-accent"
                        }`}
                        style={{ width: `${100 - pct + 5}%` }}
                      />
                    </div>
                  </div>
                );
              })()}

              {/* Quantity stepper */}
              <div
                role="group"
                aria-labelledby="qty-label"
                aria-describedby="qty-help"
                className="flex items-center justify-between mb-4 pb-4 border-b border-border/60"
              >
                <div className="flex flex-col leading-tight">
                  <span id="qty-label" className="text-sm font-semibold text-foreground">
                    份数 / Quantity
                  </span>
                  <span id="qty-help" className="text-[11px] text-muted-foreground">
                    使用 + / − 按钮或键盘 Enter/Space 调整 (1–99)
                  </span>
                </div>
                <div className="flex items-center gap-3 border-2 border-border rounded-full px-2 py-1 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 transition">
                  <button
                    type="button"
                    aria-label={`减少份数，当前 ${quantity} 份 Decrease quantity`}
                    aria-controls="qty-value"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    <Minus className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <span
                    id="qty-value"
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="w-8 text-center text-lg font-bold text-foreground tabular-nums"
                  >
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label={`增加份数，当前 ${quantity} 份 Increase quantity`}
                    aria-controls="qty-value"
                    onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                    disabled={quantity >= 99}
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    <Plus className="w-4 h-4" aria-hidden="true" />
                  </button>
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
                {quantity > 1 && <span className="ml-2 opacity-90">× {quantity}</span>}
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductsSection;
