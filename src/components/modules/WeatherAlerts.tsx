import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CloudRain, 
  Sun, 
  Cloud, 
  Thermometer,
  Droplets,
  Wind,
  Eye,
  AlertTriangle,
  Bell,
  MapPin,
  Calendar,
  TrendingUp
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const WeatherAlerts = () => {
  const [selectedTab, setSelectedTab] = useState("current");

  const currentWeather = {
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    uvIndex: 6,
    pressure: 1013,
    feelsLike: 32
  };

  const alerts = [
    {
      type: "warning",
      title: "Heavy Rain Expected",
      message: "Moderate to heavy rainfall expected tomorrow. Consider protecting sensitive crops.",
      time: "2 hours ago",
      severity: "Medium",
      icon: CloudRain
    },
    {
      type: "info", 
      title: "Ideal Spraying Conditions",
      message: "Low wind speed and optimal humidity for pesticide/fertilizer application.",
      time: "1 hour ago",
      severity: "Low",
      icon: Sun
    },
    {
      type: "critical",
      title: "Frost Warning",
      message: "Temperature may drop below 5°C tonight. Protect sensitive plants.",
      time: "30 minutes ago",
      severity: "High",
      icon: AlertTriangle
    }
  ];

  const weeklyForecast = [
    { day: "Today", high: 32, low: 22, condition: "Partly Cloudy", rain: 20, icon: "⛅" },
    { day: "Tomorrow", high: 29, low: 20, condition: "Rainy", rain: 80, icon: "🌧️" },
    { day: "Wed", high: 26, low: 18, condition: "Cloudy", rain: 60, icon: "☁️" },
    { day: "Thu", high: 30, low: 21, condition: "Sunny", rain: 10, icon: "☀️" },
    { day: "Fri", high: 33, low: 24, condition: "Hot", rain: 5, icon: "🌞" },
    { day: "Sat", high: 31, low: 23, condition: "Sunny", rain: 15, icon: "☀️" },
    { day: "Sun", high: 28, low: 20, condition: "Partly Cloudy", rain: 30, icon: "⛅" }
  ];

  const temperatureData = [
    { time: "6 AM", temp: 22 },
    { time: "9 AM", temp: 25 },
    { time: "12 PM", temp: 28 },
    { time: "3 PM", temp: 32 },
    { time: "6 PM", temp: 29 },
    { time: "9 PM", temp: 26 },
  ];

  const rainfallData = [
    { month: "Jan", rainfall: 15 },
    { month: "Feb", rainfall: 8 },
    { month: "Mar", rainfall: 22 },
    { month: "Apr", rainfall: 45 },
    { month: "May", rainfall: 78 },
    { month: "Jun", rainfall: 120 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "low": return "bg-success/10 text-success border-success/20";
      case "medium": return "bg-warning/10 text-warning border-warning/20";
      case "high": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted";
    }
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny": return <Sun className="h-8 w-8 text-warning" />;
      case "partly cloudy": return <Cloud className="h-8 w-8 text-muted-foreground" />;
      case "cloudy": return <Cloud className="h-8 w-8 text-muted-foreground" />;
      case "rainy": return <CloudRain className="h-8 w-8 text-primary" />;
      default: return <Sun className="h-8 w-8 text-warning" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
          <CloudRain className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Weather & Alerts</h1>
          <p className="text-muted-foreground">Stay informed with real-time weather updates and farming alerts</p>
        </div>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-fit grid-cols-4">
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Current Weather */}
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Current Weather</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Pune, Maharashtra</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    {getWeatherIcon(currentWeather.condition)}
                    <div>
                      <p className="text-4xl font-bold">{currentWeather.temperature}°C</p>
                      <p className="text-muted-foreground">{currentWeather.condition}</p>
                      <p className="text-sm text-muted-foreground">Feels like {currentWeather.feelsLike}°C</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Droplets className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Humidity</p>
                      <p className="font-semibold">{currentWeather.humidity}%</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Wind className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Wind Speed</p>
                      <p className="font-semibold">{currentWeather.windSpeed} km/h</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Eye className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Visibility</p>
                      <p className="font-semibold">{currentWeather.visibility} km</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Sun className="h-5 w-5 text-warning" />
                    <div>
                      <p className="text-sm text-muted-foreground">UV Index</p>
                      <p className="font-semibold">{currentWeather.uvIndex}/10</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Today's Temperature Chart */}
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Today's Temperature</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="temp" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Farming Conditions */}
          <Card className="border-0 shadow-card-shadow">
            <CardHeader>
              <CardTitle>Farming Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="text-2xl mb-2">🌱</div>
                  <h4 className="font-medium text-success mb-1">Excellent for Planting</h4>
                  <p className="text-xs text-muted-foreground">Soil moisture and temperature are ideal</p>
                </div>

                <div className="text-center p-4 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="text-2xl mb-2">💧</div>
                  <h4 className="font-medium text-warning mb-1">Moderate for Irrigation</h4>
                  <p className="text-xs text-muted-foreground">Consider reducing water due to humidity</p>
                </div>

                <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-2xl mb-2">🚜</div>
                  <h4 className="font-medium text-primary mb-1">Good for Field Work</h4>
                  <p className="text-xs text-muted-foreground">Weather suitable for machinery operation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecast" className="space-y-6">
          <Card className="border-0 shadow-card-shadow">
            <CardHeader>
              <CardTitle>7-Day Weather Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyForecast.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{day.icon}</div>
                      <div>
                        <p className="font-medium">{day.day}</p>
                        <p className="text-sm text-muted-foreground">{day.condition}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">High/Low</p>
                        <p className="font-semibold">{day.high}°/{day.low}°</p>
                      </div>

                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Rain</p>
                        <div className="flex items-center space-x-2">
                          <Progress value={day.rain} className="w-16 h-2" />
                          <span className="text-sm font-medium">{day.rain}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Active Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {alerts.map((alert, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                    <div className="flex items-start space-x-3">
                      <alert.icon className="h-5 w-5 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{alert.title}</h4>
                          <Badge className={getSeverityColor(alert.severity)}>
                            {alert.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Alert Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Rain Alerts</p>
                      <p className="text-sm text-muted-foreground">Get notified about rainfall predictions</p>
                    </div>
                    <Button size="sm" variant="outline">Enabled</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Temperature Warnings</p>
                      <p className="text-sm text-muted-foreground">Alerts for extreme temperatures</p>
                    </div>
                    <Button size="sm" variant="outline">Enabled</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Frost Alerts</p>
                      <p className="text-sm text-muted-foreground">Early warning for frost conditions</p>
                    </div>
                    <Button size="sm" variant="outline">Enabled</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Wind Speed Alerts</p>
                      <p className="text-sm text-muted-foreground">High wind speed notifications</p>
                    </div>
                    <Button size="sm" variant="secondary">Disabled</Button>
                  </div>
                </div>

                <Button className="w-full">
                  <Bell className="mr-2 h-4 w-4" />
                  Customize Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Rainfall Trend (6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={rainfallData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rainfall" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Weather Impact Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-success">Optimal Days</h4>
                    <TrendingUp className="h-4 w-4 text-success" />
                  </div>
                  <p className="text-2xl font-bold text-success">18</p>
                  <p className="text-xs text-muted-foreground">Days with ideal farming conditions</p>
                </div>

                <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-warning">Caution Days</h4>
                    <AlertTriangle className="h-4 w-4 text-warning" />
                  </div>
                  <p className="text-2xl font-bold text-warning">8</p>
                  <p className="text-xs text-muted-foreground">Days requiring extra precautions</p>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-primary">Total Rainfall</h4>
                    <CloudRain className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-primary">288mm</p>
                  <p className="text-xs text-muted-foreground">Accumulated over 6 months</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WeatherAlerts;