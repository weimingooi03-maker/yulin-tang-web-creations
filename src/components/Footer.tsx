import logo from "@/assets/logo.png";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="魚鱗堂 Logo" className="h-12 w-auto brightness-0 invert" />
              <div>
                <h3 className="text-xl font-serif font-bold">魚鱗堂</h3>
                <p className="text-primary text-xs tracking-widest">YULIN TANG</p>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              深海鱼鳞胶原蛋白冻
              <br />
              Deep Sea Fish Scales Collagen Jelly
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">快速链接 Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#benefits" className="hover:text-background transition-colors">
                  产品功效 Benefits
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-background transition-colors">
                  我们的产品 Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  关于我们 About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  联系我们 Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">服务区域 Service Area</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>🇲🇾 马来西亚 Malaysia</li>
              <li>🇸🇬 新加坡 Singapore</li>
            </ul>
            <p className="text-primary text-sm mt-4 font-medium">
              全区域包邮 FREE Shipping
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">联系我们 Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <a 
                  href="https://wa.me/601158727742" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  011-5872 7742
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-blue-400" />
                <a 
                  href="https://facebook.com/Yulintangofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  Yulintangofficial
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400" />
                <a 
                  href="https://instagram.com/yulintang_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  yulintang_official
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/50">
          <p>© 2024 魚鱗堂 YULIN TANG. All rights reserved.</p>
          <p className="mt-2">
            深海鱼鳞胶原蛋白冻 - 🇲🇾 马来西亚 & 🇸🇬 新加坡 专供
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
