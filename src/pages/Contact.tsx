import { MessageCircle, Send, Twitter, Facebook, Instagram, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Get instant help from our expert team",
      contact: "+1 234 567 890",
      href: "https://wa.me/1234567890",
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
      contact: "+1 234 567 891",
      href: "tel:+1234567891",
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
      name: "Facebook",
      href: "https://facebook.com/freedon",
      icon: Facebook,
      handle: "Freedon Trading"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/freedon",
      icon: Instagram,
      handle: "@freedon.trading"
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name"
                          className="bg-input border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name"
                          className="bg-input border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What's this regarding?"
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        className="bg-input border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full btn-premium"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
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
                      <div>
                        <CardTitle className="text-lg text-foreground">
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
                        <span className="font-medium text-foreground">{method.contact}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{method.available}</span>
                      </div>
                      <Button 
                        className="w-full btn-premium"
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

              {/* Office Info */}
              <Card className="trading-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">Freedon Trading HQ</p>
                    <p className="text-muted-foreground text-sm">
                      123 Financial District<br />
                      Trading Plaza, Suite 400<br />
                      New York, NY 10004
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Social Media */}
          <div className="trading-card text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Follow Us on Social Media
            </h2>
            <p className="text-muted-foreground mb-8">
              Stay updated with the latest trading insights, market analysis, and platform updates
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-border hover:border-primary transition-colors">
                    <social.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-center">
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
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
    </div>
  );
};

export default Contact;