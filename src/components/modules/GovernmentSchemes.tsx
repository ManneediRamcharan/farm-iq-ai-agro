import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Search, 
  Filter, 
  Bell, 
  MessageCircle, 
  MapPin, 
  IndianRupee, 
  Users, 
  Wheat, 
  Tractor,
  FileText,
  ExternalLink,
  Sparkles,
  Globe
} from "lucide-react";

const GovernmentSchemes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [language, setLanguage] = useState("en");

  const schemes = [
    {
      id: 1,
      name: "PM-KISAN Samman Nidhi Yojana",
      description: "Direct income support to farmers providing ₹6000 per year in three installments",
      eligibility: "Small and marginal farmers with landholding up to 2 hectares",
      benefits: "₹6,000 per year",
      subsidyPercent: "100%",
      category: "Direct Benefit Transfer",
      state: "All India",
      crops: ["All Crops"],
      isNew: false,
      expiring: false
    },
    {
      id: 2,
      name: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme providing financial support against crop loss",
      eligibility: "All farmers growing notified crops in notified areas",
      benefits: "Up to ₹2 lakh coverage",
      subsidyPercent: "Premium subsidy up to 50%",
      category: "Insurance",
      state: "All India",
      crops: ["Rice", "Wheat", "Cotton", "Sugarcane"],
      isNew: false,
      expiring: false
    },
    {
      id: 3,
      name: "Soil Health Card Scheme",
      description: "Free soil testing and nutrient management recommendations",
      eligibility: "All farmers with agricultural land",
      benefits: "Free soil testing worth ₹500",
      subsidyPercent: "100%",
      category: "Soil Management",
      state: "All India",
      crops: ["All Crops"],
      isNew: true,
      expiring: false
    },
    {
      id: 4,
      name: "Kisan Credit Card",
      description: "Easy access to credit for agricultural and allied activities",
      eligibility: "Farmers with valid land documents",
      benefits: "Loan up to ₹3 lakh at 4% interest",
      subsidyPercent: "Interest subsidy 3%",
      category: "Credit/Loan",
      state: "All India",
      crops: ["All Crops"],
      isNew: false,
      expiring: false
    },
    {
      id: 5,
      name: "Sub-Mission on Agricultural Mechanization",
      description: "Financial assistance for purchasing agricultural machinery",
      eligibility: "Individual farmers, FPOs, and cooperative societies",
      benefits: "40-50% subsidy on machinery",
      subsidyPercent: "40-50%",
      category: "Equipment",
      state: "All India",
      crops: ["All Crops"],
      isNew: false,
      expiring: true
    },
    {
      id: 6,
      name: "National Mission for Sustainable Agriculture",
      description: "Promoting sustainable agriculture practices and climate resilience",
      eligibility: "Farmers adopting sustainable practices",
      benefits: "Up to ₹50,000 per hectare",
      subsidyPercent: "75%",
      category: "Sustainable Agriculture",
      state: "All India",
      crops: ["Organic Crops"],
      isNew: true,
      expiring: false
    }
  ];

  const states = ["All India", "Punjab", "Haryana", "Uttar Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal"];
  const crops = ["All Crops", "Rice", "Wheat", "Cotton", "Sugarcane", "Organic Crops"];
  const types = ["All Types", "Direct Benefit Transfer", "Insurance", "Credit/Loan", "Equipment", "Soil Management", "Sustainable Agriculture"];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = !selectedState || selectedState === "All India" || scheme.state === selectedState;
    const matchesCrop = !selectedCrop || selectedCrop === "All Crops" || scheme.crops.includes(selectedCrop);
    const matchesType = !selectedType || selectedType === "All Types" || scheme.category === selectedType;
    
    return matchesSearch && matchesState && matchesCrop && matchesType;
  });

  const newSchemes = schemes.filter(scheme => scheme.isNew);
  const expiringSchemes = schemes.filter(scheme => scheme.expiring);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            Government Schemes & Subsidy Checker
          </h1>
          <p className="text-muted-foreground mt-2">
            Discover government schemes, subsidies, and financial support for farmers
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-32">
              <Globe className="h-4 w-4 mr-2" />
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
          
          <Button variant="outline" size="sm">
            <MessageCircle className="h-4 w-4 mr-2" />
            Help & Chat
          </Button>
        </div>
      </div>

      {/* Notifications */}
      {(newSchemes.length > 0 || expiringSchemes.length > 0) && (
        <div className="space-y-3">
          {newSchemes.length > 0 && (
            <Alert className="border-primary bg-primary/5">
              <Bell className="h-4 w-4 text-primary" />
              <AlertDescription className="text-primary">
                <strong>New Schemes Available:</strong> {newSchemes.length} new government schemes have been launched. 
                Check them out for additional benefits!
              </AlertDescription>
            </Alert>
          )}
          
          {expiringSchemes.length > 0 && (
            <Alert className="border-warning bg-warning/5">
              <Bell className="h-4 w-4 text-warning" />
              <AlertDescription className="text-warning">
                <strong>Expiring Soon:</strong> {expiringSchemes.length} schemes are expiring soon. 
                Apply before the deadline!
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}

      {/* AI Suggestion Box */}
      <Card className="border-0 shadow-card-shadow bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Sparkles className="h-5 w-5" />
            Best Schemes for You
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Based on your profile, we recommend these schemes for maximum benefits
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">PM-KISAN (₹6,000/year)</Badge>
            <Badge variant="secondary">Crop Insurance (50% premium)</Badge>
            <Badge variant="secondary">Soil Health Card (Free)</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card className="border-0 shadow-card-shadow">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search schemes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {states.map(state => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCrop} onValueChange={setSelectedCrop}>
              <SelectTrigger>
                <Wheat className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Crop Type" />
              </SelectTrigger>
              <SelectContent>
                {crops.map(crop => (
                  <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Scheme Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchemes.map((scheme) => (
          <Card key={scheme.id} className="border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300 relative overflow-hidden">
            {scheme.isNew && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-success text-success-foreground">New</Badge>
              </div>
            )}
            {scheme.expiring && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-warning text-warning-foreground">Expiring</Badge>
              </div>
            )}
            
            <CardHeader>
              <CardTitle className="text-lg leading-tight">{scheme.name}</CardTitle>
              <Badge variant="outline" className="w-fit">{scheme.category}</Badge>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">{scheme.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm flex items-center gap-2 mb-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    Eligibility
                  </h4>
                  <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm flex items-center gap-2 mb-1">
                    <IndianRupee className="h-4 w-4 text-success" />
                    Benefits
                  </h4>
                  <p className="text-sm text-success font-medium">{scheme.benefits}</p>
                  <p className="text-xs text-muted-foreground">Subsidy: {scheme.subsidyPercent}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm flex items-center gap-2 mb-1">
                    <Wheat className="h-4 w-4 text-muted-foreground" />
                    Applicable Crops
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {scheme.crops.slice(0, 2).map(crop => (
                      <Badge key={crop} variant="secondary" className="text-xs">{crop}</Badge>
                    ))}
                    {scheme.crops.length > 2 && (
                      <Badge variant="secondary" className="text-xs">+{scheme.crops.length - 2} more</Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button className="flex-1" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  How to Apply
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center py-12">
          <Tractor className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-muted-foreground">No schemes found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </div>
  );
};

export default GovernmentSchemes;