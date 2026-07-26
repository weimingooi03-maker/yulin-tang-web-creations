import { useEffect, useState } from "react";
import setaPhoto from "@/assets/seta-photo.png";
import productSetB from "@/assets/setb-photo.png";
import productSetC from "@/assets/setc-photo.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, Package, Flame, Check, Crown, Minus, Plus, Sparkles, Timer } from "lucide-react";
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
    priceMY: 199,
    priceSG: 99,
    originalMY: 299,
    originalSG: 118,
    badge: "体验装",
    badgeEn: "Trial",
    isVip: false,
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
    isVip: true,
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
    priceMY: 499,
    priceSG: 230,
    originalMY: 699,
    originalSG: 299,
    badge: "家庭装",
    badgeEn: "Family",
    isVip: true,
    isBestValue: true,
    stockLeft: 4,
    stockTotal: 30,
  },
];

const COUNTDOWN_SECONDS = 30 * 60;
const EXTRA_OFF_MY = 20;
const EXTRA_OFF_SG = 5;

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
  const currency = isMY ? "RM" : "SGD";
  const unitPrice = isMY ? selected.priceMY : selected.priceSG;
  const unitOriginal = isMY ? selected.originalMY : selected.originalSG;

  // Prices shown are already the final promo prices (MY already includes the −RM20).
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
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground px-6 sm:px-8 py-4 sm:py-5 rounded-full shadow-lg shadow-primary/20 animate-pulse">
            <div className="flex items-center gap-2">
              <Truck className="w-6 h-6 sm:w-7 sm:h-7" />
              <span className="font-bold text-lg sm:text-xl md:text-2xl inline-flex items-center gap-2 flex-wrap justify-center">
                <FlagIcon country="MY" /> 全马 <span className="opacity-80">&</span> <FlagIcon country="SG" /> 新加坡 免运费
              </span>
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground mt-3 font-semibold tracking-wide">
            FREE Shipping to All Malaysia & Singapore
          </p>
        </div>


        {/* Unified selector */}
        <Card className="max-w-4xl mx-auto overflow-hidden border-border/50 shadow-xl">
          {/* Country + Package picker */}
          <div className="p-4 sm:p-6 bg-gradient-to-b from-primary/10 to-muted/30 border-b-2 border-primary/30">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold text-foreground">选择国家 & 配套</p>
              <p className="text-xs text-muted-foreground tracking-wider">Select Country & Package</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {/* Country selector */}
              <div
                role="tablist"
                aria-label="Select shipping country"
                className="flex p-1 bg-muted rounded-full"
              >
                {(["MY", "SG"] as const).map((c) => {
                  const active = country === c;
                  return (
                    <button
                      key={c}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setCountry(c)}
                      className={`inline-flex items-center justify-center gap-1.5 rounded-full py-2 px-2.5 sm:px-4 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                        active
                          ? "bg-background text-foreground shadow-md ring-1 ring-primary/30"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <FlagIcon country={c} className="w-4 h-auto sm:w-5" />
                      <span className="hidden sm:inline">{c === "MY" ? "马来西亚 Malaysia" : "新加坡 Singapore"}</span>
                      <span className="sm:hidden">{c === "MY" ? "马来西亚" : "新加坡"}</span>
                    </button>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-9 bg-primary/20" />

              {/* Package selector */}
              <div className="flex gap-1.5 sm:gap-2">
                {products.map((p) => {
                  const active = p.id === selectedId;
                  return (
                    <button
                      key={p.id}
                      onClick={() => selectSet(p.id)}
                      className={`relative rounded-xl border-2 px-2.5 py-2 sm:px-4 sm:py-2.5 text-center transition-all min-w-[4.5rem] sm:min-w-[6rem] ${
                        active
                          ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                          : "border-border bg-background hover:border-primary/40 hover:bg-muted/30"
                      }`}
                    >
                      {p.isBestValue && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-destructive text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm flex items-center gap-0.5">
                          <Flame className="w-2.5 h-2.5" /> 最划算
                        </div>
                      )}
                      {!p.isBestValue && p.id === "set-b" && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                          热销
                        </div>
                      )}
                      <div className="text-sm sm:text-base font-bold leading-tight">
                        SET {p.id.slice(-1).toUpperCase()}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-medium leading-tight">
                        {p.qtyLabel}
                      </div>
                      {active && (
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-0.5 shadow-sm">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
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

              {/* Regional promotion */}
              {isMY ? (
                <div className="mb-4 rounded-xl border-2 border-destructive/40 bg-destructive/5 px-3 py-2.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Timer className="w-4 h-4 text-destructive shrink-0 animate-pulse" />
                    <div className="leading-tight min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-destructive truncate">
                        限时额外 −RM {EXTRA_OFF_MY}（已包含在价钱内）
                      </div>
                      <div className="text-[10px] text-muted-foreground truncate">
                        Extra RM {EXTRA_OFF_MY} off already applied · ends soon
                      </div>
                    </div>
                  </div>
                  <div
                    aria-live="polite"
                    className="tabular-nums font-mono font-bold text-sm sm:text-base bg-destructive text-white rounded-lg px-2.5 py-1 shadow-sm"
                  >
                    {mm}:{ss}
                  </div>
                </div>
              ) : (
                <div className="mb-4 rounded-xl border-2 border-primary/40 bg-primary/5 px-3 py-2.5 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <div className="leading-tight min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-primary truncate">
                      🎁 新加坡下单额外赠送产品
                    </div>
                    <div className="text-[10px] text-muted-foreground truncate">
                      Free bonus gift with every Singapore order
                    </div>
                  </div>
                </div>
              )}

              {/* Price (single country) */}
              <div className="mb-5 rounded-xl bg-muted/30 border border-border/60 p-4">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="text-sm text-muted-foreground line-through">
                    {currency} {originalTotal}
                  </span>
                  <span className="text-[11px] font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">
                    省 {currency} {totalSavings}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-destructive leading-none tracking-tight">
                    {currency} {total}
                  </span>
                </div>
                <div className="text-[11px] text-muted-foreground mt-2">
                  每瓶 / per bottle {currency} {(total / (selected.qty * quantity)).toFixed(2)}
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
