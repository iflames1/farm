import React from "react";
import Lekki from "../assets/footer/lekki.svg";
import Rice from "../assets/footer/rice.svg";
import Obasanjo from "../assets/footer/obasanjo.svg";
import Cow from "../assets/footer/cow.svg";
function Footer() {
  return (
    <div className="pt-8">
      <div className="w-11/12 m-auto pb-8 flex flex-wrap">
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

      <div className="bg-[#F5F5F5]">
        <div className="w-11/12 m-auto flex py-16">
          <div className="flex justify-between font-bold w-[70%]">
            <ul className="">
              <li className="font-bold text-xl pb-6">Company</li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">FAQ</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">About Us</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Job listing</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Terms and policies</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Cookies policy</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Privacy policy</a>
              </li>
            </ul>
            <ul className="">
              <li className="font-bold text-xl pb-6">Top Cities</li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Farms in Abuja</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Farms n Lagos</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Farms in Owerri</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Farms in Kano</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Farms in Borno</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Farms in Kogi</a>
              </li>
            </ul>
            <ul>
              <li className="font-bold text-xl pb-6">Top Product</li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Onion</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Peppers</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Avocado</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Cauliflower</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Moringa plant</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Lettuce</a>
              </li>
            </ul>
            <ul>
              <li className="font-bold text-xl pb-6">Services</li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Nationwide Delivery</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Bulk Delivery</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Packaging</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Door Delivery</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Pick-up Stations</a>
              </li>
              <li className="text-[#33f07f] pb-3">
                <a href="#">Pay on Delivery</a>
              </li>
            </ul>
          </div>
          <div className="pl-10 text-xl">
            <h1 className="pb-8 font-bold">
              Enter your E-mail address to get farm updates
            </h1>
            <form className="">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="border border-white focus:border-none text-black p-2 mb-8 w-[300px] text-center"
              />
              <button
                type="submit"
                className="bg-[#008033] text-white py-2 px-4 rounded w-[300px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-11/12 m-auto py-8">
        <p>&copy; Copyright 2023 FarmConnect. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
