import logo from "@/assets/logo.png";
import footerLogo from "@/assets/footer-logo.png";
import { Facebook, Instagram, MessageCircle, Mail, ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={footerLogo} alt="魚鱗堂 YULIN TANG Logo" className="h-24 w-auto mb-4" />
            <p className="text-background/70 text-base">
              深海鱼鳞胶原蛋白冻
              <br />
              Deep Sea Fish Scales Collagen Jelly
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">快速链接 Quick Links</h4>
            <ul className="space-y-3 text-base text-background/70">
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
            <h4 className="font-bold text-lg mb-4">服务区域 Service Area</h4>
            <ul className="space-y-3 text-base text-background/70">
              <li>🇲🇾 马来西亚 Malaysia</li>
              <li>🇸🇬 新加坡 Singapore</li>
            </ul>
            <p className="text-primary text-base mt-4 font-bold">
              全西马 & 新加坡免运费
            </p>
            <p className="text-background/60 text-sm">
              东马运费另计
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">联系我们 Contact</h4>
            <ul className="space-y-4 text-base text-background/70">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <a 
                  href="https://wa.me/601158727742" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  011-5872 7742
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:yulintangofficial@gmail.com"
                  className="hover:text-background transition-colors"
                >
                  yulintangofficial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="w-5 h-5 text-blue-400" />
                <a 
                  href="https://facebook.com/Yulintangofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  Yulintangofficial
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-pink-400" />
                <a 
                  href="https://instagram.com/yulintang_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  yulintang_official
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-orange-500" />
                <a 
                  href="https://my.shp.ee/Jyk78vr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  Shopee 虾皮商城
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-base text-background/50">
          <p>© 2026 魚鱗堂 YULIN TANG. All rights reserved.</p>
          <p className="mt-2">
            深海鱼鳞胶原蛋白冻 - 🇲🇾 马来西亚 & 🇸🇬 新加坡 专供
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
