import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  CloudRain, 
  TrendingUp, 
  IndianRupee, 
  FileText,
  ThermometerSun,
  Leaf,
  AlertTriangle,
  Bell,
  ArrowUp,
  ArrowDown,
  Wheat,
  Sprout,
  Tractor,
  Droplets,
  BarChart as BarChartIcon
} from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface DashboardMainContentProps {
  activeModule: string;
}

const DashboardMainContent = ({ activeModule }: DashboardMainContentProps) => {
  // Sample data for charts
  const priceData = [
    { month: 'Jan', wheat: 2200, rice: 3200, tomato: 2500 },
    { month: 'Feb', wheat: 2350, rice: 3100, tomato: 2800 },
    { month: 'Mar', wheat: 2400, rice: 3300, tomato: 2200 },
    { month: 'Apr', wheat: 2300, rice: 3250, tomato: 2600 },
    { month: 'May', wheat: 2450, rice: 3400, tomato: 2900 },
    { month: 'Jun', wheat: 2500, rice: 3350, tomato: 3100 },
  ];

  const profitData = [
    { crop: 'Wheat', profit: 45000, loss: 15000 },
    { crop: 'Rice', profit: 52000, loss: 8000 },
    { crop: 'Tomato', profit: 38000, loss: 22000 },
    { crop: 'Cotton', profit: 41000, loss: 19000 },
  ];

  if (activeModule !== "home") {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-muted-foreground">
            {activeModule.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h2>
          <p className="text-muted-foreground mt-2">Content for this module is coming soon...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, Ramesh! 🌱
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening on your farm today
        </p>
      </div>

      {/* Quick Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Weather Card */}
        <Card className="border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow">
                <CloudRain className="h-6 w-6 text-primary-foreground" />
              </div>
              <Badge variant="outline" className="text-xs">Live</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Weather & Alerts</p>
              <p className="text-2xl font-bold">28°C</p>
              <p className="text-sm text-muted-foreground">Partly Cloudy</p>
              <p className="text-xs text-success flex items-center">
                <Droplets className="h-3 w-3 mr-1" />
                Rain expected tomorrow
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Profit Prediction Card */}
        <Card className="border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-success to-accent">
                <TrendingUp className="h-6 w-6 text-success-foreground" />
              </div>
              <Badge variant="outline" className="text-xs">AI</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Crop Profit Prediction</p>
              <p className="text-2xl font-bold text-success">+₹45,000</p>
              <p className="text-sm text-muted-foreground">This Season</p>
              <p className="text-xs text-success flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                +12% vs last season
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Market Price Card */}
        <Card className="border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-warning to-accent">
                <IndianRupee className="h-6 w-6 text-warning-foreground" />
              </div>
              <Badge variant="outline" className="text-xs">Market</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Market Price Trends</p>
              <p className="text-2xl font-bold">₹2,500/Q</p>
              <p className="text-sm text-muted-foreground">Wheat (Avg)</p>
              <p className="text-xs text-success flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                +8% this week
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Active Subsidies Card */}
        <Card className="border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <Badge className="text-xs bg-success">Active</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Active Subsidies</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Available Now</p>
              <p className="text-xs text-primary">PM-KISAN + 2 more</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Market Price Trends */}
        <Card className="border-0 shadow-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Market Price Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="wheat" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="Wheat (₹/Q)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rice" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={2}
                    name="Rice (₹/Q)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="tomato" 
                    stroke="hsl(var(--warning))" 
                    strokeWidth={2}
                    name="Tomato (₹/Q)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Profit vs Loss Predictions */}
        <Card className="border-0 shadow-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChartIcon className="h-5 w-5 text-primary" />
              Profit vs Loss Predictions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={profitData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="crop" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar 
                    dataKey="profit" 
                    fill="hsl(var(--success))" 
                    name="Profit (₹)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="loss" 
                    fill="hsl(var(--destructive))" 
                    name="Loss (₹)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations and Notifications */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* AI Recommendations */}
        <Card className="border-0 shadow-card-shadow bg-gradient-to-br from-primary/5 to-success/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Sprout className="h-5 w-5" />
              Best Crops to Plant This Season
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-card/50 rounded-lg border border-primary/20">
                <Wheat className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-sm">Wheat</p>
                <p className="text-xs text-success">92% profit</p>
              </div>
              <div className="text-center p-3 bg-card/50 rounded-lg border border-success/20">
                <Sprout className="h-8 w-8 text-success mx-auto mb-2" />
                <p className="font-medium text-sm">Maize</p>
                <p className="text-xs text-success">87% profit</p>
              </div>
              <div className="text-center p-3 bg-card/50 rounded-lg border border-accent/20">
                <Leaf className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-medium text-sm">Mustard</p>
                <p className="text-xs text-success">81% profit</p>
              </div>
            </div>
            <Button className="w-full" variant="outline">
              Get Detailed Recommendations
            </Button>
          </CardContent>
        </Card>

        {/* Notifications Panel */}
        <Card className="border-0 shadow-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notifications & Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-warning bg-warning/5">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <AlertDescription className="text-warning-foreground">
                <strong>Weather Alert:</strong> Heavy rain expected in next 48 hours. Secure your crops.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-destructive bg-destructive/5">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-destructive-foreground">
                <strong>Subsidy Expiring:</strong> PM Fasal Bima Yojana registration ends in 5 days.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-success bg-success/5">
              <Bell className="h-4 w-4 text-success" />
              <AlertDescription className="text-success-foreground">
                <strong>Market Update:</strong> Wheat prices increased by 8% in local mandis.
              </AlertDescription>
            </Alert>

            <Button variant="outline" className="w-full">
              View All Notifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardMainContent;