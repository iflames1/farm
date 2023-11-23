import React from "react";
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarOutline } from "react-icons/md";

function OneStar() {
  return (
    <div className="flex">
      <IoMdStar color="#FFC805" />
      <MdOutlineStarOutline />
      <MdOutlineStarOutline />
      <MdOutlineStarOutline />
      <MdOutlineStarOutline />
    </div>
  );
}

export default OneStar;
