import React from "react";
import Sort from "./Sort";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa6";
import { FiPhoneCall, FiMessageCircle } from "react-icons/fi";
import Tkd from "../assets/farmer/tkd.svg";
import Abiriza from "../assets/farmer/abiriza.svg";
import Jovana from "../assets/farmer/jovana.svg";
import Lashone from "../assets/farmer/lashone.svg";
import Lekki from "../assets/farmer/lekki.svg";
import Owolabi from "../assets/farmer/owolabi.svg";
import Romix from "../assets/farmer/romix.svg";
import Map from "../assets/farmer/map.svg";
import OneStar from "./stars/OneStar";
import TwoStar from "./stars/TwoStar";
import ThreeStar from "./stars/ThreeStar";
import FourStar from "./stars/FourStar";
import FiveStar from "./stars/FiveStar";
import Deserve from "./home/Deserve";
import Banner from "./Banner";

function Farmers() {
  return (
    <div>
      <div className="flex w-11/12 m-auto text-3xl py-5">
        <h1 className="pr-8 font-bold">Farmer</h1>
        {/*<h1 className="text-center">Lagos (112 farms)</h1>*/}
      </div>
      <Sort />
      <h1 className="text-3xl w-11/12 font-bold py-8 m-auto">
        100 farms match your search
      </h1>
      <div className="w-11/12 m-auto lg:flex justify-between pb-16">
        <div className="lg:w-[60%]">
          <div className="bg-[#008033] flex justify-between mb-6 text-white p-5">
            <button className="flex space-x-3 items-center">
              <BiMenuAltLeft size={35} />
              <h1 className="md:text-xl">Our Top Picks</h1>
              <FaArrowDown size={25} />
            </button>
            <button className="flex space-x-3 items-center">
              <BiMenuAltLeft size={35} />
              <h1 className="md:text-xl">Most Reviews</h1>
              <FaArrowDown size={25} />
            </button>
            <button className="sm:flex space-x-3 items-center hidden">
              <BiMenuAltLeft size={35} />
              <h1 className="md:text-xl">Our Latest</h1>
              <FaArrowDown size={25} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="m-auto border flex justify-between">
              <div className="flex">
                <img src={Tkd} alt="" width={150} className="w-200 md:mr-4" />
                <div className="text-sm">
                  <h1 className="font-bold text-lg">TKD Farms</h1>
                  <p>40, Alexander Avenue, Ikoyi, Lagos</p>
                  <div>
                    <div className="flex">
                      <FiveStar /> <p className="pl-2">25 Reviews</p>
                    </div>
                    <p>Hours: 8:00am-6:00pm</p>
                    <p>+234 811 051 ****</p>
                  </div>
                </div>
              </div>
              <div className="text-[#008033] hidden sm:block py-4 pr-8">
                <FiPhoneCall size={30} className="mb-8" />{" "}
                <FiMessageCircle size={40} />
              </div>
            </div>
            <div className="m-auto border flex justify-between">
              <div className="flex">
                <img
                  src={Owolabi}
                  alt=""
                  width={150}
                  className="w-200 md:mr-4"
                />
                <div className="text-sm">
                  <h1 className="font-bold text-lg">Owolabi Farms</h1>
                  <p>Off Admiralty Way</p>
                  <div>
                    <div className="flex">
                      <FiveStar /> <p className="pl-2">No Reviews</p>
                    </div>
                    <p>Hours: 8:00am-7:00pm</p>
                    <p>+234 811 051 ****</p>
                  </div>
                </div>
              </div>
              <div className="text-[#008033] hidden sm:block py-4 pr-8">
                <FiPhoneCall size={30} className="mb-8" />{" "}
                <FiMessageCircle size={40} />
              </div>
            </div>
            <div className="m-auto border flex justify-between">
              <div className="flex">
                <img
                  src={Lashone}
                  alt=""
                  width={150}
                  className="w-200 md:mr-4"
                />
                <div className="text-sm">
                  <h1 className="font-bold text-lg">Lashone Farms</h1>
                  <p>Ikeja</p>
                  <div>
                    <div className="flex">
                      <FiveStar /> <p className="pl-2">No Reviews</p>
                    </div>
                    <p>Hours: 8:00am-5:00pm</p>
                    <p>+234 811 051 ****</p>
                  </div>
                </div>
              </div>
              <div className="text-[#008033] hidden sm:block py-4 pr-8">
                <FiPhoneCall size={30} className="mb-8" />{" "}
                <FiMessageCircle size={40} />
              </div>
            </div>
            <div className="m-auto border flex justify-between">
              <div className="flex">
                <img src={Romix} alt="" width={150} className="w-200 md:mr-4" />
                <div className="text-sm">
                  <h1 className="font-bold text-lg">Jovana Integrated Farms</h1>
                  <p>Livestock breeder 127 Isolo Rd</p>
                  <div>
                    <div className="flex">
                      <FiveStar /> <p className="pl-2">3 Reviews</p>
                    </div>
                    <p>Hours: 8:00am-6:00pm</p>
                    <p>+234 811 051 ****</p>
                  </div>
                </div>
              </div>
              <div className="text-[#008033] hidden sm:block py-4 pr-8">
                <FiPhoneCall size={30} className="mb-8" />{" "}
                <FiMessageCircle size={40} />
              </div>
            </div>
            <div className="m-auto border flex justify-between">
              <div className="flex">
                <img
                  src={Owolabi}
                  alt=""
                  width={150}
                  className="w-200 md:mr-4"
                />
                <div className="text-sm">
                  <h1 className="font-bold text-lg">Tressure Farms</h1>
                  <p>5, Ibidapo Kayode Str.</p>
                  <div>
                    <div className="flex">
                      <FiveStar /> <p className="pl-2">No Reviews</p>
                    </div>
                    <p>Hours: 8:00am-6:00pm</p>
                    <p>+234 811 051 ****</p>
                  </div>
                </div>
              </div>
              <div className="text-[#008033] hidden sm:block py-4 pr-8">
                <FiPhoneCall size={30} className="mb-8" />{" "}
                <FiMessageCircle size={40} />
              </div>
            </div>
            <div className="m-auto border flex justify-between">
              <div className="flex">
                <img src={Lekki} alt="" width={150} className="w-200 md:mr-4" />
                <div className="text-sm">
                  <h1 className="font-bold text-lg">Lekki Farms</h1>
                  <p>Lekki Farm Avenue, Off Admiralty Way</p>
                  <div>
                    <div className="flex">
                      <FiveStar /> <p>38 Reviews</p>
                    </div>
                    <p>Hours: 8:00am-6:00pm</p>
                    <p>+234 811 051 ****</p>
                  </div>
                </div>
              </div>
              <div className="text-[#008033] hidden sm:block py-4 pr-8">
                <FiPhoneCall size={30} className="mb-8" />{" "}
                <FiMessageCircle size={40} />
              </div>
            </div>
            <div className="m-auto border flex justify-between">
              <div className="flex">
                <img
                  src={Abiriza}
                  alt=""
                  width={150}
                  className="w-200 md:mr-4"
                />
                <div className="text-sm">
                  <h1 className="font-bold text-lg">Abiriza Farms</h1>
                  <p>Babs Aninashaun Road</p>
                  <div>
                    <div className="flex">
                      <FiveStar /> <p>1 Reviews</p>
                    </div>
                    <p>Hours: 8:00am-6:00pm</p>
                    <p>+234 811 051 ****</p>
                  </div>
                </div>
              </div>
              <div className="text-[#008033] hidden sm:block py-4 pr-8">
                <FiPhoneCall size={30} className="mb-8" />{" "}
                <FiMessageCircle size={40} />
              </div>
            </div>
            <div className="m-auto border flex justify-between">
              <div className="flex">
                <img src={Romix} alt="" width={150} className="w-200 md:mr-4" />
                <div className="text-sm">
                  <h1 className="font-bold text-lg">Romix Farms</h1>
                  <p>21, Sere Cl.</p>
                  <div>
                    <div className="flex">
                      <FiveStar /> <p>1 Reviews</p>
                    </div>
                    <p>Hours: 8:00am-5:00pm</p>
                    <p>+234 811 051 ****</p>
                  </div>
                </div>
              </div>
              <div className="text-[#008033] hidden sm:block py-4 pr-8">
                <FiPhoneCall size={30} className="mb-8" />{" "}
                <FiMessageCircle size={40} />
              </div>
            </div>
            <div className="m-auto border flex justify-between">
              <div className="flex">
                <img
                  src={Jovana}
                  alt=""
                  width={150}
                  className="w-200 md:mr-4"
                />
                <div className="text-sm">
                  <h1 className="font-bold text-lg">Lagos State Farms</h1>
                  <p>40, Alexander Avenue, Ikoyi, Lagos</p>
                  <div>
                    <div className="flex">
                      <FiveStar /> <p>7 Reviews</p>
                    </div>
                    <p>Hours: 8:00am-6:00pm</p>
                    <p>+234 811 051 ****</p>
                  </div>
                </div>
              </div>
              <div className="text-[#008033] hidden sm:block py-4 pr-8">
                <FiPhoneCall size={30} className="mb-8" />{" "}
                <FiMessageCircle size={40} />
              </div>
            </div>
            <div className="m-auto border flex justify-between">
              <div className="flex">
                <img src={Tkd} alt="" width={150} className="w-200 md:mr-4" />
                <div className="text-sm">
                  <h1 className="font-bold text-lg">Mojisola Sherifat Farms</h1>
                  <p>2, Spencer Str.</p>
                  <div>
                    <div className="flex">
                      <FiveStar /> <p>No Reviews</p>
                    </div>
                    <p>Hours: 8:00am-6:00pm</p>
                    <p>+234 811 051 ****</p>
                  </div>
                </div>
              </div>
              <div className="text-[#008033] hidden sm:block py-4 pr-8">
                <FiPhoneCall size={30} className="mb-8" />{" "}
                <FiMessageCircle size={40} />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 lg:w-[30%] md:w-[50%] m-auto space-y-8">
          <div className="text-center rounded-xl m-auto border border-gray-400">
            <img
              src={Map}
              alt=""
              className="rounded-t-xl object-cover w-[600px]"
            />
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
      </div>
      <Deserve />
      <Banner />
    </div>
  );
}

export default Farmers;
