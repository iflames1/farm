import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClickIcon = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#008033] py-4 isolate z-10 sticky top-0">
      <div className="w-full h-10 px-4 m-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center w-[25%]">
          <Link to="/" className="hidden lg:flex">
            <img src={Logo} alt="logo" className="w-full" />
          </Link>
          <Link to="/">
            <span className="text-white text-3xl lg:text-4xl font-bold">
              FarmConnect
            </span>
          </Link>
        </div>

        {/* Larger screen */}
        <ul className="lg:flex items-center hidden space-x-4">
          <li className="text-white text-2xl hover:font-bold">
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="text-white text-2xl">
            <Link to="/Farmers" onClick={handleClick}>
              Farmers
            </Link>
          </li>
          <li className="text-white text-2xl">
            <Link to="/Location" onClick={handleClick}>
              Location
            </Link>
          </li>
          <li className="text-white text-2xl">
            <Link to="/Contact" onClick={handleClick}>
              Contact
            </Link>
          </li>
          <li className="text-white font-bold border hover:bg-white hover:text-[#008033] border-white py-2 px-4 rounded">
            <Link to="/Login" onClick={handleClick}>
              Login
            </Link>
          </li>
          <li className="bg-white font-bold text-[#008033] px-4 py-2 rounded">
            <Link to="/Register" onClick={handleClick}>
              Register
            </Link>
          </li>
        </ul>
      </div>

      {/* Meduim screen Icon */}
      <div className="lg:hidden">
        {isMenuOpen ? (
          <FaTimes
            onClick={handleClickIcon}
            size={35}
            color="white"
            className="top-6 absolute right-4 cursor-pointer "
          />
        ) : (
          <FaBars
            onClick={handleClickIcon}
            size={30}
            color="white"
            className="top-6 absolute right-4 cursor-pointer "
          />
        )}
      </div>

      {/* Medium screen nav */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col items-center space-y-10 px-5 py-6 bg-[#008033] w-full">
          <li className="text-white text-2xl hover:font-bold">
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="text-white text-2xl hover:font-bold">
            <Link to="/Farmers" onClick={handleClick}>
              Farmers
            </Link>
          </li>
          <li className="text-white text-2xl hover:font-bold">
            <Link to="/Location" onClick={handleClick}>
              Location
            </Link>
          </li>
          <li className="text-white text-2xl hover:font-bold">
            <Link to="/Contact" onClick={handleClick}>
              Contact
            </Link>
          </li>
          <li className="">
            <Link to="/Login" onClick={handleClick}>
              <button
                className="text-white text-2xl border hover:font-bold hover:bg-white hover:text-[#008033] border-white py-2 px-4 rounded "
                type="submit"
              >
                Login
              </button>
            </Link>
          </li>
          <li className="">
            <Link to="/Register" onClick={handleClick}>
              <button
                className="bg-white text-2xl text-[#008033] px-4 py-2 hover:font-bold rounded"
                type="submit"
              >
                Register
              </button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navigation;
