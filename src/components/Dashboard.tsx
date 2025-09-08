import { useState } from "react";
import { Button } from "@/components/ui/button";
import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import DashboardMainContent from "./dashboard/DashboardMainContent";
import DashboardFooter from "./dashboard/DashboardFooter";
import CropRecommendation from "./modules/CropRecommendation";
import DiseaseDetection from "./modules/DiseaseDetection";
import Marketplace from "./modules/Marketplace";
import EquipmentRental from "./modules/EquipmentRental";
import FarmMarket from "./modules/FarmMarket";
import WeatherAlerts from "./modules/WeatherAlerts";
import GovernmentSchemes from "./modules/GovernmentSchemes";
import ChatBot from "./ChatBot";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderModuleContent = () => {
    switch (activeModule) {
      case "crop-recommendation":
      case "crop-profit-predictor":
        return <CropRecommendation />;
      case "disease-detection":
        return <DiseaseDetection />;
      case "marketplace":
        return <Marketplace />;
      case "market-place":
      case "farmer-market":
        return <FarmMarket />;
      case "equipment-rental":
      case "rentals":
        return <EquipmentRental />;
      case "weather-alerts":
      case "market-supply-tracker":
        return <WeatherAlerts />;
      case "government-schemes":
        return <GovernmentSchemes />;
      case "home":
      default:
        return <DashboardMainContent activeModule={activeModule} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <DashboardHeader 
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        sidebarCollapsed={sidebarCollapsed}
      />

      <div className="flex flex-1">
        {/* Sidebar */}
        <DashboardSidebar 
          activeModule={activeModule}
          setActiveModule={setActiveModule}
          isCollapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 overflow-auto">
            {renderModuleContent()}
          </div>
          
          {/* Footer */}
          <DashboardFooter />
        </main>
      </div>

      {/* Floating Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Dashboard;