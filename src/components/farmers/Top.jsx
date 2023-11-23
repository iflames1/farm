import React from "react";
import Sort from "../Sort";

function Top() {
  return (
    <div>
      <div className="flex w-11/12 m-auto text-3xl py-5">
        <h1 className="pr-8 font-bold">Farmer</h1>
        {/*<h1 className="text-center">Lagos (112 farms)</h1>*/}
      </div>
      <Sort />
    </div>
  );
}

export default Top;
