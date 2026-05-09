import { DollarSign, TrendingUp, Users, ArrowRight, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomerCare from "@/components/CustomerCare";

const StartEarning = () => {
  const earningMethods = [
    {
      icon: Users,
      title: "Become a Deriv Affiliate",
      description: "Earn commissions by referring new traders to Deriv. Get paid for every successful referral.",
      benefits: [
        "Up to 45% revenue share",
        "Lifetime commissions",
        "Advanced tracking dashboard",
        "Marketing materials provided"
      ],
      cta: "Join as Affiliate",
      href: "https://track.deriv.com/_TH5LC8pLrKEKPDwCg-6bwGNd7ZgqdRLk/1/",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Open a Deriv Account",
      description: "Start trading with one of the world's leading online brokers with 24/7 trading opportunities.",
      benefits: [
        "Trade volatility indices 24/7",
        "Low minimum deposits",
        "Multiple trading platforms",
        "Professional support"
      ],
      cta: "Open Account",
      href: "https://track.deriv.com/_TH5LC8pLrKEKqFKZ7JdnQ2Nd7ZgqdRLk/1/",
      color: "accent"
    },
    {
      icon: Shield,
      title: "Already Have an Account?",
      description: "Access our premium trading tools and bots through our secure trading platform.",
      benefits: [
        "Free premium bots",
        "Advanced analysis tools",
        "24/7 community support",
        "Regular strategy updates"
      ],
      cta: "Start Trading",
      href: "https://bot.freedon.live",
      color: "secondary"
    }
  ];

  const stats = [
    { value: "$45K+", label: "Total Commissions Paid" },
    { value: "850+", label: "Active Affiliates" },
    { value: "95%", label: "Payout Success Rate" },
    { value: "24h", label: "Average Payout Time" }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Start <span className="text-gradient-gold">Earning</span> with Deriv
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to generate income through trading, affiliate partnerships, and our premium tools
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Earning Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {earningMethods.map((method, index) => (
              <Card key={index} className="trading-card group h-full">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full ${
                      method.color === 'primary' ? 'bg-primary/20' :
                      method.color === 'accent' ? 'bg-accent/20' :
                      'bg-secondary/20'
                    } group-hover:scale-110 transition-transform`}>
                      <method.icon className={`h-8 w-8 ${
                        method.color === 'primary' ? 'text-primary' :
                        method.color === 'accent' ? 'text-accent' :
                        'text-secondary-foreground'
                      }`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground mb-2">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {method.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full btn-premium group-hover:scale-105 transition-transform"
                    asChild
                  >
                    <a 
                      href={method.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {method.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Affiliate Program Details */}
          <div className="trading-card mb-16">
            <div className="text-center mb-8">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Deriv Affiliate Program
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join one of the most rewarding affiliate programs in the trading industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">How It Works:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Sign Up</h4>
                      <p className="text-sm text-muted-foreground">Create your affiliate account and get approved</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Promote</h4>
                      <p className="text-sm text-muted-foreground">Share your unique affiliate links and marketing materials</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Earn</h4>
                      <p className="text-sm text-muted-foreground">Get paid commissions for every successful referral</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Commission Structure:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                    <span className="text-foreground">Revenue Share</span>
                    <span className="font-bold text-primary">Up to 45%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                    <span className="text-foreground">Minimum Payout</span>
                    <span className="font-bold text-primary">$25</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                    <span className="text-foreground">Payment Frequency</span>
                    <span className="font-bold text-primary">Monthly</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                    <span className="text-foreground">Cookie Duration</span>
                    <span className="font-bold text-primary">Lifetime</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg"
                className="btn-hero"
                asChild
              >
                <a 
                  href="https://track.deriv.com/_TH5LC8pLrKEKPDwCg-6bwGNd7ZgqdRLk/1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Earning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Support CTA */}
          <div className="text-center trading-card">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team is available 24/7 to help you maximize your earning potential
            </p>
            <Button 
              className="btn-outline-gold"
              asChild
            >
              <a 
                href="https://wa.me/254794432921?text=Hello! I need help getting started with earning on Deriv. Can you guide me?" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get 24/7 Support
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

export default StartEarning;
