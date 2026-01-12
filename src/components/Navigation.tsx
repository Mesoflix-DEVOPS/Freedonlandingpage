import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import freedonLogo from "@/assets/freedon-logo-new.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Start Earning", href: "/start-earning" },
    { name: "Analysis Tools", href: "/analysis" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={freedonLogo} 
              alt="Freedon" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-display font-bold text-gradient-gold">
              FREEDON
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="btn-outline-gold"
              asChild
            >
              <a 
                href="https://dbot.freedon.live/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Trading
              </a>
            </Button>
            <Button 
              size="sm"
              className="btn-premium"
              asChild
            >
              <a 
                href="https://deriv.partners/rx?ca=339550df28492e&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU16814" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Open Deriv Account
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full btn-outline-gold"
                  asChild
                >
                  <a 
                    href="https://dbot.freedon.live/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Start Trading
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="w-full btn-premium"
                  asChild
                >
                  <a 
                    href="https://track.deriv.com/_TH5LC8pLrKEKqFKZ7JdnQ2Nd7ZgqdRLk/1/m" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Open Deriv Account
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
