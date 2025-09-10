import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home,
  TrendingUp,
  BarChart3,
  FileText,
  Truck,
  BookOpen,
  Users,
  MessageCircle,
  Settings,
  Sprout,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

const DashboardSidebar = ({ 
  activeModule, 
  setActiveModule, 
  isCollapsed, 
  onToggle 
}: DashboardSidebarProps) => {
  
  const navigationItems = [
    { 
      id: "home", 
      icon: Home, 
      label: "Home", 
      badge: null 
    },
    { 
      id: "crop-profit-predictor", 
      icon: TrendingUp, 
      label: "Crop Profit Predictor", 
      badge: "AI" 
    },
    { 
      id: "market-supply-tracker", 
      icon: BarChart3, 
      label: "Market Supply Tracker", 
      badge: "Live" 
    },
    { 
      id: "government-schemes", 
      icon: FileText, 
      label: "Government Schemes", 
      badge: "Gov" 
    },
    { 
      id: "farmer-market", 
      icon: Users, 
      label: "Farmer-to-Farmer", 
      badge: null 
    },
    { 
      id: "disease-detection", 
      icon: Sprout, 
      label: "Crop Disease Detection", 
      badge: "AI" 
    },
    { 
      id: "rentals", 
      icon: Truck, 
      label: "Equipment Rentals", 
      badge: null 
    },
    { 
      id: "learning", 
      icon: BookOpen, 
      label: "Videos & Learning", 
      badge: "New" 
    },
    { 
      id: "help", 
      icon: MessageCircle, 
      label: "Chatbot/Help", 
      badge: null 
    }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full bg-card border-r border-border z-50 transition-all duration-300",
        "lg:relative lg:translate-x-0",
        isCollapsed ? "-translate-x-full lg:w-16" : "translate-x-0 w-72 lg:w-64"
      )}>
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <Sprout className="h-6 w-6 text-primary" />
                <span className="font-semibold text-foreground">Navigation</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeModule === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                isCollapsed ? "px-2" : "px-3",
                activeModule === item.id && "bg-primary text-primary-foreground"
              )}
              onClick={() => {
                setActiveModule(item.id);
                // Auto-close sidebar on mobile after selection
                if (window.innerWidth < 1024) {
                  onToggle();
                }
              }}
            >
              <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
              {!isCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm">{item.label}</span>
                  {item.badge && (
                    <Badge 
                      variant={activeModule === item.id ? "secondary" : "outline"} 
                      className="text-xs"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
              )}
            </Button>
          ))}
        </nav>

        {/* Settings */}
        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className={cn("w-full justify-start", isCollapsed ? "px-2" : "px-3")}
          >
            <Settings className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
            {!isCollapsed && <span className="text-sm">Settings</span>}
          </Button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;