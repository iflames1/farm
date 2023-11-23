import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa6";
import { FiPhoneCall, FiMessageCircle } from "react-icons/fi";
import Tkd from "../../assets/farmer/tkd.svg";
import Abiriza from "../../assets/farmer/abiriza.svg";
import Jovana from "../../assets/farmer/jovana.svg";
import Lashone from "../../assets/farmer/lashone.svg";
import Lekki from "../../assets/farmer/lekki.svg";
import Owolabi from "../../assets/farmer/owolabi.svg";
import Romix from "../../assets/farmer/romix.svg";
import FiveStar from "../stars/FiveStar";

function Farm() {
  return (
    <div className="lg:w-[60%]">
      <h1 className="text-3xl font-bold py-8">100 farms match your search</h1>
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
            <img src={Owolabi} alt="" width={150} className="w-200 md:mr-4" />
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
            <img src={Lashone} alt="" width={150} className="w-200 md:mr-4" />
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
            <img src={Owolabi} alt="" width={150} className="w-200 md:mr-4" />
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
            <img src={Abiriza} alt="" width={150} className="w-200 md:mr-4" />
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
            <img src={Jovana} alt="" width={150} className="w-200 md:mr-4" />
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
  );
}

export default Farm;
