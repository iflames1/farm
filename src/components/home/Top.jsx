import React from "react";
import Find from "../../assets/home/find.svg";
import { FiSearch } from "react-icons/fi";

function Top() {
  const optionsDropdown2 = ["All locations", "Option B", "Option C"];
  const optionsDropdown3 = ["All Services", "Option Y", "Option Z"];
  return (
    <div className="bg-white border-b border-black">
      <div className="flex flex-col items-center">
        <div className="absolute md:top-[35%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-white items-center">
          <h1 className="font-bold md:text-4xl text-2xl pb-3 text-center">
            Find Nearby Farmers
          </h1>
          <p className="text-center">
            We have over 38 million farmers in Nigeria
          </p>
        </div>
        <img src={Find} alt="" className="" />
      </div>
      <div className="">
        <form className="md:flex py-8 w-10/12 md:space-x-6 space-y-4 m-auto justify-between">
          <div className="border flex items-center w-full border-black rounded">
            <button type="submit" className="p-2">
              <FiSearch />
            </button>
            <input
              type="text"
              placeholder="Search for a farmer, farm or landmark"
              className=" border-none text-sm rounded sm:w-full outline-none"
            />
          </div>
          <select className="p-2 border border-black w-full rounded cursor-pointer">
            {optionsDropdown2.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select className="p-2 border border-black w-full rounded cursor-pointer">
            {optionsDropdown3.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-green-700 text-white w-full py-2 px-4 rounded hover:bg-green-500"
          >
            Find Farmers
          </button>
        </form>
      </div>
    </div>
  );
}

export default Top;
