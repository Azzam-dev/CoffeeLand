import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components";
import { Home, Charts } from "./pages";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/add" element={<h1>Add</h1>} />
      </Routes>
      <div className="footer"></div>
    </div>
  );
};

export default App;
