import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { FlagIcon } from "@/components/FlagIcon";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const { isOpen, closeCart, items, updateQty, removeItem, subtotal, formatPrice, region, setRegion, count } = useCart();

  const navigate = useNavigate();

  const goCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <Sheet open={isOpen} onOpenChange={(o) => (o ? null : closeCart())}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-xl">
            <ShoppingBag className="w-5 h-5" /> 购物车 Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {/* Region toggle */}
        <div className="flex items-center gap-2 mt-2 mb-2">
          <span className="text-sm text-muted-foreground">送货地区 Region:</span>
          <div className="inline-flex rounded-full border border-border overflow-hidden">
            <button
              onClick={() => setRegion("MY")}
              className={`px-3 py-1 text-sm font-medium inline-flex items-center gap-1.5 ${region === "MY" ? "bg-primary text-primary-foreground" : "bg-transparent text-foreground"}`}
            >
              <FlagIcon country="MY" className="w-4" /> MY
            </button>
            <button
              onClick={() => setRegion("SG")}
              className={`px-3 py-1 text-sm font-medium inline-flex items-center gap-1.5 ${region === "SG" ? "bg-primary text-primary-foreground" : "bg-transparent text-foreground"}`}
            >
              <FlagIcon country="SG" className="w-4" /> SG
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto -mx-6 px-6 divide-y">
          {items.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>购物车是空的</p>
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => {
              const price = region === "MY" ? item.priceMY : item.priceSG;
              return (
                <div key={item.id} className="py-4 flex gap-3">
                  <img src={item.image} alt={item.nameEn} className="w-16 h-16 rounded-md object-cover border" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate">{item.nameZh}</p>
                    <p className="text-xs text-muted-foreground truncate">{item.nameEn} · {item.qtyLabel}</p>
                    <p className="text-primary font-bold text-sm mt-1 tabular-nums">
                      {formatPrice(price * item.quantity)}
                    </p>

                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center border rounded-md">
                      <button onClick={() => updateQty(item.id, item.quantity - 1)} className="p-1 hover:bg-muted">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-sm min-w-[24px] text-center">{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, item.quantity + 1)} className="p-1 hover:bg-muted">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <SheetFooter className="border-t pt-4">
          <div className="w-full space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-muted-foreground">小计 Subtotal</span>
              <span className="text-2xl font-bold text-primary tabular-nums">
                {formatPrice(subtotal)}
              </span>
            </div>

            <p className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
              {region === "MY" ? <><FlagIcon country="MY" className="w-3.5" /> 全马免运 Free shipping</> : <><FlagIcon country="SG" className="w-3.5" /> 新加坡免运 Free shipping</>}
            </p>
            <Button
              disabled={items.length === 0}
              onClick={goCheckout}
              className="w-full bg-gradient-to-r from-primary via-gold to-accent text-primary-foreground font-bold text-base py-6"
            >
              前往结账 Checkout
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
