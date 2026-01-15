import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("您好！我想了解更多关于魚鱗堂产品的信息。\nHello! I would like to know more about YULIN TANG products.");
    window.open("https://wa.me/60123456789?text=" + message, "_blank");
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-border/50 bg-card hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                WhatsApp 咨询
              </h3>
              <p className="text-muted-foreground mb-6">
                点击下方按钮，直接通过WhatsApp联系我们
                <br />
                <span className="text-sm">Click below to chat with us on WhatsApp</span>
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
                  <p className="font-medium text-foreground">电话 Phone</p>
                  <p className="text-muted-foreground">+60 12-345 6789</p>
                  <p className="text-muted-foreground">+65 8765 4321</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">邮箱 Email</p>
                  <p className="text-muted-foreground">info@yulintang.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">服务区域 Service Area</p>
                  <p className="text-muted-foreground">马来西亚 Malaysia</p>
                  <p className="text-muted-foreground">新加坡 Singapore</p>
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
