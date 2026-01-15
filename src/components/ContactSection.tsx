import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Facebook, Instagram, Award, FileCheck } from "lucide-react";

const ContactSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("您好！我想了解更多关于魚鱗堂深海胶原蛋白冻的信息。\nHello! I would like to know more about YULIN TANG Deep Sea Collagen Jelly.");
    window.open("https://wa.me/601158727742?text=" + message, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            联系我们 Contact Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            欢迎通过以下方式联系我们，我们将竭诚为您服务
            <br />
            <span className="text-sm">
              Feel free to reach out to us through any of the following channels
            </span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <Card className="border-border/50 bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                WhatsApp 咨询订购
              </h3>
              <p className="text-muted-foreground mb-4">
                点击下方按钮，直接通过WhatsApp联系我们下单
              </p>
              <p className="text-lg font-medium text-foreground mb-6">
                011-5872 7742
              </p>
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white w-full"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                立即咨询 Chat Now
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info Card */}
          <Card className="border-border/50 bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                联系方式 Contact Info
              </h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground">011-5872 7742</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">邮箱 Email</p>
                  <p className="text-muted-foreground text-sm">yulintang2003@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Facebook</p>
                  <a 
                    href="https://facebook.com/Yulintangofficial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    @Yulintangofficial
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Instagram</p>
                  <a 
                    href="https://instagram.com/yulintang_official" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    @yulintang_official
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Service Area & Certification Card */}
          <Card className="border-border/50 bg-card hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground text-center mb-6">
                服务区域 & 认证
              </h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-4xl mb-2">🇲🇾 🇸🇬</p>
                  <p className="font-medium text-foreground">马来西亚 & 新加坡</p>
                  <p className="text-sm text-muted-foreground">Malaysia & Singapore</p>
                  <p className="text-primary font-medium mt-2">全区域包邮 FREE Shipping</p>
                </div>
                
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-primary" />
                    <p className="font-medium text-foreground">马来西亚卫生部认证</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    KKM Malaysia MOH Certified Factory
                  </p>
                  <a 
                    href="/certifications/CERT_FOR_YLT.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span className="text-sm underline">查看认证证书 View Certificate</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
