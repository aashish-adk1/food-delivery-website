import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import image1 from "../assets/image1.avif"
function Card() {
  return (
    <div className='w-[300px] h-[400px] bg-white p-4'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg flex flex-col '>
        <img src={image1} className='object-cover' />
      </div>
      <div className='text-2xl font-semibold'>panckaes</div>
      <div>
        Ra 299/-
      </div>
      <div>

        <LuLeafyGreen />
        <span>Veg</span>
      </div>
    </div>
  );
}

export default Card;
