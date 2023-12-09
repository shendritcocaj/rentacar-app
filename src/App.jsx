import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Cars from "./components/Cars/Cars";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<Card />} />
      </Routes>
    </Router>
  );
};

export default App;
