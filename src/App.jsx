import React, { useState, useEffect } from "react";
import HeroRoutes from "./Component/HeroRoutes/HeroRoutes";
import "./App.css";
import NavigationBar from "./OtherComponents/NavigationBar/NavigationBar";
import Footer from "./OtherComponents/Footer/Footer";
import Loader from "./OtherComponents/Loader/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      // This will be called by the Loader component
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />} */}
      <NavigationBar />
      <HeroRoutes />
      <Footer />
    </div>
  );
};

export default App;