import React from "react";
import Lekki from "../assets/footer/lekki.svg";
import Rice from "../assets/footer/rice.svg";
import Obasanjo from "../assets/footer/obasanjo.svg";
import Cow from "../assets/footer/cow.svg";

function Banner() {
  return (
    <div className="hidden sm:block">
      <div className="flex flex-wrap">
        <img
          src={Lekki}
          alt=""
          className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4"
        />
        <img
          src={Rice}
          alt=""
          className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4"
        />
        <img
          src={Obasanjo}
          alt=""
          className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4"
        />
        <img
          src={Cow}
          alt=""
          className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4"
        />
      </div>
    </div>
  );
}

export default Banner;
