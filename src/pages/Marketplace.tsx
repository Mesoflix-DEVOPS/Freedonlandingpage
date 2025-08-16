import { useState } from "react";
import { Bot, Filter, MessageCircle, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      title: "Volatility 75 Scalper Bot",
      description: "High-frequency scalping bot optimized for Volatility 75 index with advanced risk management.",
      category: "free",
      rating: 4.8,
      downloads: "2.3k",
      features: ["Auto Risk Management", "Real-time Analysis", "Stop Loss Protection"],
      isPremium: false,
    },
    {
      id: 2,
      title: "Crash 1000 Recovery Bot",
      description: "Specialized recovery algorithm for Crash 1000 with martingale protection and profit optimization.",
      category: "premium",
      rating: 4.9,
      downloads: "1.8k",
      features: ["Recovery Algorithm", "Martingale Protection", "Profit Optimization"],
      isPremium: true,
    },
    {
      id: 3,
      title: "Binary Options Predictor",
      description: "AI-powered prediction system for binary options with 85%+ accuracy rate.",
      category: "tools",
      rating: 4.7,
      downloads: "3.1k",
      features: ["AI Predictions", "85%+ Accuracy", "Real-time Signals"],
      isPremium: false,
    },
    {
      id: 4,
      title: "Boom 500 Trend Bot",
      description: "Trend-following bot for Boom 500 index with intelligent entry and exit strategies.",
      category: "free",
      rating: 4.6,
      downloads: "1.9k",
      features: ["Trend Analysis", "Smart Entry/Exit", "Risk Control"],
      isPremium: false,
    },
    {
      id: 5,
      title: "Multi-Asset Portfolio Bot",
      description: "Professional portfolio management bot for multiple Deriv assets with advanced diversification.",
      category: "premium",
      rating: 4.9,
      downloads: "856",
      features: ["Multi-Asset Support", "Portfolio Optimization", "Advanced Analytics"],
      isPremium: true,
    },
    {
      id: 6,
      title: "Digit Analysis Tool",
      description: "Comprehensive digit frequency analysis and prediction tool for digit contracts.",
      category: "tools",
      rating: 4.8,
      downloads: "2.7k",
      features: ["Frequency Analysis", "Pattern Recognition", "Prediction Engine"],
      isPremium: false,
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
                        href="https://wa.me/1234567890" 
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
                href="https://wa.me/1234567890" 
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
    </div>
  );
};

export default Marketplace;