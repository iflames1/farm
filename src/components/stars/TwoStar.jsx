import React from "react";
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarOutline } from "react-icons/md";

function TwoStar() {
  return (
    <div className="flex">
      <IoMdStar color="#FFC805" />
      <IoMdStar color="#FFC805" />
      <MdOutlineStarOutline />
      <MdOutlineStarOutline />
      <MdOutlineStarOutline />
    </div>
  );
}

export default TwoStar;
