import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Farmers from "./components/Farmers";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  const renderComponent = (path, Component) => {
    return <Route path={path} exact component={Component} />;
  };

  return (
    <Router>
      <Navigation />
      <Home />
      <Routes>
        {renderComponent("/", Home)}
        {renderComponent("/Farmers", Farmers)}
        {renderComponent("/Location", Location)}
        {renderComponent("/Contact", Contact)}
        {renderComponent("/Login", Login)}
        {renderComponent("/Register", Register)}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
