import { BarChart3, PieChart, TrendingUp, Zap, Eye, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import CustomerCare from "@/components/CustomerCare";

const Analysis = () => {
  const tools = [
    {
      icon: PieChart,
      title: "Digit Frequency Analysis",
      description: "Advanced statistical analysis of digit patterns and frequencies across different time frames.",
      features: ["Real-time frequency tracking", "Historical pattern analysis", "Prediction algorithms"],
      accuracy: "87%",
      isNew: true,
    },
    {
      icon: TrendingUp,
      title: "Over/Under Probability",
      description: "Sophisticated probability calculations for over/under trades with market sentiment analysis.",
      features: ["Market sentiment analysis", "Probability calculations", "Risk assessment"],
      accuracy: "82%",
      isNew: false,
    },
    {
      icon: Target,
      title: "Pattern Prediction System",
      description: "AI-powered pattern recognition system that identifies profitable trading opportunities.",
      features: ["AI pattern recognition", "Multiple timeframe analysis", "Entry/exit signals"],
      accuracy: "85%",
      isNew: true,
    },
    {
      icon: BarChart3,
      title: "Volatility Index Analyzer",
      description: "Specialized tool for analyzing volatility indices with custom indicators and signals.",
      features: ["Custom volatility indicators", "Market volatility tracking", "Signal generation"],
      accuracy: "89%",
      isNew: false,
    },
    {
      icon: Eye,
      title: "Market Sentiment Scanner",
      description: "Real-time market sentiment analysis using advanced algorithms and news sentiment.",
      features: ["News sentiment analysis", "Social media monitoring", "Market mood tracking"],
      accuracy: "84%",
      isNew: false,
    },
    {
      icon: Zap,
      title: "Quick Trade Signals",
      description: "Instant trading signals with high-probability setups for immediate action.",
      features: ["Instant notifications", "High-probability setups", "Mobile alerts"],
      accuracy: "86%",
      isNew: true,
    },
  ];

  const benefits = [
    "Real-time market analysis",
    "AI-powered predictions",
    "Multiple asset coverage",
    "Mobile-friendly interface",
    "Historical backtesting",
    "24/7 monitoring",
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Advanced <span className="text-gradient-gold">Analysis Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-grade analysis tools designed to give you an edge in Deriv trading markets
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tools.map((tool, index) => (
              <Card key={index} className="trading-card group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <tool.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      {tool.isNew && (
                        <Badge className="bg-accent/20 text-accent border-accent/30">
                          New
                        </Badge>
                      )}
                      <Badge className="bg-chart-green/20 text-chart-green border-chart-green/30">
                        {tool.accuracy} Accuracy
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {tool.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full btn-premium"
                      asChild
                    >
                      <a 
                        href="https://freedon.live/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Access Tool
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="trading-card mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Why Our Analysis Tools Are Different
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built specifically for Deriv markets with years of trading experience and data analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-secondary/20 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Section */}
          <div className="trading-card text-center mb-16">
            <div className="max-w-3xl mx-auto">
              <Zap className="h-16 w-16 text-primary mx-auto mb-6 animate-glow-pulse" />
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Experience the Power
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                See our analysis tools in action with a free demo. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="btn-hero"
                  asChild
                >
                  <a 
                    href="https://freedon.live/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Free Demo Access
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="btn-outline-gold"
                  asChild
                >
                  <a 
                    href="https://deriv.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Open Trading Account
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Accuracy Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                <AnimatedCounter end={85} suffix="%+" />
              </div>
              <div className="text-muted-foreground">Average Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-muted-foreground">Analysis Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Market Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                <AnimatedCounter end={1} suffix="M+" />
              </div>
              <div className="text-muted-foreground">Data Points</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CustomerCare />
    </div>
  );
};

export default Analysis;