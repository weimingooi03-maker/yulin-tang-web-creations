import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product5 from "@/assets/product-5.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle } from "lucide-react";

const products = [
  {
    image: product2,
    nameZh: "魚鱗胶原蛋白粉",
    nameEn: "Fish Scales Collagen Powder",
    priceRM: "RM 168",
    priceSGD: "SGD 55",
    descZh: "每日一勺，轻松补充胶原蛋白",
    descEn: "One scoop daily for easy collagen supplement",
  },
  {
    image: product3,
    nameZh: "胶原蛋白胶囊",
    nameEn: "Collagen Capsules",
    priceRM: "RM 198",
    priceSGD: "SGD 65",
    descZh: "方便携带，随时随地补充",
    descEn: "Convenient capsules for on-the-go nutrition",
  },
  {
    image: product4,
    nameZh: "胶原蛋白饮品",
    nameEn: "Collagen Drink",
    priceRM: "RM 228",
    priceSGD: "SGD 75",
    descZh: "美味果味，轻松享用",
    descEn: "Delicious fruity flavor for easy consumption",
  },
  {
    image: product5,
    nameZh: "礼盒套装",
    nameEn: "Premium Gift Set",
    priceRM: "RM 388",
    priceSGD: "SGD 128",
    descZh: "精美包装，送礼首选",
    descEn: "Elegant packaging, perfect for gifting",
  },
];

const ProductsSection = () => {
  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`您好！我想订购 ${productName}。\nHello! I would like to order ${productName}.`);
    window.open(`https://wa.me/60123456789?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            我们的产品 Our Products
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            精选优质鱼鳞，采用先进工艺提取，确保最高品质
            <br />
            <span className="text-sm">
              Premium fish scales processed with advanced technology for the highest quality
            </span>
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button 
                  size="sm"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-primary text-primary-foreground"
                  onClick={() => handleWhatsApp(product.nameZh)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  立即订购
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1">
                  {product.nameZh}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.nameEn}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {product.descZh} | {product.descEn}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-primary">{product.priceRM}</p>
                    <p className="text-sm text-muted-foreground">{product.priceSGD}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => handleWhatsApp(product.nameZh)}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
