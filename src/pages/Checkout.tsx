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
    setErrors({});
    setSubmitting(true);

    const d = result.data;
    const lines: string[] = [];
    lines.push("🛒 *新订单 New Order*");
    lines.push("");
    lines.push("*订购商品 Items:*");
    items.forEach((item, idx) => {
      const price = region === "MY" ? item.priceMY : item.priceSG;
      const lineTotal = price * item.quantity;
      // Strip 配套 from English name per existing convention
      const en = item.nameEn.replace(/配套/g, "").trim();
      lines.push(
        `${idx + 1}. ${item.nameZh} / ${en} × ${item.quantity} = ${currencySymbol} ${lineTotal.toFixed(2)}`
      );
    });
    lines.push("");
    lines.push(`*小计 Subtotal:* ${currencySymbol} ${subtotal.toFixed(2)}`);
    lines.push(`*送货地区 Region:* ${region === "MY" ? "🇲🇾 Malaysia" : "🇸🇬 Singapore"}`);
    lines.push("");
    lines.push("*收货信息 Shipping Details:*");
    lines.push(`姓名 Name: ${d.name}`);
    lines.push(`电话 Phone: ${d.phone}`);
    if (d.email) lines.push(`邮箱 Email: ${d.email}`);
    lines.push(`地址 Address: ${d.address}`);
    lines.push(`城市 City: ${d.city}`);
    lines.push(`邮编 Postcode: ${d.postcode}`);
    lines.push(`州属 State: ${d.state}`);
    if (d.notes) {
      lines.push("");
      lines.push(`*备注 Notes:* ${d.notes}`);
    }
    lines.push("");
    lines.push("请协助确认订单与付款方式，谢谢！");
    lines.push("Please confirm the order and payment details. Thank you!");

    const message = encodeURIComponent(lines.join("\n"));
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
        <p className="text-muted-foreground mb-8">填写收货信息后，订单将通过 WhatsApp 发送给我们确认。</p>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-lg font-bold">收货信息 Shipping Info</h2>
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
                <div className="grid sm:grid-cols-3 gap-4">
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
                  <div>
                    <Label htmlFor="state">州属 State *</Label>
                    <Input id="state" value={form.state} onChange={set("state")} maxLength={60} />
                    {errors.state && <p className="text-xs text-destructive mt-1">{errors.state}</p>}
                  </div>
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

            <Button
              type="submit"
              disabled={submitting || items.length === 0}
              className="w-full bg-gradient-to-r from-primary via-gold to-accent text-primary-foreground font-bold text-lg py-6"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              通过 WhatsApp 确认订单 Confirm via WhatsApp
            </Button>
          </form>

          {/* Summary */}
          <div className="lg:col-span-2">
            <Card className="lg:sticky lg:top-6">
              <CardContent className="pt-6">
                <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                  <ShoppingBag className="w-5 h-5" /> 订单摘要 Order Summary
                </h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
