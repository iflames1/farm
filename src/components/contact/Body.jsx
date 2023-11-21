import React from "react";
import Deserve from "../home/Deserve";
import star from "../../assets/contact/star.png";
import broccoli1 from "../../assets/contact/broccoli1.png";
import broccoli2 from "../../assets/contact/broccoli2.png";
import broccoli3 from "../../assets/contact/broccoli3.png";
import broccoli4 from "../../assets/contact/broccoli4.png";
import broccoli5 from "../../assets/contact/broccoli5.png";
import broccoli6 from "../../assets/contact/broccoli6.png";

function ProductCard({ image, description, price }) {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="w-auto bg-white m-auto md:py-4 py-8 p-4 border border-gray-300 rounded-2xl">
        <img
          src={image}
          alt=""
          className="mx-auto w-full md:w-[250px] lg:w-[250px] xl:w-[250px]"
        />
        <p className="text-lg">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center items-center">
          <h1 className="text-lg font-bold py-4">{price}</h1>
          <img src={star} alt="" className="flex items-center w-[100px]" />
        </div>
        <button className="flex items-center bg-green-700 text-white p-3 my-4 mx-auto  px-16 text-xl rounded hover:text-white hover:hover:font-bold">
          Add to cart
        </button>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto py-8">
        <div className="w-10/12 m-auto">
          <h1 className="lg:text-3xl font-bold">Click "Add to Cart" to buy</h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <ProductCard
            image={broccoli1}
            description="Farm fresh aromatic bulbs harvested at peak for savory dishes. Kitchen essential"
            price="N-7,000"
          />
          <ProductCard
            image={broccoli2}
            description="Vibrant burst of citrus from freshly picked oranges"
            price="N-2,000"
          />
          <ProductCard
            image={broccoli3}
            description="Plum, succulent and flavorful grapes carefully grown in local vineyards"
            price="N-7,000"
          />
          <ProductCard
            image={broccoli4}
            description="Vibrant and nutritious broccoli for healthy and nutritious meals"
            price="N-20,000"
          />
          <ProductCard
            image={broccoli5}
            description="Farm-fresh cucumbers for delightful addition to salads and a snack"
            price="N-1,000"
          />
          <ProductCard
            image={broccoli6}
            description="Crisp, wholesome farm-fresh cabbage for colesaws and stews"
            price="N-5,000"
          />
        </div>
      </div>
      <div>
        <Deserve />
      </div>
    </div>
  );
}

export default Body;
