import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Farmers from "./Farmers";
import Location from "./Location";
import Contact from "./contact/Contact";
import Login from "./Login";
import Register from "./Register";

function Index() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Farmers" element={<Farmers />} />
      <Route path="/Location" element={<Location />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default Index;
