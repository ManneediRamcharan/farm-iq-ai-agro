import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart, 
  Leaf, 
  ShoppingCart, 
  Truck, 
  BookOpen, 
  CloudRain,
  Menu,
  Bell,
  User,
  Settings,
  MessageCircle,
  TrendingUp,
  AlertTriangle,
  Sprout,
  ThermometerSun
} from "lucide-react";
import CropRecommendation from "./modules/CropRecommendation";
import DiseaseDetection from "./modules/DiseaseDetection";
import Marketplace from "./modules/Marketplace";
import LearningHub from "./modules/LearningHub";
import WeatherAlerts from "./modules/WeatherAlerts";
import ChatBot from "./ChatBot";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [language, setLanguage] = useState("en");

  const modules = [
    { id: "dashboard", icon: BarChart, label: "Dashboard", badge: null },
    { id: "crop-recommendation", icon: Sprout, label: "Crop Recommendation", badge: "AI" },
    { id: "disease-detection", icon: Leaf, label: "Disease Detection", badge: "Smart" },
    { id: "marketplace", icon: ShoppingCart, label: "Marketplace", badge: "New" },
    { id: "learning-hub", icon: BookOpen, label: "Learning Hub", badge: "Popular" },
    { id: "weather-alerts", icon: CloudRain, label: "Weather & Alerts", badge: "Live" },
  ];

  const dashboardStats = [
    {
      title: "Today's Weather",
      value: "28°C",
      subvalue: "Partly Cloudy",
      icon: ThermometerSun,
      trend: "+2°C from yesterday",
      color: "from-warning to-accent"
    },
    {
      title: "Crop Health Score",
      value: "92%",
      subvalue: "Excellent",
      icon: Leaf,
      trend: "+5% this week",
      color: "from-success to-primary"
    },
    {
      title: "Market Price Alert",
      value: "₹45/kg",
      subvalue: "Tomatoes",
      icon: TrendingUp,
      trend: "+8% from last week",
      color: "from-primary to-primary-glow"
    },
    {
      title: "Pending Tasks",
      value: "3",
      subvalue: "Due Today",
      icon: AlertTriangle,
      trend: "2 completed today",
      color: "from-accent to-warning"
    }
  ];

  const renderModuleContent = () => {
    switch (activeModule) {
      case "crop-recommendation":
        return <CropRecommendation />;
      case "disease-detection":
        return <DiseaseDetection />;
      case "marketplace":
        return <Marketplace />;
      case "learning-hub":
        return <LearningHub />;
      case "weather-alerts":
        return <WeatherAlerts />;
      default:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Good morning, Farmer! 🌅</h1>
                <p className="text-muted-foreground mt-2">
                  Here's what's happening with your farm today
                </p>
              </div>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboardStats.slice(0, 3).map((stat, index) => (
                <Card key={index} className="relative overflow-hidden border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.subvalue}</p>
                      <p className="text-xs text-success">{stat.trend}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-card-shadow">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setActiveModule("crop-recommendation")}
                  >
                    <Sprout className="mr-2 h-4 w-4" />
                    Get Crop Recommendations
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setActiveModule("disease-detection")}
                  >
                    <Leaf className="mr-2 h-4 w-4" />
                    Check Plant Health
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setActiveModule("marketplace")}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Browse Marketplace
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card-shadow">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <p className="text-sm">Disease scan completed for tomato field</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <p className="text-sm">Weather alert: Rain expected tomorrow</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-sm">New crop recommendation available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-card border-r border-border transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">FarmIQ</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {modules.map((module) => (
            <Button
              key={module.id}
              variant={activeModule === module.id ? "default" : "ghost"}
              className={`w-full justify-start ${sidebarCollapsed ? 'px-2' : ''}`}
              onClick={() => setActiveModule(module.id)}
            >
              <module.icon className={`h-4 w-4 ${sidebarCollapsed ? '' : 'mr-2'}`} />
              {!sidebarCollapsed && (
                <>
                  <span>{module.label}</span>
                  {module.badge && (
                    <Badge className="ml-auto text-xs">{module.badge}</Badge>
                  )}
                </>
              )}
            </Button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className={`w-full justify-start ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <Settings className={`h-4 w-4 ${sidebarCollapsed ? '' : 'mr-2'}`} />
            {!sidebarCollapsed && <span>Settings</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-lg font-semibold capitalize">
                {activeModule.replace('-', ' ')}
              </h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {renderModuleContent()}
        </div>
      </main>

      {/* Floating Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Dashboard;