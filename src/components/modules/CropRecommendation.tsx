import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Sprout, 
  MapPin, 
  Droplets, 
  Thermometer,
  DollarSign,
  TrendingUp,
  Calendar,
  Target
} from "lucide-react";

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    location: "",
    soilType: "",
    farmSize: "",
    budget: "",
    season: "",
    previousCrop: ""
  });

  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const mockRecommendations = [
    {
      crop: "Tomato",
      profitability: "High",
      yield: "25-30 tons/hectare",
      investment: "₹50,000",
      duration: "90-120 days",
      marketPrice: "₹45/kg",
      reasons: ["High market demand", "Suitable soil conditions", "Favorable weather"]
    },
    {
      crop: "Wheat",
      profitability: "Medium",
      yield: "4-5 tons/hectare", 
      investment: "₹25,000",
      duration: "120-150 days",
      marketPrice: "₹22/kg",
      reasons: ["Stable market", "Low maintenance", "Government support"]
    },
    {
      crop: "Cotton",
      profitability: "High",
      yield: "2-3 tons/hectare",
      investment: "₹40,000", 
      duration: "180-200 days",
      marketPrice: "₹60/kg",
      reasons: ["Export potential", "Good soil match", "Premium pricing"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setRecommendations(mockRecommendations);
      setLoading(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-r from-primary to-primary-glow rounded-lg">
          <Sprout className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AI Crop Recommendation</h1>
          <p className="text-muted-foreground">Get personalized crop suggestions based on your farm conditions</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card className="border-0 shadow-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Farm Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Pune, Maharashtra"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="farmSize">Farm Size (hectares)</Label>
                  <Input
                    id="farmSize"
                    placeholder="e.g., 5"
                    type="number"
                    value={formData.farmSize}
                    onChange={(e) => handleInputChange("farmSize", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="soilType">Soil Type</Label>
                  <Select value={formData.soilType} onValueChange={(value) => handleInputChange("soilType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clay">Clay</SelectItem>
                      <SelectItem value="loam">Loam</SelectItem>
                      <SelectItem value="sandy">Sandy</SelectItem>
                      <SelectItem value="silt">Silt</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="season">Season</Label>
                  <Select value={formData.season} onValueChange={(value) => handleInputChange("season", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select season" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                      <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                      <SelectItem value="zaid">Zaid (Summer)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Budget (₹)</Label>
                  <Input
                    id="budget"
                    placeholder="e.g., 100000"
                    type="number"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="previousCrop">Previous Crop</Label>
                  <Input
                    id="previousCrop"
                    placeholder="e.g., Rice"
                    value={formData.previousCrop}
                    onChange={(e) => handleInputChange("previousCrop", e.target.value)}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Target className="mr-2 h-4 w-4" />
                    Get Recommendations
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Current Conditions */}
        <Card className="border-0 shadow-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Thermometer className="h-5 w-5" />
              <span>Current Conditions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Thermometer className="h-4 w-4 text-warning" />
                  <span className="text-sm font-medium">Temperature</span>
                </div>
                <p className="text-2xl font-bold">28°C</p>
                <p className="text-xs text-muted-foreground">Ideal for most crops</p>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Droplets className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Humidity</span>
                </div>
                <p className="text-2xl font-bold">65%</p>
                <p className="text-xs text-muted-foreground">Good moisture level</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-success/10 to-primary/10 rounded-lg border border-success/20">
              <h4 className="font-medium text-success mb-2">Soil Health Status</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Nitrogen</span>
                  <Badge variant="secondary">Good</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Phosphorus</span>
                  <Badge variant="secondary">Medium</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Potassium</span>
                  <Badge variant="secondary">High</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recommended Crops</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <Card key={index} className="border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{rec.crop}</CardTitle>
                    <Badge 
                      className={
                        rec.profitability === "High" 
                          ? "bg-success text-success-foreground" 
                          : "bg-warning text-warning-foreground"
                      }
                    >
                      {rec.profitability} Profit
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Expected Yield</p>
                      <p className="font-medium">{rec.yield}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Investment</p>
                      <p className="font-medium">{rec.investment}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{rec.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Market Price</p>
                      <p className="font-medium text-success">{rec.marketPrice}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Why this crop?</p>
                    <ul className="space-y-1">
                      {rec.reasons.map((reason: string, idx: number) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button size="sm" className="w-full">
                    <Calendar className="mr-2 h-3 w-3" />
                    Plan Cultivation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CropRecommendation;