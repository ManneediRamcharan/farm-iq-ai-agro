import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  Award,
  Camera,
  Tractor,
  CloudRain,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Phone,
  MessageCircle
} from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const LandingPage = () => {
  const [language, setLanguage] = useState("en");

  const features = [
    {
      icon: Brain,
      title: "AI Crop Selection",
      description: "Get personalized crop recommendations based on soil, weather, and market data to maximize profits.",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: Camera,
      title: "Disease Detection",
      description: "Simply take a photo of your crop to instantly identify diseases and get treatment recommendations.",
      gradient: "from-accent to-accent/80"
    },
    {
      icon: FileText,
      title: "Government Schemes",
      description: "Discover and apply for subsidies, loans, and government schemes available for your farming needs.",
      gradient: "from-success to-success/80"
    },
    {
      icon: ShoppingCart,
      title: "Marketplace",
      description: "Buy seeds, fertilizers, and equipment at competitive prices. Sell your produce directly to buyers.",
      gradient: "from-warning to-warning/80"
    },
    {
      icon: Tractor,
      title: "Equipment Rental",
      description: "Rent tractors, drones, and modern farming equipment when you need them, without huge investments.",
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: CloudRain,
      title: "Weather Alerts",
      description: "Get real-time weather updates, storm warnings, and optimal planting/harvesting recommendations.",
      gradient: "from-muted-foreground to-muted"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Scan Your Crops",
      description: "Take photos of your crops or fields using your smartphone camera",
      icon: Camera
    },
    {
      step: "2", 
      title: "Get AI Insights",
      description: "Our AI analyzes your data and provides profit predictions and recommendations",
      icon: Brain
    },
    {
      step: "3",
      title: "Take Action",
      description: "Connect to services, buy supplies, rent equipment, or access government schemes",
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Punjab",
      quote: "FarmIQ helped me increase my wheat yield by 35% and reduced crop diseases. The profit prediction feature is amazing!",
      rating: 5,
      improvement: "35% yield increase"
    },
    {
      name: "Priya Sharma",
      location: "Maharashtra", 
      quote: "The government schemes checker helped me get ₹50,000 subsidy that I didn't know existed. Game changer!",
      rating: 5,
      improvement: "₹50K subsidy received"
    },
    {
      name: "Ahmed Hassan",
      location: "Karnataka",
      quote: "Disease detection saved my tomato crop. Early identification and treatment prevented major losses.",
      rating: 5,
      improvement: "Saved entire crop"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI crop disease detection?",
      answer: "Our AI has been trained on millions of crop images and achieves 95%+ accuracy in detecting common diseases and pests affecting Indian crops."
    },
    {
      question: "Do I need internet connection to use FarmIQ?",
      answer: "While some features need internet, key functions like crop scanning and basic recommendations work offline. Data syncs when connection is available."
    },
    {
      question: "Is FarmIQ available in my local language?",
      answer: "Yes! FarmIQ supports 15+ Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, and more, with audio support for farmers who prefer listening."
    },
    {
      question: "How much does FarmIQ cost?",
      answer: "FarmIQ is free to download and use basic features. Premium features like advanced analytics and priority support are available for ₹99/month."
    },
    {
      question: "Can FarmIQ help me sell my crops at better prices?",
      answer: "Yes! Our marketplace connects you directly with buyers, eliminating middlemen. Plus, our price prediction helps you time your sales for maximum profit."
    }
  ];

  const stats = [
    { number: "2L+", label: "Happy Farmers" },
    { number: "40%", label: "Avg. Profit Increase" },
    { number: "95%", label: "Disease Detection Accuracy" },
    { number: "15+", label: "Languages Supported" }
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
                  <SelectItem value="hi">हिंदी</SelectItem>
                  <SelectItem value="ta">தமிழ்</SelectItem>
                  <SelectItem value="te">తెలుగు</SelectItem>
                  <SelectItem value="bn">বাংলা</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline">Login</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-success/5">        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                🌾 AI-Powered Smart Farming Platform
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Smarter Farming,{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Higher Profits
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your farming with AI-driven crop selection, instant disease detection, 
                  profit predictions, and direct access to markets, equipment, and government schemes.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download FarmIQ App
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Hero Image/Illustration Placeholder */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="flex justify-center space-x-4 mb-8">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center">
                      <Smartphone className="h-10 w-10 text-primary" />
                    </div>
                    <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center">
                      <Camera className="h-10 w-10 text-accent" />
                    </div>
                    <div className="w-20 h-20 bg-success/20 rounded-2xl flex items-center justify-center">
                      <Sprout className="h-10 w-10 text-success" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">Farmers using AI technology in fields</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
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

      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              🚀 Powerful Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Everything You Need for Smart Farming
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI crop recommendations to instant disease detection, FarmIQ provides 
              comprehensive tools to boost your farming success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-success/10 text-success border-success/20">
              📱 Simple Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              How FarmIQ Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started in just 3 simple steps and transform your farming experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-10 -right-12 h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact/Value Proposition Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-warning/10 text-warning border-warning/20">
                  💰 Proven Results
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Real Impact for Real Farmers
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of farmers who have transformed their farming 
                  with FarmIQ's AI-powered solutions.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">40% Higher Profits</h3>
                    <p className="text-muted-foreground">Smart crop selection and timing increases average farmer profits significantly</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">70% Reduced Crop Losses</h3>
                    <p className="text-muted-foreground">Early disease detection and weather alerts prevent major crop failures</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Easy Access to Subsidies</h3>
                    <p className="text-muted-foreground">Discover and apply for government schemes you never knew existed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-success/10 to-primary/10 rounded-3xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-background rounded-2xl p-6 text-center shadow-lg">
                    <DollarSign className="h-8 w-8 text-success mx-auto mb-2" />
                    <div className="text-2xl font-bold text-success">+40%</div>
                    <div className="text-sm text-muted-foreground">Profit Increase</div>
                  </div>
                  <div className="bg-background rounded-2xl p-6 text-center shadow-lg">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">-70%</div>
                    <div className="text-sm text-muted-foreground">Crop Losses</div>
                  </div>
                  <div className="bg-background rounded-2xl p-6 text-center shadow-lg">
                    <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent">2L+</div>
                    <div className="text-sm text-muted-foreground">Happy Farmers</div>
                  </div>
                  <div className="bg-background rounded-2xl p-6 text-center shadow-lg">
                    <Star className="h-8 w-8 text-warning mx-auto mb-2" />
                    <div className="text-2xl font-bold text-warning">95%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              💬 Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              What Farmers Say About FarmIQ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real testimonials from farmers across India who transformed their farming with FarmIQ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-0 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                      {testimonial.improvement}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              ❓ Common Questions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about FarmIQ, answered in simple language
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-muted rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Ready to Start Your Smart Farming Journey?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join over 200,000 farmers who are already using FarmIQ to increase profits, 
            reduce losses, and farm smarter. Download the app today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-16 px-10 text-lg bg-white text-primary hover:bg-white/90 shadow-xl">
              <Smartphone className="mr-3 h-6 w-6" />
              Download FarmIQ App
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-2 border-white text-white hover:bg-white/20">
              <Phone className="mr-3 h-6 w-6" />
              Request Demo Call
            </Button>
          </div>

          <p className="text-white/70 text-sm">
            ✅ Free to download • ✅ Works offline • ✅ 15+ languages supported
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">FarmIQ</span>
              </div>
              <p className="text-background/70">
                Empowering farmers with AI technology for smarter, more profitable farming.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <div className="space-y-2 text-background/70">
                <div>About Us</div>
                <div>Features</div>
                <div>Pricing</div>
                <div>Success Stories</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Support</h3>
              <div className="space-y-2 text-background/70">
                <div>Help Center</div>
                <div>Contact Support</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contact</h3>
              <div className="space-y-2 text-background/70">
                <div>📧 support@farmiq.com</div>
                <div>📞 1800-123-FARM</div>
                <div>🌐 Available in 15+ languages</div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/70 mb-4 md:mb-0">
              © 2024 FarmIQ. All rights reserved. Built for Indian farmers with ❤️
            </div>
            <div className="flex space-x-6 text-background/70">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="h-16 w-16 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;