import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Camera, 
  Upload, 
  AlertTriangle,
  Globe,
  Clock
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

  const handleScanCrop = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-500 rounded-lg">
            <Camera className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Crop Disease Detection</h1>
          </div>
        </div>
        
        {/* Language Selector */}
        <div className="flex items-center space-x-2">
          <select 
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm"
          >
            <option value="english">English</option>
            <option value="hindi">हिंदी</option>
            <option value="punjabi">ਪੰਜਾਬੀ</option>
            <option value="gujarati">ગુજરાતી</option>
            <option value="marathi">मराठी</option>
          </select>
        </div>
      </div>

      {/* Alert Notification */}
      <Alert className="border-orange-200 bg-orange-50">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800">
          <strong>New Disease Alert</strong><br />
          Late blight outbreak reported in Northern regions. Early detection recommended.
        </AlertDescription>
      </Alert>

      {/* Main Scan Area */}
      <div className="flex flex-col items-center justify-center py-20 space-y-6">
        <Button 
          size="lg" 
          onClick={handleScanCrop}
          className="h-16 px-8 text-lg bg-green-500 hover:bg-green-600 text-white"
        >
          <Camera className="mr-3 h-6 w-6" />
          Scan Crop
        </Button>
        <p className="text-gray-600 text-center max-w-md">
          Upload a photo of your crop to instantly detect diseases and get expert treatment recommendations.
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Recent Scans */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Recent Scans</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scanHistory.map((scan) => (
              <div key={scan.id} className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                <div>
                  <p className="font-medium text-gray-900">{scan.crop}</p>
                  <p className="text-sm text-gray-600">{scan.issue}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{scan.date}</p>
                  <Badge variant="outline" className="text-xs bg-green-100 text-green-800 border-green-200">
                    {scan.treatment}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiseaseDetection;