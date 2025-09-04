import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Sprout, 
  Shield, 
  ShoppingCart, 
  FileText, 
  TrendingUp, 
  Smartphone,
  Leaf,
  Brain,
  Users,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const LandingPage = () => {
  const [language, setLanguage] = useState("en");

  const features = [
    {
      icon: Brain,
      title: "AI Crop Prediction",
      description: "Get intelligent crop recommendations based on soil conditions, weather, and market trends.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Shield,
      title: "Disease Detection",
      description: "Upload crop images and get instant AI-powered disease identification and treatment suggestions.",
      gradient: "from-accent to-warning"
    },
    {
      icon: ShoppingCart,
      title: "Smart Marketplace",
      description: "Connect directly with buyers and sellers. Get fair prices for your produce.",
      gradient: "from-success to-primary"
    },
    {
      icon: FileText,
      title: "Government Schemes",
      description: "Stay updated with latest government schemes and subsidies available for farmers.",
      gradient: "from-warning to-accent"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Farmers" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "30+", label: "Crop Types" },
    { number: "24/7", label: "AI Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">FarmIQ</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                  <SelectItem value="ta">Tamil</SelectItem>
                  <SelectItem value="te">Telugu</SelectItem>
                  <SelectItem value="bn">Bengali</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline">Login</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay" 
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🌾 AI-Powered Smart Farming
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Smart Farming in{" "}
              <span className="bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">
                Your Language
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
              Empower your farming with AI-driven insights, crop predictions, disease detection, 
              and direct market access. All in your preferred language.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hover-lift">
                <Smartphone className="mr-2 h-5 w-5" />
                Start Farming Smart
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">🚀 Powerful Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need to Farm Smarter
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI-powered predictions to real-time weather alerts, 
              FarmIQ provides comprehensive tools for modern farming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:animate-pulse-glow`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of farmers who are already using FarmIQ to increase their yields 
            and profits with smart, data-driven farming decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Award className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-6 w-6" />
              <span className="text-lg font-semibold">FarmIQ</span>
            </div>
            
            <div className="text-sm text-background/70">
              © 2024 FarmIQ. Empowering farmers with AI technology.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;