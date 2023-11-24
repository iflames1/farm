// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Farmers from "./farmers/Farmers";
import Location from "./Location";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Vegetable from "./vegetable/Vegetable";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Farmers" element={<Farmers />} />
      <Route path="/Location" element={<Location />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      <Route path="/vegetables" element={<Vegetable />} />
    </Routes>
  );
}

export default Index;
