import React from "react";
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarOutline } from "react-icons/md";

function FourStar() {
  return (
    <div className="flex">
      <IoMdStar color="#FFC805" />
      <IoMdStar color="#FFC805" />
      <IoMdStar color="#FFC805" />
      <IoMdStar color="#FFC805" />
      <MdOutlineStarOutline />
    </div>
  );
}

export default FourStar;
