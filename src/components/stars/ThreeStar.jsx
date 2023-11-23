import React from "react";
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarOutline } from "react-icons/md";

function ThreeStar() {
  return (
    <div className="flex">
      <IoMdStar color="#FFC805" />
      <IoMdStar color="#FFC805" />
      <IoMdStar color="#FFC805" />
      <MdOutlineStarOutline />
      <MdOutlineStarOutline />
    </div>
  );
}

export default ThreeStar;
