import React from 'react'
import Nav from"../components/Nav"
import Categories from '../category'
import Card from '../components/card'

function Home() {
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav/>
      <div className='flex flex-wrap justify-center items-center gap-[20px] w-[100%]'>
        {Categories.map((item)=>(
          <div key={item.id} className='w-[140px] h-[150px] bg-white flex flex-col gap-5 p-5 justify-start text-[20px] font-semibold text-gray-900 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'>
          <div>{item.icon}</div>
          <div>{item.name}</div>
          </div>
        ))}
      </div>
      <Card/>
    </div>
  )
}

export default Home
