import React from "react";
import HomePage from "./HomePage";
import HyperCarPage from "./HyperCarPage";
import SportCarPage from "./SportCarPage";
import MomsCarPage from "./MomsCarPage";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="App-con">
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mommycar" element={<MomsCarPage />} />
          <Route path="/sportycar" element={<SportCarPage />} />
          <Route path="/hypercar" element={<HyperCarPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
