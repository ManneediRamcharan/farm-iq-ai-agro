import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Camera, 
  Upload, 
  Leaf, 
  AlertTriangle, 
  CheckCircle,
  Eye,
  Microscope,
  Shield,
  Zap,
  ShoppingCart,
  RotateCcw,
  Volume2,
  Globe,
  Clock,
  Sprout
} from "lucide-react";

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [scanHistory, setScanHistory] = useState([
    { id: 1, crop: "Tomato", issue: "Late Blight", date: "2024-01-15", treatment: "Copper Fungicide" },
    { id: 2, crop: "Wheat", issue: "Rust Disease", date: "2024-01-12", treatment: "Triazole Fungicide" },
    { id: 3, crop: "Rice", issue: "Blast Disease", date: "2024-01-10", treatment: "Organic Neem Oil" },
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mockResults = {
    disease: "Tomato Late Blight",
    confidence: 94,
    severity: "Medium",
    description: "Late blight is a serious fungal disease that affects tomatoes. It spreads rapidly in humid conditions and can destroy entire crops if left untreated.",
    reason: "High humidity (>85%) combined with temperatures between 18-22°C created ideal conditions for fungal spore germination and spread.",
    precautions: [
      "Isolate affected plants immediately",
      "Avoid working in the field when plants are wet",
      "Use clean tools and sanitize between plants",
      "Monitor neighboring fields for symptoms"
    ],
    treatment: [
      "Apply copper-based fungicides immediately",
      "Remove and destroy infected plant parts",
      "Improve air circulation around plants",
      "Reduce irrigation frequency and avoid overhead watering"
    ],
    prevention: [
      "Use resistant tomato varieties (Mountain Fresh Plus, Iron Lady)",
      "Maintain proper plant spacing (2-3 feet between plants)",
      "Install drip irrigation system instead of overhead sprinklers",
      "Apply preventive fungicide sprays during humid weather"
    ],
    recommended_products: [
      { name: "Copper Oxychloride 50% WP", price: "₹320", type: "Fungicide" },
      { name: "Mancozeb 75% WP", price: "₹450", type: "Preventive Spray" },
      { name: "Potassium Phosphonate", price: "₹280", type: "Plant Booster" }
    ]
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult(mockResults);
      setIsAnalyzing(false);
      
      // Add to scan history
      const newScan = {
        id: scanHistory.length + 1,
        crop: "Tomato",
        issue: mockResults.disease,
        date: new Date().toISOString().split('T')[0],
        treatment: "Copper Fungicide"
      };
      setScanHistory([newScan, ...scanHistory]);
    }, 3000);
  };

  const rescanImage = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
    fileInputRef.current?.click();
  };

  const playAudioExplanation = () => {
    // Simulate audio playback
    alert("Audio explanation would play here in " + selectedLanguage);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "low": return "text-success";
      case "medium": return "text-warning";
      case "high": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 to-emerald-50/50 p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
            <Camera className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Crop Disease Detection</h1>
            <p className="text-muted-foreground">AI-powered plant disease identification and treatment</p>
          </div>
        </div>
        
        {/* Language Selector */}
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <select 
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-1 rounded-md border border-border bg-background text-sm"
          >
            <option value="english">English</option>
            <option value="hindi">हिंदी</option>
            <option value="punjabi">ਪੰਜਾਬੀ</option>
            <option value="gujarati">ગુજરાતી</option>
            <option value="marathi">मराठी</option>
          </select>
        </div>
      </div>

      {/* Alert Notifications */}
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
            <div>
              <p className="font-medium text-amber-800">New Disease Alert</p>
              <p className="text-sm text-amber-700">Late blight outbreak reported in Northern regions. Early detection recommended.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Scan Button */}
      {!selectedImage && !analysisResult && (
        <div className="text-center py-12">
          <Button 
            size="lg" 
            onClick={() => fileInputRef.current?.click()}
            className="h-16 px-8 text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            <Camera className="mr-3 h-6 w-6" />
            Scan Crop
          </Button>
          <p className="mt-4 text-muted-foreground">Take or upload a photo of your crop for instant disease detection</p>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Image Upload Section */}
        {(selectedImage || analysisResult) && (
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="h-5 w-5" />
                <span>Crop Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <div 
              className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              {selectedImage ? (
                <div className="space-y-4">
                  <img 
                    src={selectedImage} 
                    alt="Selected plant" 
                    className="max-h-64 mx-auto rounded-lg shadow-md"
                  />
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Choose Different Image
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <Camera className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">Upload a plant image</p>
                    <p className="text-sm text-muted-foreground">
                      Click here or drag and drop an image of the affected plant
                    </p>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary">JPG</Badge>
                    <Badge variant="secondary">PNG</Badge>
                    <Badge variant="secondary">Max 5MB</Badge>
                  </div>
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            {selectedImage && !analysisResult && (
              <Button 
                onClick={analyzeImage} 
                disabled={isAnalyzing}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing Image...
                  </>
                ) : (
                  <>
                    <Microscope className="mr-2 h-4 w-4" />
                    Analyze for Diseases
                  </>
                )}
              </Button>
            )}

            {analysisResult && (
              <div className="flex space-x-2">
                <Button onClick={rescanImage} variant="outline" className="flex-1">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Rescan
                </Button>
                <Button onClick={playAudioExplanation} variant="outline">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
        )}

        {/* Recent Scans History */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Recent Scans</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {scanHistory.slice(0, 5).map((scan) => (
                <div key={scan.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                  <div>
                    <p className="font-medium text-sm">{scan.crop}</p>
                    <p className="text-xs text-muted-foreground">{scan.issue}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{scan.date}</p>
                    <Badge variant="outline" className="text-xs">{scan.treatment}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card className="border-0 shadow-card-shadow">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                <div>
                  <p className="font-medium">Analyzing plant image...</p>
                  <p className="text-sm text-muted-foreground">Our AI is examining the image for disease symptoms</p>
                </div>
              </div>
              <Progress value={65} className="w-full" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Analysis Results */}
      {analysisResult && (
        <div className="space-y-6">
          {/* Disease Detection Result */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span className="text-red-800">Disease Detected</span>
                </CardTitle>
                <Badge className="bg-red-100 text-red-800 border-red-200">
                  {analysisResult.confidence}% Confidence
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold text-red-800 mb-2">{analysisResult.disease}</h3>
              <p className="text-red-700">{analysisResult.description}</p>
            </CardContent>
          </Card>

          {/* Structured Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Reason */}
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <span className="text-xl">⚠️</span>
                  <span className="text-amber-800">Reason</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 text-sm">{analysisResult.reason}</p>
              </CardContent>
            </Card>

            {/* Precautions */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <span className="text-xl">🛡</span>
                  <span className="text-blue-800">Precautions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysisResult.precautions.map((precaution: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-blue-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{precaution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Treatment */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <span className="text-xl">🔧</span>
                  <span className="text-red-800">Treatment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysisResult.treatment.map((treatment: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-red-700">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Prevention */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <span className="text-xl">🚫</span>
                  <span className="text-green-800">How to Avoid</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysisResult.prevention.map((prevention: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-green-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{prevention}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Recommended Products */}
            <Card className="border-purple-200 bg-purple-50 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <span className="text-xl">🌿</span>
                  <span className="text-purple-800">Recommended Medicine</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {analysisResult.recommended_products.map((product: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200">
                      <div>
                        <p className="font-medium text-purple-800">{product.name}</p>
                        <p className="text-sm text-purple-600">{product.type}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-purple-800">{product.price}</span>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <ShoppingCart className="mr-1 h-3 w-3" />
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiseaseDetection;