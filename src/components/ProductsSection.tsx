import { useEffect, useState } from "react";
import setaPhoto from "@/assets/seta-photo.webp";
import productSetB from "@/assets/setb-photo.webp";
import productSetC from "@/assets/setc-photo.webp";
import giftBoxAsset from "@/assets/gift-box-packaging-v2.webp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, Package, Flame, Check, Minus, Plus, Sparkles, Timer, Gift } from "lucide-react";
import { FlagIcon } from "@/components/FlagIcon";
import { useCart, type CartProduct } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "@/lib/utils";


export const products = [
  {
    id: "set-a",
    image: setaPhoto,
    nameZh: "SET A 配套",
    nameEn: "Set A Package",
    qty: 12,
    qtyLabel: "12罐",
    qtyEn: "12 Bottles x 180ml",
    priceMY: 199,
    priceSG: 99,
    originalMY: 299,
    originalSG: 118,
    badge: "体验装",
    badgeEn: "Trial",
    isBestValue: false,
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
    priceMY: 369,
    priceSG: 160,
    originalMY: 499,
    originalSG: 218,
    badge: "热销款",
    badgeEn: "Best Seller",
    isBestValue: false,
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
    priceMY: 519,
    priceSG: 230,
    originalMY: 699,
    originalSG: 299,
    badge: "家庭装",
    badgeEn: "Family",
    isBestValue: true,
    stockLeft: 4,
    stockTotal: 30,
  },
];

const COUNTDOWN_SECONDS = 30 * 60;

const ProductsSection = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState("set-b");
  const [quantity, setQuantity] = useState(1);
  const [country, setCountry] = useState<"MY" | "SG">("MY");
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    const t = setInterval(() => {
      setSecondsLeft((s) => (s <= 1 ? COUNTDOWN_SECONDS : s - 1));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  const selected = products.find((p) => p.id === selectedId)!;

  const isMY = country === "MY";
  const unitPrice = isMY ? selected.priceMY : selected.priceSG;
  const unitOriginal = isMY ? selected.originalMY : selected.originalSG;
  const myExtraOff = selected.originalMY - selected.priceMY;

  const total = unitPrice * quantity;
  const originalTotal = unitOriginal * quantity;
  const totalSavings = originalTotal - total;

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
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
            选择配套
          </h2>
          <p className="text-lg text-primary font-semibold mb-4">Select Your Package</p>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground font-medium max-w-2xl mx-auto">
            深海鱼鳞胶原蛋白
          </p>
          <p className="text-base text-primary font-semibold max-w-2xl mx-auto">
            Premium Deep-Sea Fish Scales Collagen
          </p>

          {/* Free shipping banner */}
          <div className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground px-5 py-3 rounded-full shadow-lg shadow-primary/20">
            <Truck className="w-5 h-5" />
            <span className="font-bold text-base sm:text-lg inline-flex items-center gap-1.5">
              <FlagIcon country="MY" /> 全马 <span className="opacity-80">&</span> <FlagIcon country="SG" /> 新加坡 免运费
            </span>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 font-medium tracking-wide">
            FREE Shipping to All Malaysia & Singapore
          </p>
        </div>

        {/* Gift box packaging banner */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="rounded-2xl border border-border/60 bg-muted/20 p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-32 sm:w-40 md:w-56 shrink-0 rounded-xl overflow-hidden bg-background shadow-sm">
              <img
                src={giftBoxAsset}
                alt="精美礼盒包装 Premium Gift Box Packaging"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg sm:text-xl font-bold text-foreground mb-1">
                精美礼盒包装
              </p>
              <p className="text-sm sm:text-base text-primary font-semibold mb-2">
                Premium Gift Box Packaging
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                真实出货包装 · 送礼自用两相宜 · Actual packaging shipped to you
              </p>
            </div>
          </div>
        </div>

        {/* Main package card */}
        <Card className="max-w-5xl mx-auto overflow-hidden border-border/50 shadow-xl">
          {/* Country selector */}
          <div className="px-5 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-5 bg-gradient-to-b from-primary/10 to-muted/30 border-b border-primary/20">
            <div className="text-center mb-4">
              <p className="text-base font-bold text-foreground">选择国家</p>
              <p className="text-xs text-muted-foreground tracking-wider">Select Country</p>
            </div>
            <div
              role="tablist"
              aria-label="Select shipping country"
              className="flex justify-center p-1 bg-muted rounded-full max-w-md mx-auto"
            >
              {(["MY", "SG"] as const).map((c) => {
                const active = country === c;
                return (
                  <button
                    key={c}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setCountry(c)}
                    className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full py-2.5 px-4 text-sm sm:text-base font-semibold whitespace-nowrap transition-all ${
                      active
                        ? "bg-background text-foreground shadow-md ring-1 ring-primary/30"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <FlagIcon country={c} className="w-5 h-auto sm:w-6" />
                    <span>{c === "MY" ? "马来西亚 Malaysia" : "新加坡 Singapore"}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Package selector */}
          <div className="px-5 py-5 sm:px-8 sm:py-6 border-b border-border/60">
            <div className="text-center mb-4">
              <p className="text-base font-bold text-foreground">选择配套</p>
              <p className="text-xs text-muted-foreground tracking-wider">Select Package</p>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {products.map((p) => {
                const active = p.id === selectedId;
                return (
                  <button
                    key={p.id}
                    onClick={() => selectSet(p.id)}
                    className={`relative rounded-2xl border-2 p-3 sm:p-4 text-center transition-all ${
                      active
                        ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                        : "border-border bg-background hover:border-primary/40 hover:bg-muted/30"
                    }`}
                  >
                    {p.isBestValue && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-destructive text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm flex items-center gap-0.5">
                        <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> 最划算 Best Value
                      </div>
                    )}
                    {!p.isBestValue && p.id === "set-b" && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                        热销 Best Seller
                      </div>
                    )}
                    <div className="aspect-square w-full mb-2 sm:mb-3 rounded-xl overflow-hidden bg-muted/30">
                      <img
                        src={p.image}
                        alt={p.nameEn}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-base sm:text-xl font-bold leading-tight text-foreground">
                      SET {p.id.slice(-1).toUpperCase()}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground font-medium leading-tight mb-1 sm:mb-2">
                      {p.qtyLabel} · {p.qtyEn}
                    </div>
                    {active && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-0.5 shadow-sm">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected package detail */}
          <div className="grid md:grid-cols-2">
            <div className="relative hidden md:block bg-muted/20 overflow-hidden">
              <img
                key={selected.id}
                src={selected.image}
                alt={selected.nameEn}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>


            <CardContent className="p-4 sm:p-8 flex flex-col justify-center">
              <div className="inline-flex self-start items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold mb-2 sm:mb-3">
                {selected.badge} · {selected.badgeEn}
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-foreground leading-tight">
                {selected.nameZh}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-3 sm:mb-4">
                {selected.nameEn}
              </p>

              <div className="flex items-center justify-between text-xs sm:text-sm text-foreground font-semibold mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-border/60 gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <Package className="w-4 h-4 text-primary shrink-0" />
                  <span className="truncate">{selected.qtyLabel} · {selected.qtyEn}</span>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold shrink-0">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>7500mg</span>
                </div>
              </div>

              {/* Regional promotion */}
              <div
                className={`mb-3 sm:mb-4 rounded-xl border-2 px-3 py-3 sm:px-4 sm:py-4 flex items-center justify-between gap-2 ${
                  isMY ? "border-destructive/40 bg-destructive/5" : "border-primary/40 bg-primary/5"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {isMY ? (
                    <Timer className="w-5 h-5 text-destructive shrink-0 animate-pulse" />
                  ) : (
                    <Gift className="w-5 h-5 text-primary shrink-0 animate-pulse" />
                  )}
                  <div className="leading-tight min-w-0">
                    {isMY ? (
                      <>
                        <div className="text-xs sm:text-base font-bold text-destructive truncate">
                          限时额外 {formatPrice(myExtraOff, "MY")} off
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground truncate">
                          Extra {formatPrice(myExtraOff, "MY")} off · ends soon
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-xs sm:text-base font-bold text-primary truncate">
                          30分钟内下单，额外赠送产品
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground truncate">
                          Order within 30 min for a free bonus gift
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div
                  aria-live="polite"
                  className={`tabular-nums font-mono font-extrabold text-lg sm:text-2xl text-white rounded-lg px-3 py-1 sm:px-4 sm:py-1.5 shadow-md shrink-0 ${
                    isMY ? "bg-destructive" : "bg-primary"
                  }`}
                >
                  {mm}:{ss}
                </div>
              </div>

              {/* Price */}
              <div className="mb-3 sm:mb-5 rounded-xl bg-muted/30 border border-border/60 p-3 sm:p-4">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="text-xs sm:text-sm text-muted-foreground line-through tabular-nums">
                    {formatPrice(originalTotal, country)}
                  </span>
                  <span className="text-[11px] font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded tabular-nums">
                    省 Save {formatPrice(totalSavings, country)}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-destructive leading-none tracking-tight tabular-nums">
                    {formatPrice(total, country)}
                  </span>
                </div>
                <div className="text-[11px] text-muted-foreground mt-1.5 sm:mt-2 tabular-nums">
                  每瓶 / per bottle {formatPrice(total / (selected.qty * quantity), country)}
                </div>
              </div>



              {/* Stock urgency bar */}
              {(() => {
                const pct = Math.max(5, Math.min(100, Math.round((selected.stockLeft / selected.stockTotal) * 100)));
                const low = selected.stockLeft <= 5;
                return (
                  <div className="mb-3 sm:mb-4" aria-live="polite">
                    <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold mb-1 sm:mb-1.5 gap-2">
                      <span className={`truncate ${low ? "text-destructive" : "text-foreground"}`}>
                        本周仅剩 {selected.stockLeft} 份
                      </span>
                      <span className="text-muted-foreground truncate">
                        Only {selected.stockLeft} left
                      </span>
                    </div>
                    <div className="relative h-1.5 sm:h-2 rounded-full bg-muted overflow-hidden">
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
                className="flex items-center justify-between mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-border/60 gap-2"
              >
                <div className="flex flex-col leading-tight min-w-0">
                  <span id="qty-label" className="text-xs sm:text-sm font-semibold text-foreground">
                    份数 / Quantity
                  </span>
                  <span id="qty-help" className="hidden sm:block text-[11px] text-muted-foreground">
                    使用 + / − 按钮调整 (1–99) · Use + / − to adjust
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 border-2 border-border rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 transition shrink-0">
                  <button
                    type="button"
                    aria-label={`减少份数，当前 ${quantity} 份 Decrease quantity`}
                    aria-controls="qty-value"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    <Minus className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <span
                    id="qty-value"
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="w-7 sm:w-8 text-center text-base sm:text-lg font-bold text-foreground tabular-nums"
                  >
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label={`增加份数，当前 ${quantity} 份 Increase quantity`}
                    aria-controls="qty-value"
                    onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                    disabled={quantity >= 99}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    <Plus className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <Button
                className="w-full font-bold text-sm sm:text-base py-4 sm:py-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => handleBuyNow(selected)}
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
