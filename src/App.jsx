import React from "react";
import HeroRoutes from "./Component/HeroRoutes/HeroRoutes";
import "./App.css";
import NavigationBar from "./OtherComponents/NavigationBar/NavigationBar";
import Footer from "./OtherComponents/Footer/Footer";
const App = () => {
  return (
    <div>
      <NavigationBar />
      <HeroRoutes />
      <Footer />
    </div>
  );
};

export default App;