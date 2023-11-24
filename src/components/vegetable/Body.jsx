/* eslint-disable react/prop-types */
import Deserve from "../home/Deserve";
import Banner from "../Banner";
import Star from "../stars/FiveStar";
import Onion from "../../assets/vegetable/onion.svg";
import Orange from "../../assets/vegetable/orange.svg";
import Grape from "../../assets/vegetable/grape.svg";
import Broccoli from "../../assets/vegetable/broccoli.svg";
import Cucumbers from "../../assets/vegetable/cucumber.svg";
import Cabbage from "../../assets/vegetable/cabbage.svg";

function ProductCard({ image, description, price, prev_price }) {
  return (
    <div className="w-full bg-white m-auto p-4 border border-gray-300 rounded-2xl">
      <img
        src={image}
        alt=""
        className="object-contain mx-auto md:h-[200px] h-[123px]"
      />
      <p className="text-sm">{description}</p>
      <div className="md:flex justify-between items-center">
        <h1 className="text-lg font-bold py-4">
          <span className="line-through">N</span>
          {price}
          <span className="text-sm line-through text-gray-400">
            {prev_price}
          </span>
        </h1>
        <Star />
      </div>
      <button className="bg-[#008033] mt-4 w-full py-2 text-white text-xl rounded hover:bg-green-600">
        Add to cart
      </button>
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white">
      <div className="w-11/12 md:w-10/12 m-auto">
        <h1 className="md:text-2xl py-4 font-bold">Click add to cart to buy</h1>

        <div className="grid-cols-2 grid gap-4">
          <ProductCard
            image={Grape}
            description="Plum, succulent and flavorful grapes carefully grown in local vineyards"
            price="7,000"
            prev_price="N9,000"
          />
          <ProductCard
            image={Broccoli}
            description="Vibrant and nutritious broccoli for healthy and nutritious meals"
            price="20,000"
            prev_price="N20,000"
          />
          <ProductCard
            image={Onion}
            description="Farm fresh aromatic bulbs harvested at peak for savory dishes. Kitchen essential"
            price="7,000"
            prev_price="N9,000"
          />
          <ProductCard
            image={Orange}
            description="Vibrant burst of citrus from freshly picked oranges"
            price="2,000"
            prev_price="N9,000"
          />
          <ProductCard
            image={Cucumbers}
            description="Farm-fresh cucumbers for delightful addition to salads and a snack"
            price="1,000"
            prev_price="N2,000"
          />
          <ProductCard
            image={Cabbage}
            description="Crisp, wholesome farm-fresh cabbage for colesaws and stews"
            price="5,000"
            prev_price="N9,000"
          />
        </div>
      </div>
      <div>
        <Deserve />
        <Banner />
      </div>
    </div>
  );
}

export default Body;
