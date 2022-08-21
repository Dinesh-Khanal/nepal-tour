import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ChildPage from "./pages/ChildPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:pid/:id" element={<ChildPage />} />
      </Routes>
    </div>
  );
};

export default App;
