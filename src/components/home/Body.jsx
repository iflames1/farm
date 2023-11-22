import React from "react";
import Banana from "../../assets/home/banana.svg";
import Vegatable from "../../assets/home/vegetable.svg";
import Livestock from "../../assets/home/livestock.svg";
import Lagos from "../../assets/home/lagos.svg";
import Kano from "../../assets/home/kano.svg";
import Anambra from "../../assets/home/anambra.svg";
import Meat from "../../assets/home/meat.svg";
import Berry from "../../assets/home/berry.svg";
import Carrot from "../../assets/home/carrot.svg";
import Orange from "../../assets/home/orange.svg";
import Chilli from "../../assets/home/chilli.svg";
import Tomatoe from "../../assets/home/tomato.svg";

function Body() {
  return (
    <div className="bg-white">
      <div>
        <div className="md:flex justify-between w-10/12 m-auto mt-8">
          <div className="text-center pb-6 items-center justify-center">
            <img src={Banana} width={200} alt="Banana" className="m-auto" />
            <h2 className="text-lg font-bold mt-2">Fruits</h2>
            <p className="text-center">
              Explore to get the best deals on <br /> fruits varieties.
            </p>
          </div>
          <div className="text-center pb-6 items-center justify-center">
            <img
              src={Vegatable}
              width={200}
              alt="Vegatable"
              className="m-auto"
            />
            <h2 className="text-lg font-bold mt-2">Vegatables</h2>
            <p>
              Get farm fresh vegetables for <br />
              your healthy meals
            </p>
          </div>
          <div className="text-center">
            <img
              src={Livestock}
              alt="Livestock"
              width={200}
              className="m-auto"
            />
            <h2 className="text-lg font-bold mt-2">Livestock</h2>
            <p>
              You can buy live farm animals or <br /> processed one{" "}
            </p>
          </div>
        </div>

        <div className="w-11/12 m-auto py-2">
          <div className="">
            <h1 className="text-2xl font-bold">Featured Farmers</h1>
            <p className="py-2 text-xl">
              See our top pick for farmers by people
            </p>
          </div>

          <div className="md:flex gap-4 py-4 px-4">
            <div className="m-auto mb-4 max-w-sm rounded-xl bg-white border border-gray-300 ">
              <a href="">
                <img
                  src={Lagos}
                  alt=""
                  className="rounded-t-xl w-[600px] object-cover"
                />
              </a>
              <div className="p-4">
                <h1 className="pb-1 text-xl font-bold">Ola Owolabi</h1>
                <h1 className="text-green-500 text-lg">Lagos, Nigeria</h1>
              </div>
            </div>
            <div className=" m-auto mb-4 max-w-sm rounded-xl  bg-white border border-gray-300 ">
              <a href="">
                <img
                  src={Kano}
                  alt=""
                  className="rounded-t-xl w-[600px] object-cover"
                />
              </a>
              <div className="p-4">
                <h1 className="pb-1 text-xl font-bold ">Buhari Olagoke</h1>
                <h1 className="text-green-500 text-lg">Kano, Nigeria</h1>
              </div>
            </div>
            <div className=" m-auto max-w-sm rounded-xl bg-white border border-gray-300 ">
              <a href="">
                <img
                  src={Anambra}
                  alt=""
                  className="rounded-t-xl w-[600px] object-cover"
                />
              </a>
              <div className="p-4">
                <h1 className="pb-1 text-xl font-bold">Okoro Chioma</h1>
                <h1 className="text-green-500 text-lg">Anambra, Nigeria</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 m-auto pb-10">
          <div className="">
            <h1 className="text-2xl font-bold">Featured Products</h1>
            <p className="text-xl">
              Check out frequently purchased farm produce
            </p>
          </div>

          <div className="w-11/12 m-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-7 pb-2">
            <div className="m-auto rounded-2xl">
              <a href="">
                <img src={Meat} alt="" className="" />
              </a>
            </div>

            <div className="m-auto rounded-2xl">
              <a href="">
                <img src={Berry} alt="" className="" />
              </a>
            </div>

            <div className="m-auto rounded-2xl ">
              <a href="">
                <img src={Carrot} alt="" className="" />
              </a>
            </div>

            <div className="m-auto rounded-2xl">
              <a href="">
                <img src={Orange} alt="" className="" />
              </a>
            </div>

            <div className="m-auto rounded-2xl">
              <a href="">
                <img src={Chilli} alt="" className="" />
              </a>
            </div>

            <div className="m-auto rounded-2xl">
              <a href="">
                <img src={Tomatoe} alt="" className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
