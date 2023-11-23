import React from "react";
import Find from "../../assets/home/find.svg";
import Sort from "../Sort";

function Top() {
  return (
    <div className="bg-white">
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
      <Sort />
    </div>
  );
}

export default Top;
