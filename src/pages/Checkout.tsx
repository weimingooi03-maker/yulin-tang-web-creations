import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MessageCircle, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "请输入姓名").max(80),
  phone: z.string().trim().min(6, "请输入有效电话").max(30),
  email: z.string().trim().email("邮箱格式不正确").max(120).optional().or(z.literal("")),
  address: z.string().trim().min(5, "请输入完整地址").max(300),
  city: z.string().trim().min(1, "请输入城市").max(60),
  postcode: z.string().trim().min(3, "请输入邮编").max(15),
  state: z.string().trim().max(60).optional().or(z.literal("")),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

const WA_NUMBER = "601158727742";

const Checkout = () => {
  const { items, subtotal, currencySymbol, region, setRegion, clear, updateQty, removeItem } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
    state: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const composeMessage = (d: z.infer<typeof schema>) => {
    const itemText = items
      .map((item, idx) => {
        const price = region === "MY" ? item.priceMY : item.priceSG;
        const lineTotal = price * item.quantity;
        // Strip 配套 from English name per existing convention
        const en = item.nameEn.replace(/配套/g, "").trim();
        return `${idx + 1}. ${item.nameZh} / ${en} × ${item.quantity} = ${currencySymbol} ${lineTotal.toFixed(2)}`;
      })
      .join("； ");

    return `🛒 新订单 New Order | 您好，我想下单：${itemText}。合计总额 Total：${currencySymbol} ${subtotal.toFixed(2)}。送货地区 Region：${region === "MY" ? "🇲🇾 Malaysia" : "🇸🇬 Singapore"}。收货信息 Shipping：姓名 Name：${d.name}，电话 Phone：${d.phone}${d.email ? `，邮箱 Email：${d.email}` : ""}，地址 Address：${d.address}，城市 City：${d.city}，邮编 Postcode：${d.postcode}${region === "MY" && d.state ? `，州属 State：${d.state}` : ""}${d.notes ? `，备注 Notes：${d.notes}` : ""}。请协助确认订单与付款方式，谢谢！Please confirm the order and payment details. Thank you!`;
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast({ title: "购物车是空的", description: "请先添加商品", variant: "destructive" });
      return;
    }
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      toast({ title: "请检查表单", description: "有必填项未填写", variant: "destructive" });
      return;
    }
    if (region === "MY" && !result.data.state.trim()) {
      setErrors({ state: "请输入州属" });
      toast({ title: "请检查表单", description: "马来西亚订单请填写州属", variant: "destructive" });
      return;
    }
    setErrors({});
    setSubmitting(true);

    const d = result.data;
    const message = encodeURIComponent(composeMessage(d));
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");

    toast({
      title: "订单已发送到 WhatsApp",
      description: "我们会尽快与您确认订单详情。",
    });
    clear();
    setSubmitting(false);
    setTimeout(() => navigate("/"), 800);
  };

  return (
    <div className="min-h-screen bg-background pt-6 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> 返回 Back
        </Link>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">结账 Checkout</h1>
        <p className="text-muted-foreground mb-6">简单 3 步完成订单，客服将透过 WhatsApp 与您确认。</p>

        {/* Step indicator */}
        <div className="relative flex items-start justify-between gap-2 mb-8">
          {[
            { num: "1", zh: "检查订单", en: "Check Order" },
            { num: "2", zh: "填资料", en: "Fill Details" },
            { num: "3", zh: "WhatsApp 确认", en: "Confirm" },
          ].map((s) => (
            <div key={s.num} className="flex-1 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-2">
                {s.num}
              </div>
              <p className="text-sm font-semibold leading-tight">{s.zh}</p>
              <p className="text-xs text-muted-foreground leading-tight">{s.en}</p>
            </div>
          ))}
          <div className="hidden sm:block absolute top-5 left-[16.66%] right-[16.66%] h-0.5 bg-border -z-10" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Order Summary */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</div>
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" /> 订单摘要 Order Summary
                </h2>
              </div>
              {items.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>购物车是空的</p>
                  <Link to="/#products" className="text-primary underline text-sm">继续购物 Continue Shopping</Link>
                </div>
              ) : (
                <>
                  <div className="divide-y">
                    {items.map((item) => {
                      const price = region === "MY" ? item.priceMY : item.priceSG;
                      return (
                        <div key={item.id} className="py-3 flex gap-3">
                          <img src={item.image} alt={item.nameEn} className="w-14 h-14 rounded object-cover border" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">{item.nameZh}</p>
                            <p className="text-xs text-muted-foreground">{item.qtyLabel}</p>
                            <div className="flex items-center justify-between mt-1">
                              <div className="inline-flex items-center border rounded text-xs">
                                <button type="button" onClick={() => updateQty(item.id, item.quantity - 1)} className="px-2 py-0.5">-</button>
                                <span className="px-2">{item.quantity}</span>
                                <button type="button" onClick={() => updateQty(item.id, item.quantity + 1)} className="px-2 py-0.5">+</button>
                              </div>
                              <span className="text-sm font-bold text-primary">
                                {currencySymbol} {(price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <button type="button" onClick={() => removeItem(item.id)} className="text-xs text-muted-foreground hover:text-destructive">
                            移除
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t mt-4 pt-4 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">运费 Shipping</span>
                      <span>免运 Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span>合计 Total</span>
                      <span className="text-primary">{currencySymbol} {subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Step 2: Shipping Info */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</div>
                <h2 className="text-lg font-bold">收货信息 Shipping Info</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">姓名 Name *</Label>
                  <Input id="name" value={form.name} onChange={set("name")} maxLength={80} />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">电话 Phone *</Label>
                  <Input id="phone" value={form.phone} onChange={set("phone")} maxLength={30} placeholder="+60 / +65" />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="email">邮箱 Email (选填)</Label>
                <Input id="email" type="email" value={form.email} onChange={set("email")} maxLength={120} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="address">详细地址 Address *</Label>
                <Input id="address" value={form.address} onChange={set("address")} maxLength={300} />
                {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
              </div>
              <div className={`grid gap-4 ${region === "MY" ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
                <div>
                  <Label htmlFor="city">城市 City *</Label>
                  <Input id="city" value={form.city} onChange={set("city")} maxLength={60} />
                  {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
                </div>
                <div>
                  <Label htmlFor="postcode">邮编 Postcode *</Label>
                  <Input id="postcode" value={form.postcode} onChange={set("postcode")} maxLength={15} />
                  {errors.postcode && <p className="text-xs text-destructive mt-1">{errors.postcode}</p>}
                </div>
                {region === "MY" && (
                  <div>
                    <Label htmlFor="state">州属 State *</Label>
                    <Input id="state" value={form.state} onChange={set("state")} maxLength={60} />
                    {errors.state && <p className="text-xs text-destructive mt-1">{errors.state}</p>}
                  </div>
                )}
              </div>
              <div>
                <Label>送货地区 Region *</Label>
                <div className="inline-flex rounded-full border border-border overflow-hidden mt-2">
                  <button
                    type="button"
                    onClick={() => setRegion("MY")}
                    className={`px-4 py-2 text-sm font-medium ${region === "MY" ? "bg-primary text-primary-foreground" : ""}`}
                  >
                    🇲🇾 Malaysia
                  </button>
                  <button
                    type="button"
                    onClick={() => setRegion("SG")}
                    className={`px-4 py-2 text-sm font-medium ${region === "SG" ? "bg-primary text-primary-foreground" : ""}`}
                  >
                    🇸🇬 Singapore
                  </button>
                </div>
              </div>
              <div>
                <Label htmlFor="notes">备注 Notes (选填)</Label>
                <Textarea id="notes" value={form.notes} onChange={set("notes")} maxLength={500} rows={3} />
              </div>
            </CardContent>
          </Card>

          {/* Step 3: WhatsApp confirm */}
          <div className="flex items-start gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">3</div>
            <div>
              <h2 className="text-lg font-bold">发送 WhatsApp 确认 Send WhatsApp Confirmation</h2>
              <p className="text-sm text-muted-foreground">点击按钮后系统会自动串接 WhatsApp，把订单与收货资料一起传给客服。</p>
            </div>
          </div>
          <Button
            type="submit"
            disabled={submitting || items.length === 0}
            className="w-full bg-gradient-to-r from-primary via-gold to-accent text-primary-foreground font-bold text-lg py-6"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            通过 WhatsApp 确认订单 Confirm via WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
