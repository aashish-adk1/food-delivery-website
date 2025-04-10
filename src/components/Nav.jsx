import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { SearchContext } from '../context/SearchContext';
import { food_items } from '../food';

function Nav() {
const {input,setInput,setCategory}=useContext(SearchContext);

useEffect(()=>{
 let searchList= food_items.filter((item)=>item.food_name.toLowerCase().includes(input.toLowerCase()));
 setCategory(searchList);
},[input])
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md">
        <MdFastfood className="w-[30px] h-[30px] text-green-400" />
      </div>
      <form className="flex items-center w-[45%] h-[60px] bg-white gap-[20px] px-3 rounded-md shadow-xl md:w-[70%]" onSubmit={e=>e.preventDefault()}>
        <FaSearch className="text-green-400 w-[20px] h-[20px] " />
        <input
          type="text"
          placeholder="Search your food...."
          className="w-full outline-none text-[16px] md:text-[20px]"
          onChange={(e)=>setInput(e.target.value)} value={input}
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
