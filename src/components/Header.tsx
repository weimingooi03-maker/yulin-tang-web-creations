import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import logoImg from "@/assets/yulin-tang-logo-transparent.png";
import { useCart } from "@/contexts/CartContext";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { count, openCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { href: "#benefits", labelZh: "功效", labelEn: "Benefits" },
    { href: "#products", labelZh: "产品", labelEn: "Products" },
    { href: "#about", labelZh: "关于", labelEn: "About" },
    { href: "#contact", labelZh: "联系", labelEn: "Contact" },
  ];

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const CartButton = ({ className = "" }: { className?: string }) => (
    <button
      onClick={openCart}
      aria-label="购物车 Cart"
      className={`relative p-2 hover:bg-muted rounded-full transition-colors ${className}`}
    >
      <ShoppingCart className="w-6 h-6 text-foreground" />
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Centered Logo */}
          <a 
            href="#" 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          >
            <img 
              src={logoImg} 
              alt="魚鱗堂 YULIN TANG Logo" 
              width={480}
              height={480}
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 768px) 80px, 96px"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium"
              >
                {item.labelZh} <span className="text-primary">{item.labelEn}</span>
              </button>
            ))}
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base"
              onClick={() => scrollTo("#contact")}
            >
              立即订购
            </Button>
          </nav>

          {/* Right-side actions: cart always at the far right */}
          <div className="flex items-center gap-1 md:gap-2 md:pl-4">
            <CartButton />
            <button 
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7 text-foreground" />
              ) : (
                <Menu className="w-7 h-7 text-foreground" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left py-2 text-lg font-medium"
                >
                  {item.labelZh} <span className="text-primary">{item.labelEn}</span>
                </button>
              ))}
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-bold text-lg"
                onClick={() => scrollTo("#contact")}
              >
                立即订购 Order Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
