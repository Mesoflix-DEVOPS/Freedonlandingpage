import { Link } from "react-router-dom";
import { MessageCircle, Send, Twitter, Facebook, Instagram } from "lucide-react";
import freedonLogo from "@/assets/freedon-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Analysis Tools", href: "/analysis" },
    { name: "Start Earning", href: "/start-earning" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/1234567890",
      icon: MessageCircle,
    },
    {
      name: "Telegram",
      href: "https://t.me/freedon",
      icon: Send,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/freedon",
      icon: Twitter,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/freedon",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/freedon",
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src={freedonLogo} 
                  alt="Freedon" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-display font-bold text-gradient-gold">
                  FREEDON
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Exclusive trading tools for Deriv traders. Join our premium community 
                and access free bots, analysis tools, and 24/7 support to maximize 
                your trading potential.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">24/7 Support</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Support</span>
                </a>
                <a
                  href="https://t.me/freedon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Send className="h-4 w-4" />
                  <span>Telegram Channel</span>
                </a>
                <p className="text-xs text-muted-foreground">
                  Available 24/7 for all premium members
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © 2024 Freedon. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
              <span className="font-semibold">Disclaimer:</span> Freedon is an independent platform 
              for Deriv traders. Trading involves risk. Always trade responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;