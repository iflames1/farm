// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Deserve() {
  return (
    <div className="items-center bg-[#F5F5F5]">
      <div className="items-center flex flex-col w-11/12 m-auto py-8">
        <h2 className="text-3xl text-black text-center font-bold">
          Your Farm Deserves a Wider Reach
        </h2>
        <p className="text-xl mt-4">Join the farmers on farm connect</p>
        <Link to="/Register">
          <button className="bg-[#008033] rounded text-white py-2 px-4 mt-4 hover:font-bold">
            Become a Farmer
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Deserve;
