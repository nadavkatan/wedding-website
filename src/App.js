import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./app/components/Navbar/Navbar";
import Home from "./app/pages/Home/Home";
import Schedule from "./app/pages/Schedule/Schedule";
import Location from "./app/pages/Location/Location";
import Info from "./app/pages/Info/Info";
import Shuttles from "./app/pages/Shuttles/Shuttles";
import "./App.css";
import { LanguageProvider } from "./app/context/LanguageContext";

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="app">
          <Routes>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/location" component={Location} />
            <Route path="/info" component={Info} />
            <Route path="/shuttles" component={Shuttles} />
          </Routes>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
