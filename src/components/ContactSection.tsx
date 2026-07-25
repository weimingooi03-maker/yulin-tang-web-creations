import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Facebook, Instagram, Award, FileCheck, Shield, Handshake } from "lucide-react";
import { FlagIcon } from "@/components/FlagIcon";

const ContactSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("您好！我想了解更多关于魚鱗堂深海胶原蛋白冻的信息。\nHello! I would like to know more about YULIN TANG Deep Sea Collagen Jelly.");
    window.open("https://wa.me/601158727742?text=" + message, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            联系我们 Contact Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            欢迎通过以下方式联系我们，我们将竭诚为您服务
            <br />
            <span className="text-base md:text-lg">
              Feel free to reach out to us through any of the following channels
            </span>
          </p>
          <div className="mt-6 p-6 bg-primary/5 rounded-2xl max-w-2xl mx-auto border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Handshake className="w-7 h-7 text-primary" />
              <p className="text-lg font-bold text-foreground">商务合作咨询</p>
            </div>
            <p className="text-base text-muted-foreground">
              如有任何代理、批发或商务合作意向，欢迎随时与我们联系洽谈。
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              For agency, wholesale, or business partnership inquiries, please feel free to contact us for discussion.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <Card className="border-border/50 bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                WhatsApp 咨询订购
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                点击下方按钮，直接通过WhatsApp联系我们下单
              </p>
              <p className="text-xl font-bold text-foreground mb-6">
                011-5872 7742
              </p>
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white w-full font-bold text-lg py-6"
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
              <h3 className="text-2xl font-bold text-foreground text-center mb-4">
                联系方式 Contact Info
              </h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">WhatsApp</p>
                  <p className="text-base text-muted-foreground">011-5872 7742</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">邮箱 Email</p>
                  <p className="text-base text-muted-foreground">yulintangofficial@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">Facebook</p>
                  <a 
                    href="https://facebook.com/Yulintangofficial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    @Yulintangofficial
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">Instagram</p>
                  <a 
                    href="https://instagram.com/yulintang_official" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    @yulintang_official
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">TikTok</p>
                  <a 
                    href="https://tiktok.com/@yulintangcollagenjelly" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    @YulinTang Collagen Jelly
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Service Area & Certification Card */}
          <Card className="border-border/50 bg-card hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground text-center mb-6">
                服务区域 & 认证
              </h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-5xl mb-2">🇲🇾 🇸🇬</p>
                  <p className="font-bold text-lg text-foreground">马来西亚 & 新加坡</p>
                  <p className="text-base text-muted-foreground">Malaysia & Singapore</p>
                  <p className="text-primary font-bold text-lg mt-2">全马 & 新加坡免运费</p>
                  <p className="text-sm text-muted-foreground">Free Shipping to All Malaysia & Singapore</p>
                </div>
                
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Shield className="w-7 h-7 text-primary" />
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-bold text-lg text-foreground text-center mb-2">MESTI & GMP 认证</p>
                  <p className="text-base text-muted-foreground text-center mb-4">
                    Malaysia MESTI & GMP Certified
                  </p>
                  <a 
                    href="/certifications/CERT_FOR_YLT.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <FileCheck className="w-5 h-5" />
                    <span className="text-base font-medium underline">查看认证证书 View Certificate</span>
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
