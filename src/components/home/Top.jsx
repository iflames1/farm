import React from "react";
import Find from "../../assets/home/find.svg";

function Top() {
  const optionsDropdown2 = ["All locations", "Option B", "Option C"];
  const optionsDropdown3 = ["All Services", "Option Y", "Option Z"];
  return (
    <div className="bg-white border-b border-black">
      <div className="">
        <div className="absolute md:top-[35%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-white items-center">
          <h1 className="font-bold text-4xl pb-3 text-center">
            Find Nearby Farmers
          </h1>
          <p className="text-center">
            We have over 38 million farmers in Nigeria
          </p>
        </div>
        <img src={Find} alt="" className="" />
      </div>
      <div className="">
        <form className="md:flex py-8 w-10/12 m-auto justify-between">
          <input
            type="text"
            placeholder="Search for a farmer, farm or landmark"
            className="p-2 border border-black mr-9 rounded sm:w-full md:w-[30%] text-center"
          />
          <select className="p-2 border border-black md:w-[25%] rounded mr-9">
            {optionsDropdown2.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select className="p-2 border border-black md:w-[25%] rounded mr-9">
            {optionsDropdown3.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-green-700 text-white p-2  md:w-[20%] rounded hover:bg-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Top;
