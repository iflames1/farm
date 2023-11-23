import React from "react";
import { FiSearch } from "react-icons/fi";

function Sort() {
  const optionsDropdown2 = ["All locations", "Option B", "Option C"];
  const optionsDropdown3 = ["All Services", "Option Y", "Option Z"];

  return (
    <div className="border border-t-black border-b-black">
      <form className="md:flex py-8 w-10/12 md:space-x-6 m-auto items-center justify-between">
        <div className="border flex items-center mb-4 w-full h-10 border-black rounded">
          <button type="submit" className="p-2">
            <FiSearch />
          </button>
          <input
            type="text"
            placeholder="Search for a farmer, farm or landmark"
            className=" border-none text-sm rounded sm:w-full outline-none"
          />
        </div>
        <select className="p-2 border border-black w-full rounded cursor-pointer mb-4">
          {optionsDropdown2.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select className="p-2 border border-black w-full rounded cursor-pointer mb-4">
          {optionsDropdown3.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-green-700 text-white w-full py-2 px-4 rounded hover:bg-green-500 mb-4"
        >
          Find Farmers
        </button>
      </form>
    </div>
  );
}

export default Sort;
