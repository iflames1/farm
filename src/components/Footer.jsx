import React from "react";
import { FiFacebook } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
function Footer() {
  return (
    <div>
      <div className="bg-[#F5F5F5]">
        <div className="w-11/12 m-auto md:flex py-16">
          <div className="lg:flex justify-between font-bold w-full md:w-[70%]">
            <ul className="sm:pb-6">
              <li className="font-bold text-xl pb-3">Company</li>
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
            <ul className="sm:pb-6">
              <li className="font-bold text-xl pb-3">Top Cities</li>
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
            <ul className="sm:pb-6">
              <li className="font-bold text-xl pb-3">Top Product</li>
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
            <ul className="">
              <li className="font-bold text-xl pb-3">Services</li>
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

          <div className="md:pl-10 text-xl ">
            <h1 className="pb-8 font-bold">
              Enter your E-mail address to get farm updates
            </h1>
            <form className="">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="border outline-none border-white text-black p-2 mb-8 w-[300px] text-center"
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

      <div className="w-11/12 m-auto py-8 md:flex items-center space-x-8">
        <p>&copy; Copyright 2023 FarmConnect. All Rights Reserved.</p>{" "}
        <div className="flex md:space-x-4 space-x-8 ">
          <FiFacebook /> <TfiTwitter /> <FaInstagram /> <FiYoutube />
        </div>
      </div>
    </div>
  );
}

export default Footer;
