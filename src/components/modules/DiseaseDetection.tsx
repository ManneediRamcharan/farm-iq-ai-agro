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
  Zap
} from "lucide-react";

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mockResults = {
    disease: "Tomato Late Blight",
    confidence: 94,
    severity: "Medium",
    description: "Late blight is a serious fungal disease that affects tomatoes. It spreads rapidly in humid conditions and can destroy entire crops if left untreated.",
    symptoms: [
      "Dark brown spots on leaves",
      "White fuzzy growth on leaf undersides", 
      "Rapid wilting of affected areas",
      "Fruit rot and decay"
    ],
    treatment: [
      "Apply copper-based fungicides immediately",
      "Remove and destroy infected plant parts",
      "Improve air circulation around plants",
      "Avoid overhead watering"
    ],
    prevention: [
      "Use resistant tomato varieties",
      "Maintain proper plant spacing",
      "Apply preventive fungicide sprays",
      "Monitor humidity levels"
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
    }, 3000);
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
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-r from-accent to-warning rounded-lg">
          <Leaf className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Disease Detection</h1>
          <p className="text-muted-foreground">Upload plant images for AI-powered disease identification</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Image Upload Section */}
        <Card className="border-0 shadow-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="h-5 w-5" />
              <span>Upload Plant Image</span>
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

            {selectedImage && (
              <Button 
                onClick={analyzeImage} 
                disabled={isAnalyzing}
                className="w-full"
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
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card className="border-0 shadow-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5" />
              <span>Photography Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">Clear Focus</p>
                  <p className="text-xs text-muted-foreground">Ensure the affected area is in sharp focus</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">Good Lighting</p>
                  <p className="text-xs text-muted-foreground">Use natural daylight for best results</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">Close-up View</p>
                  <p className="text-xs text-muted-foreground">Capture symptoms clearly with close-up shots</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">Multiple Angles</p>
                  <p className="text-xs text-muted-foreground">Take photos from different angles if possible</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <h4 className="font-medium text-primary mb-2 flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                AI Accuracy: 94%
              </h4>
              <p className="text-xs text-muted-foreground">
                Our AI model has been trained on over 100,000 plant disease images 
                and can identify 40+ common crop diseases with high accuracy.
              </p>
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
          <Card className="border-0 shadow-card-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span>Disease Detected</span>
                </CardTitle>
                <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                  {analysisResult.confidence}% Confidence
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Disease Name</p>
                  <p className="font-semibold text-lg">{analysisResult.disease}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Severity Level</p>
                  <p className={`font-semibold text-lg ${getSeverityColor(analysisResult.severity)}`}>
                    {analysisResult.severity}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Action Required</p>
                  <p className="font-semibold text-lg text-warning">Immediate</p>
                </div>
              </div>
              
              <p className="text-muted-foreground">{analysisResult.description}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Symptoms */}
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-warning" />
                  <span>Symptoms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysisResult.symptoms.map((symptom: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Treatment */}
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Microscope className="h-5 w-5 text-destructive" />
                  <span>Treatment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysisResult.treatment.map((treatment: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Prevention */}
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-success" />
                  <span>Prevention</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysisResult.prevention.map((prevention: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span>{prevention}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiseaseDetection;