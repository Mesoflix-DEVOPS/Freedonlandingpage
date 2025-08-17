import { MessageCircle, Send, Twitter, Facebook, Instagram, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomerCare from "@/components/CustomerCare";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Get instant help from our expert team",
      contact: "+254794432921",
      href: "https://wa.me/254794432921",
      available: "24/7",
      color: "primary"
    },
    {
      icon: Send,
      title: "Telegram Channel",
      description: "Join our community and get updates",
      contact: "@freedon_official",
      href: "https://t.me/freedon",
      available: "24/7",
      color: "accent"
    },
    {
      icon: Phone,
      title: "Priority Support",
      description: "Premium members exclusive line",
      contact: "+254794432921",
      href: "tel:+254794432921",
      available: "Mon-Fri 9AM-6PM",
      color: "secondary"
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/freedon",
      icon: Twitter,
      handle: "@freedon_trading"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ceofredrick?igsh=bHRteGFhbzJicmhv",
      icon: Instagram,
      handle: "@ceofredrick"
    },
    {
      name: "TikTok", 
      href: "https://www.tiktok.com/@ceofredrickofficial?_t=ZM-8yv5jG1xZFI&_r=1",
      icon: MessageCircle,
      handle: "@ceofredrickofficial"
    },
    {
      name: "Telegram",
      href: "https://t.me/+7WdulCdgeFQxOWQ0",
      icon: Send,
      handle: "Freedon Trading"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Get In <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expert team is available 24/7 to help you with trading strategies, technical support, and account management
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="trading-card group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${
                      method.color === 'primary' ? 'bg-primary/20' :
                      method.color === 'accent' ? 'bg-accent/20' :
                      'bg-secondary/20'
                    } group-hover:scale-110 transition-transform`}>
                      <method.icon className={`h-6 w-6 ${
                        method.color === 'primary' ? 'text-primary' :
                        method.color === 'accent' ? 'text-accent' :
                        'text-secondary-foreground'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg text-foreground">
                        {method.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">
                        {method.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">Contact:</span>
                      <span className="font-medium text-foreground text-sm">{method.contact}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{method.available}</span>
                    </div>
                    <Button 
                      className="w-full btn-premium text-sm"
                      asChild
                    >
                      <a 
                        href={method.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Contact Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media */}
          <div className="trading-card text-center">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4">
              Follow Us on Social Media
            </h2>
            <p className="text-muted-foreground mb-8 text-sm sm:text-base">
              Stay updated with the latest trading insights, market analysis, and platform updates
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-lg border border-border hover:border-primary transition-colors">
                    <social.icon className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-center">
                      <div className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CustomerCare />
    </div>
  );
};

export default Contact;