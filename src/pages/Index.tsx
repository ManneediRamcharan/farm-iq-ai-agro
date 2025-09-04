import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div>
      <LandingPage />
      {/* Demo button to switch to dashboard */}
      <div className="fixed top-4 left-4 z-50">
        <button 
          onClick={() => setIsLoggedIn(true)}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
        >
          Demo Login
        </button>
      </div>
    </div>
  );
};

export default Index;
