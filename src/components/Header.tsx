import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#benefits", labelZh: "功效", labelEn: "Benefits" },
    { href: "#products", labelZh: "产品", labelEn: "Products" },
    { href: "#about", labelZh: "关于", labelEn: "About" },
    { href: "#contact", labelZh: "联系", labelEn: "Contact" },
  ];

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3">
              <img src={logo} alt="魚鱗堂 Logo" className="h-12 w-auto" />
              <div className="hidden sm:block">
                <span className="text-3xl font-brand text-foreground block leading-tight">魚鱗堂</span>
                <span className="text-sm text-primary tracking-widest font-serif font-medium">YULIN TANG</span>
              </div>
            </a>
            <span className="hidden lg:inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              Online Store Only | 仅限网络销售
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
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
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-foreground" />
            ) : (
              <Menu className="w-7 h-7 text-foreground" />
            )}
          </button>
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
