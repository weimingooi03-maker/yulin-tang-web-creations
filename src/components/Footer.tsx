const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">魚鱗堂</h3>
            <p className="text-primary text-sm tracking-widest mb-4">YULIN TANG</p>
            <p className="text-background/70 text-sm">
              您的天然胶原蛋白专家
              <br />
              Your Natural Collagen Expert
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
            <p className="text-background/50 text-xs mt-4">
              全区域配送 Nationwide Delivery
            </p>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/50">
          <p>© 2024 魚鱗堂 YULIN TANG. All rights reserved.</p>
          <p className="mt-2">
            Fish Scales Collagen - Premium Quality for Malaysia & Singapore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
