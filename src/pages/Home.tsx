import { ArrowRight, Bot, BarChart3, Users, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TradingViewWidget from "@/components/TradingViewWidget";
import CustomerCare from "@/components/CustomerCare";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  const features = [
    {
      icon: Bot,
      title: "Free Premium Bots",
      description: "Access exclusive trading bots designed for Deriv markets, completely free for our community members.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analysis Tools",
      description: "Unique digit frequency analysis, probability insights, and pattern prediction systems.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance from our expert team via WhatsApp and Telegram.",
    },
    {
      icon: Users,
      title: "Premium Community",
      description: "Join an exclusive network of successful Deriv traders sharing strategies and insights.",
    },
  ];

  const stats = [
    { value: <AnimatedCounter end={1.2} suffix="K+" />, label: "Active Traders" },
    { value: <AnimatedCounter end={25} suffix="+" />, label: "Trading Bots" },
    { value: "24/7", label: "Support" },
    { value: <AnimatedCounter end={98.5} suffix="%" />, label: "Uptime" },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="text-gradient-gold">Exclusive Trading Tools</span>
              <br />
              <span className="text-foreground">for Deriv Traders</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join Freedon's premium community and access free bots, advanced analysis tools, 
              and 24/7 support to maximize your trading potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="btn-hero"
                asChild
              >
                <a 
                  href="https://track.deriv.com/_TH5LC8pLrKEKqFKZ7JdnQ2Nd7ZgqdRLk/1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Open Deriv Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-outline-gold"
                asChild
              >
                  <a 
                    href="https://dbot.freedon.live" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                  Already have account? Start trading now
                </a>
              </Button>
            </div>

            {/* Live TradingView Ticker */}
            <div className="mb-8">
              <TradingViewWidget isTickerTape={true} height="60" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient-gold">Freedon</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience premium trading tools designed exclusively for serious Deriv traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="trading-card group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold-subtle">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-12 w-12 text-primary animate-glow-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of successful traders who trust Freedon for their Deriv trading journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="btn-premium"
              asChild
            >
              <a 
                href="https://track.deriv.com/_TH5LC8pLrKEKqFKZ7JdnQ2Nd7ZgqdRLk/1/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join Freedon Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-outline-gold"
              asChild
            >
              <a 
                href="https://wa.me/254794432921" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get 24/7 Support
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CustomerCare />
    </div>
  );
};

export default Home;
