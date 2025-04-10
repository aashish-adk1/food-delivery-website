import React, { useContext } from 'react'
import Nav from"../components/Nav"
import Categories from '../category'
import Card from '../components/card'
import { food_items } from '../food'
import { SearchContext } from '../context/SearchContext'


function Home() {
const {category,setCategory,input}=useContext(SearchContext)


  function filter(categories,id){
if(id===1){
  setCategory(food_items);
}
else{
  let newList=food_items.filter((item)=>(item.food_category===categories))
  setCategory(newList);
}
  }
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav/>
      <div className='flex flex-wrap justify-center items-center gap-[20px] w-[100%]'>
      {input==="" && 
        Categories.map((item)=>(
          <div key={item.id} className='w-[140px] h-[150px] bg-white flex flex-col gap-5 p-5 justify-start text-[20px] font-semibold text-gray-900 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name,item.id)}>
          <div>{item.icon}</div>
          <div>{item.name}</div>
          </div>
        ))}
      </div>
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {category.map((item)=>(
        <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
        ))}
      </div>
    </div>
  )
}

export default Home
