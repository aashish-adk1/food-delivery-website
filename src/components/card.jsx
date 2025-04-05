import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

function Card({name,image,id,price,type}) {
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 cursor-pointer">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg flex flex-col ">
        <img src={image} className="object-cover" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-semibold text-green-500">
          Rs {price}/-{" "}
        </div>
        <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">
         {(type==="veg")? <LuLeafyGreen />:<GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button className="w-full p-3 bg-green-500 rounded-lg text-gray-700 hover:bg-green-300 transition-all cursor-pointer">
        Add to Dish
      </button>
    </div>
  );
}

export default Card;
