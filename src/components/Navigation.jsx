import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navigation() {
  return (
    <div className="bg-[#008033] py-4 isolate sticky top-0">
      <div className="w-11/12 m-auto flex justify-between items-center">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="logo" className="pr-16" />
          <span className="text-white text-4xl font-bold">FarmConnect</span>
        </div>
        <ul className="flex items-center space-x-20">
          <li className="text-white font-bold text-xl">
            <a href="/">Home</a>
          </li>
          <li className="text-white font-bold text-xl">
            <a href="/Farmers">Farmers</a>
          </li>
          <li className="text-white font-bold text-xl">
            <a href="/Location">Location</a>
          </li>
          <li className="text-white font-bold text-xl">
            <a href="/Contact">Contact</a>
          </li>
          <li className="text-white font-bold border border-white py-2 px-4 ">
            <a href="/Login">Login</a>
          </li>
          <li className="bg-white font-bold text-[#008033] px-4 py-2">
            <a href="/Register">Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
