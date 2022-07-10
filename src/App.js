import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components";
import { Home, Orders, NewOrder, Charts } from "./pages";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/orderForm" element={<NewOrder />} />
      </Routes>
      <div className="footer"></div>
    </div>
  );
};

export default App;
