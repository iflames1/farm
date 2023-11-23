import React from "react";
import Farm from "./Farm";
import Select from "./Select";

function Body() {
  return (
    <div className="w-11/12 m-auto lg:flex justify-between pb-16">
      <Farm />
      <Select />
    </div>
  );
}

export default Body;
