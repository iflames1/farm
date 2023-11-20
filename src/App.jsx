import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./components/Index";

function App() {
  return (
    <Router>
      <Navigation />
      <Index />
      <Footer />
    </Router>
  );
}

export default App;
