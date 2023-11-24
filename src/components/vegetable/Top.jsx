// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import Image from "../../assets/vegetable/find.svg";

function Top() {
  return (
    <div>
      <div className="bg-black text-white fixed top-15 w-full z-10">
        <nav className="w-11/12 m-auto py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 md:space-x-10">
            <Link to="/Home">
              <FaArrowLeft size={25} />
            </Link>
            <h1 className="text-xl">Fruits and vegetables</h1>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/Home">
              <FaSearch size={25} />
            </Link>
            <Link>
              <GrCart size={25} />
            </Link>
          </div>
        </nav>
      </div>
      <img src={Image} className="pt-[75px] " />
    </div>
  );
}

export default Top;
