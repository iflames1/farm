import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";

function HowItWorks() {
  return (
    <div>
      <div className="bg-[#F5F5F5]">
        <div className="w-11/12 m-auto py-8 ">
          <div className="">
            <h1 className="text-2xl font-bold">How it works</h1>
            <p className="text-lg">Find the closest farmer to your lacation</p>
          </div>
          <div className="md:flex w-11/12 m-auto py-4">
            <div className="bg-gray-100 m-auto py-4">
              <h1 className="flex items-center font-bold text-xl">
                <BsPlusCircleFill size={20} className="text-[#008033] mr-4" />
                Search
              </h1>
              <p className="py-2 ">
                Click the search bar to either
                <br />
                search for a farmer, farm or type a<br />
                location to select farms nearby
              </p>
            </div>

            <div className="bg-gray-100 m-auto py-4">
              <h1 className="flex items-center font-bold text-xl">
                <BsPlusCircleFill size={20} className="text-[#008033] mr-4" />
                Select
              </h1>
              <p className="py-2">
                Select from the list a farm or
                <br />
                farmer of your choice to view <br />
                fruits and vegies in stock
              </p>
            </div>

            <div className="bg-gray-100 m-auto py-4">
              <h1 className="flex items-center font-bold text-xl">
                <BsPlusCircleFill size={20} className="text-[#008033] mr-4" />
                Order
              </h1>
              <p className="py-2">
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
  );
}

export default HowItWorks;
