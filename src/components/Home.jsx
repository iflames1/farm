import React from "react";
import Find from "../assets/home/find.svg";
import Banana from "../assets/home/banana.svg";
import Vegatable from "../assets/home/vegetable.svg";
import Livestock from "../assets/home/livestock.svg";
import Lagos from "../assets/home/lagos.svg";
import Kano from "../assets/home/kano.svg";
import Anambra from "../assets/home/anambra.svg";
import Meat from "../assets/home/meat.svg";
import Berry from "../assets/home/berry.svg";
import Carrot from "../assets/home/carrot.svg";
import Orange from "../assets/home/orange.svg";
import Chilli from "../assets/home/chilli.svg";
import Tomatoe from "../assets/home/tomato.svg";
import { BsPlusCircleFill } from "react-icons/bs";

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
              Explore to get the best deals on <br /> fruits varieties.
            </p>
          </div>
          <div className="text-center">
            <img src={Vegatable} alt="Vegatable" className="m-auto" />
            <h2 className="text-lg font-bold mt-2">Vegatables</h2>
            <p>
              Get farm fresh vegetables for <br />
              your healthy meals
            </p>
          </div>
          <div className="text-center">
            <img src={Livestock} alt="Livestock" className="m-auto" />
            <h2 className="text-lg font-bold mt-2">Livestock</h2>
            <p>
              You can buy live farm animals or <br /> processed one{" "}
            </p>
          </div>
        </div>

        <div className="w-11/12 m-auto py-16">
          <div className="">
            <h1 className="lg:text-2xl font-bold">Featured Farmers</h1>
            <p className="py-2 text-xl">
              See our top pick for farmers by people
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <div className=" m-auto max-w-sm rounded-xl bg-white border border-gray-300 ">
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

        <div className="w-11/12 m-auto pb-10">
          <div className="">
            <h1 className="lg:text-2xl font-bold">Featured Products</h1>
            <p className="py-2 text-xl text-left">
              Check out frequently purchased farm produce
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-7 pb-2">
            <div className="m-auto boxshadow rounded-2xl  bg-white border ">
              <a href="">
                <img
                  src={Meat}
                  alt=""
                  className="rounded-t-xl w-[400px]  object-cover"
                />
              </a>
            </div>

            <div className="m-auto boxshadow rounded-2xl  bg-white border ">
              <a href="">
                <img
                  src={Berry}
                  alt=""
                  className="rounded-t-xl w-[400px] object-cover"
                />
              </a>
            </div>

            <div className="m-auto boxshadow rounded-2xl  bg-white border ">
              <a href="">
                <img
                  src={Carrot}
                  alt=""
                  className="rounded-t-xl w-[400px] object-cover"
                />
              </a>
            </div>

            <div className="m-auto boxshadow rounded-2xl bg-white border ">
              <a href="">
                <img
                  src={Orange}
                  alt=""
                  className="rounded-t-xl w-[400px] object-cover"
                />
              </a>
            </div>

            <div className="m-auto boxshadow rounded-2xl  bg-white border ">
              <a href="">
                <img
                  src={Chilli}
                  alt=""
                  className="rounded-t-xl w-[400px] object-cover"
                />
              </a>
            </div>

            <div className="m-auto boxshadow rounded-2xl  bg-white border ">
              <a href="">
                <img
                  src={Tomatoe}
                  alt=""
                  className="rounded-t-xl w-[400px] object-cover"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5]">
          <div className="w-10/12 m-auto py-8 ">
            <div className="">
              <h1 className="lg:text-2xl font-bold py-2">How it works</h1>
              <p className="text-lg ">
                Find the closest farmer to your lacation
              </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 py-4 md:gap-8">
              <div className="bg-gray-100 m-auto md:py-4 py-8 p-4">
                <h1 className="flex items-center font-bold text-xl">
                  <BsPlusCircleFill size={20} className="text-green-600 mr-4" />
                  Search
                </h1>
                <p className="md:flex md:gap-5 py-2 ">
                  Click the search bar to either
                  <br />
                  search for a farmer, farm or type a<br />
                  location to select farms nearby
                </p>
              </div>

              <div className="bg-gray-100 m-auto md:py-4 py-8 p-4">
                <h1 className="flex items-center font-bold text-xl">
                  <BsPlusCircleFill size={20} className="text-green-600 mr-4" />
                  Select
                </h1>
                <p className="md:flex md:gap-5 py-2">
                  Select from the list a farm or
                  <br />
                  farmer of your choice to view <br />
                  fruits and vegies in stock
                </p>
              </div>

              <div className="bg-gray-100 m-auto md:py-4 py-8 p-4">
                <h1 className="flex items-center font-bold text-xl">
                  <BsPlusCircleFill size={20} className="text-green-600 mr-4" />
                  Order
                </h1>
                <p className="md:flex md:gap-5 py-2">
                  You can choose to order for your
                  <br />
                  veggies by placing a call across
                  <br />
                  or by adding to cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
