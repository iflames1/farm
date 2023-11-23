import React from "react";
import Map from "../../assets/farmer/map.svg";
import OneStar from "../stars/OneStar";
import TwoStar from "../stars/TwoStar";
import ThreeStar from "../stars/ThreeStar";
import FourStar from "../stars/FourStar";
import FiveStar from "../stars/FiveStar";

function Select() {
  return (
    <div className="pt-8 lg:w-[30%] md:w-[50%] m-auto space-y-8">
      <div className="text-center rounded-xl m-auto border border-gray-400">
        <img src={Map} alt="" className="rounded-t-xl object-cover w-[600px]" />
        <p className="p-2">Find farms close to an address</p>
        <button className="border-gray border rounded p-2 mb-6 text-green-300">
          eg. 4, Rasaq Eletu Lagos
        </button>
      </div>
      <div className="text-center rounded-xl m-auto border border-gray-400 py-4">
        <h1 className="pb-4 text-lg">Only show farm with rating</h1>
        <div className="w-10/12 m-auto">
          <label className="flex items-center space-x-4">
            <input type="checkbox" name="rating" value="Poor" />
            <OneStar /> <h1 className="pl-8">Poor</h1>
          </label>
          <label className="flex items-center space-x-4">
            <input type="checkbox" name="rating" value="Fair" />
            <TwoStar /> <h1 className="pl-8">Fair</h1>
          </label>
          <label className="flex items-center space-x-4">
            <input type="checkbox" name="rating" value="Good" />
            <ThreeStar /> <h1 className="pl-8">Good</h1>
          </label>
          <label className="flex items-center space-x-4">
            <input type="checkbox" name="rating" value="Very Good" />
            <FourStar /> <h1 className="pl-8">Very Good</h1>
          </label>
          <label className="flex items-center space-x-4">
            <input type="checkbox" name="rating" value="Poor" />
            <FiveStar /> <h1 className="pl-8">Excellent</h1>
          </label>
        </div>
      </div>
      <div className="text-center rounded-xl m-auto border border-gray-400 py-4">
        <h1 className="text-lg border border-b-gray-400 border-t-0 pb-3">
          Select Farms in Lagos
        </h1>
        <div className="w-10/12 m-auto space-y-2 py-6">
          <label className="space-x-4 flex">
            <input type="checkbox" name="location" value="Epe" />
            <h1 className="pl-2">Farms in Epe</h1>
          </label>
          <label className="space-x-4 flex">
            <input type="checkbox" name="location" value="Eti-Osa" />
            <h1 className="pl-2">Farms in Eti-Osa</h1>
          </label>
          <label className="space-x-4 flex">
            <input type="checkbox" name="location" value="Ikorodu" />
            <h1 className="pl-2">Farms in Ikorodu</h1>
          </label>
          <label className="space-x-4 flex">
            <input type="checkbox" name="location" value="Agege" />
            <h1 className="pl-2">Farms in Agege</h1>
          </label>
          <label className="space-x-4 flex">
            <input type="checkbox" name="location" value="Ifelodun" />
            <h1 className="pl-2">Farms in Ifelodun</h1>
          </label>
          <label className="space-x-4 flex">
            <input type="checkbox" name="location" value="Badagry" />
            <h1 className="pl-2">Farms in Badagry</h1>
          </label>
          <label className="space-x-4 flex">
            <input type="checkbox" name="location" value="Ibeju-Lekki" />
            <h1 className="pl-2">Farms in Ibeju-Lekki</h1>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Select;
