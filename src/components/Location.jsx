// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";

function Location() {
  return (
    <div className="w-11/12 text-center items-center grid m-auto text-3xl py-16">
      <h1 className="items-center">This Page is currently unavaliable</h1>
      <FaRegSadTear className="mx-auto" />{" "}
      <h1 className="pb-8">Click on the button below to return to Home Page</h1>
      <Link
        to="/Home"
        className="bg-[#008033] text-white hover:bg-green-600 mx-auto py-4 rounded w-[75%]"
      >
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Location;
