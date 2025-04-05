import React from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

function Nav() {
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md">
        <MdFastfood className="w-[30px] h-[30px] text-green-400" />
      </div>
      <form className="flex items-center w-[45%] h-[60px] bg-white gap-[20px] px-3 rounded-md shadow-xl md:w-[70%]">
        <FaSearch className="text-green-400 w-[20px] h-[20px] " />
        <input
          type="text"
          placeholder="Search your food...."
          className="w-full outline-none text-[16px] md:text-[20px]"
        />
      </form>
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative">
        <span className='absolute top-0 right-2 text-green-400 font-bold text-[18px]'>0</span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-400" />
      </div>
    </div>
  );
}

export default Nav
