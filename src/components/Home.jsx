import React from "react";
import Find from "../assets/home/find.svg";
import Banana from "../assets/home/banana.svg";
import Vegatable from "../assets/home/vegetable.svg";
import Livestock from "../assets/home/livestock.svg";
import Lagos from "../assets/home/lagos.svg";
import Kano from "../assets/home/kano.svg";
import Anambra from "../assets/home/anambra.svg";

function Home() {
  const optionsDropdown2 = ["All locations", "Option B", "Option C"];
  const optionsDropdown3 = ["All Services", "Option Y", "Option Z"];

  return (
    <div>
      <div>
        <div className="">
          <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="font-bold text-4xl pb-3">Find Nearby Farmers</h1>
            <p>We have over 38 million farmers in Nigeria</p>
          </div>
          <img src={Find} alt="" className="" />
        </div>
        <div className="border border-bottom border-black">
          <form className="flex py-8 w-10/12 m-auto justify-between">
            <input
              type="text"
              placeholder="Search for a farmer, farm or landmark"
              className="p-2 border border-black mr-9 rounded w-[30%] text-center"
            />
            <select className="p-2 border border-black w-[25%] rounded mr-9">
              {optionsDropdown2.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select className="p-2 border border-black w-[25%] rounded mr-9">
              {optionsDropdown3.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-green-700 text-white p-2  w-[20%] rounded hover:bg-green-500"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex justify-between w-11/12 m-auto mt-8">
          <div className="text-center items-center justify-center">
            <img src={Banana} alt="Banana" className="m-auto" />
            <h2 className="text-lg font-bold mt-2">Fruits</h2>
            <p className="text-center">
              Explore to get the best <br /> deals on fruits varieties.
            </p>
          </div>
          <div className="text-center">
            <img src={Vegatable} alt="Vegatable" className="m-auto" />
            <h2 className="text-lg font-bold mt-2">Vegatables</h2>
            <p>
              Get farm fresh vegetables <br /> for your healthy meals
            </p>
          </div>
          <div className="text-center">
            <img src={Livestock} alt="Livestock" className="m-auto" />
            <h2 className="text-lg font-bold mt-2">Livestock</h2>
            <p>
              You can buy live farm <br /> animals or processed one{" "}
            </p>
          </div>
        </div>

        <div className="w-11/12 m-auto py-16">
          <div className="">
            <h1 className="lg:text-3xl font-bold">Featured Farmers</h1>
            <p className="py-2 text-xl">
              See our top pick for farmers by people
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 py-4">
            <div className=" m-auto max-w-sm rounded-xl  bg-white border border-gray-300 ">
              <a href="">
                <img
                  src={Lagos}
                  alt=""
                  className="rounded-t-xl w-[600px] object-cover"
                />
              </a>
              <div className="p-4">
                <h1 className="pb-1 text-xl font-bold">Ogendegbe Owolabi</h1>
                <h1 className="text-green-500 text-lg">Lagos, Nigeria</h1>
              </div>
            </div>

            <div className=" m-auto max-w-sm rounded-xl  bg-white border border-gray-300 ">
              <a href="">
                <img
                  src={Kano}
                  alt=""
                  className="rounded-t-xl w-[600px] object-cover"
                />
              </a>
              <div className="p-4">
                <h1 className="pb-1 text-xl font-bold ">Buhari Aminat</h1>
                <h1 className="text-green-500 text-lg">Kano, Nigeria</h1>
              </div>
            </div>

            <div className=" m-auto max-w-sm rounded-xl  bg-white border border-gray-300 ">
              <a href="">
                <img
                  src={Anambra}
                  alt=""
                  className="rounded-t-xl w-[600px] object-cover"
                />
              </a>
              <div className="p-4">
                <h1 className="pb-1 text-xl font-bold">Okoro Kamsiochukwu</h1>
                <h1 className="text-green-500 text-lg">Anambra, Nigeria</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
