import { Users, Target, Award, TrendingUp, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomerCare from "@/components/CustomerCare";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We believe in complete transparency in our tools, strategies, and results. No hidden fees, no false promises."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community where traders share knowledge, strategies, and help each other succeed."
    },
    {
      icon: TrendingUp,
      title: "Profitability",
      description: "Our primary focus is helping our members achieve consistent profitability through proven strategies and tools."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously developing cutting-edge analysis tools and trading bots to stay ahead of the market."
    }
  ];

  const achievements = [
    { value: "1,200+", label: "Happy Traders" },
    { value: "25+", label: "Trading Bots Created" },
    { value: "87%", label: "Success Rate" },
    { value: "3 Years", label: "Industry Experience" }
  ];

  const teamMembers = [
    {
      name: "CEO Freddy",
      role: "Founder & Chief Executive",
      description: "With over 5 years in algorithmic trading and a passion for democratizing trading tools, Freddy founded Freedon to provide exclusive resources for Deriv traders."
    },
    {
      name: "Development Team",
      role: "Bot & Analysis Developers",
      description: "Our team of experienced developers and quantitative analysts work tirelessly to create and optimize trading algorithms for maximum performance."
    },
    {
      name: "Support Team",
      role: "24/7 Customer Success",
      description: "Our dedicated support team ensures every member gets the help they need, when they need it, to succeed in their trading journey."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              About <span className="text-gradient-gold">Freedon</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize premium trading tools and make successful trading accessible to everyone
            </p>
          </div>

          {/* Story Section */}
          <div className="trading-card mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Freedon was born from a simple yet powerful vision: to provide every Deriv trader 
                    with access to premium trading tools and strategies that were previously available 
                    only to institutional traders and wealthy individuals.
                  </p>
                  <p>
                Founded by CEO Freddy, a passionate trader with years of experience in algorithmic 
                trading and market analysis, Freedon has grown from a small project to a thriving 
                community of over 1,200 active traders.
                  </p>
                  <p>
                    We believe that successful trading shouldn't be limited by your background or 
                    financial status. That's why we've made it our mission to provide free access 
                    to premium bots, advanced analysis tools, and expert support to anyone serious 
                    about trading success.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-6 bg-card/50 rounded-lg border border-border">
                    <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="trading-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  To democratize access to premium trading tools and education, empowering 
                  every Deriv trader with the resources they need to achieve consistent 
                  profitability and financial independence through smart, data-driven trading strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="trading-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  To become the world's leading platform for Deriv trading excellence, 
                  where traders of all levels can access institutional-quality tools, 
                  learn from experts, and build sustainable trading careers in a supportive community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and every decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="trading-card text-center group">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-sm">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate individuals behind Freedon's success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="trading-card text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Future Vision */}
          <div className="trading-card text-center">
            <div className="max-w-4xl mx-auto">
              <Zap className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                The Future of Trading
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're constantly innovating and expanding our platform. Our roadmap includes 
                AI-powered market prediction, advanced portfolio management tools, and 
                expanded support for more trading instruments. Join us on this exciting journey 
                to revolutionize online trading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="btn-hero"
                  asChild
                >
                  <a 
                    href="https://track.deriv.com/_TH5LC8pLrKFBMfcXPt5VjGNd7ZgqdRLk/1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Join Our Community
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="btn-outline-gold"
                  asChild
                >
                  <a 
                    href="https://wa.me/254794432921?text=Hello! I want to contact your team for more information about Freedon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Contact Our Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CustomerCare />
    </div>
  );
};

export default About;