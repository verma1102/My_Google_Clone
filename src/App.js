import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
