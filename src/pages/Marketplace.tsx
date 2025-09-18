import { useState } from "react";
import { Bot, Filter, MessageCircle, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomerCare from "@/components/CustomerCare";

const Marketplace = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Bots" },
    { id: "free", label: "Free Bots" },
    { id: "premium", label: "Premium Bots" },
    { id: "tools", label: "Analysis Tools" },
  ];

  const bots = [
    {
      id: 1,
      title: "Freedon Auto Trend Bot",
      description: "Advanced trend-following bot with intelligent market analysis and automated entry/exit strategies.",
      category: "free",
      rating: 4.8,
      downloads: "156",
      features: ["Auto Risk Management", "Real-time Analysis", "Stop Loss Protection"],
      isPremium: false,
    },
    {
      id: 2,
      title: "Version 1.6 Freedon Market Analysis",
      description: "Comprehensive market analysis system with advanced pattern recognition and signal generation.",
      category: "free",
      rating: 4.9,
      downloads: "189",
      features: ["Pattern Recognition", "Signal Generation", "Market Analytics"],
      isPremium: false,
    },
    {
      id: 3,
      title: "Market Switcher Bot",
      description: "Intelligent multi-market switching bot that adapts to changing market conditions automatically.",
      category: "free",
      rating: 4.7,
      downloads: "234",
      features: ["Multi-Market Support", "Auto-Switching", "Adaptive Strategy"],
      isPremium: false,
    },
    {
      id: 4,
      title: "Auto Recovery Bot",
      description: "Smart recovery system with advanced loss prevention and profit maximization algorithms.",
      category: "free",
      rating: 4.6,
      downloads: "98",
      features: ["Recovery Algorithm", "Loss Prevention", "Profit Maximization"],
      isPremium: false,
    },
    {
      id: 5,
      title: "THE BINOTEK 5 _ 2025",
      description: " Price: $500 USD (Ksh 65,000) ~💰With this bot you can make 95% daily profit | –95% win rate. ✅ User-Friendly & Easy to Use",
      category: "premium",
      rating: 4.9,
      downloads: "856",
      features: ["Latest Algorithms", "Enhanced Performance", "Premium Features"],
      isPremium: true,
    },
    {
      id: 6,
      title: "The ANEX - ENHANCED TRADING AI",
      description: "Price: $1,150 USD (Ksh 148,000) ~💰 Profit: 100%–500% | Top Pick 🔝 – Proven 100% Win Rate✅ Simple, Fast & Beginner-Friendly",
      category: "premium",
      rating: 4.8,
      downloads: "67",
      features: ["Multiple Strategies", "Advanced Analytics", "Professional Tools"],
      isPremium: true,
    },
  ];

  const filteredBots = activeFilter === "all" 
    ? bots 
    : bots.filter(bot => bot.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Trading <span className="text-gradient-gold">Marketplace</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover premium trading bots and analysis tools designed exclusively for Deriv traders
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? "btn-premium" : "btn-outline-gold"}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Bots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBots.map((bot) => (
              <Card key={bot.id} className="trading-card group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Bot className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                          {bot.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-muted-foreground">{bot.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{bot.downloads}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {bot.isPremium && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Premium
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {bot.description}
                  </CardDescription>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {bot.features.map((feature, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full btn-premium"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/254794432921?text=Hello! I'm interested in the ${bot.title}. Can you please provide more information?`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Get This Bot
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 trading-card">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team can create custom trading bots tailored to your specific strategies and requirements.
            </p>
            <Button 
              size="lg"
              className="btn-premium"
              asChild
            >
              <a 
                href="https://wa.me/254794432921?text=Hello! I need a custom trading bot. Can we discuss the requirements?" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Request Custom Bot
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <CustomerCare />
    </div>
  );
};

export default Marketplace;
