import React from "react";
import HeroRoutes from "./Component/HeroRoutes/HeroRoutes";
import "./App.css";
import NavigationBar from "./OtherComponents/NavigationBar/NavigationBar";
const App = () => {
  return (
    <div>
      <NavigationBar />
      <HeroRoutes />
    </div>
  );
};

export default App;