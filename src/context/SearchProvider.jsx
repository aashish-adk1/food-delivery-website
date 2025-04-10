import React from 'react'
import { SearchContext } from './SearchContext'
import { useState } from 'react'
import { food_items } from '../food'
function SearchProvider({children}) {
    const [input,setInput]=useState("");
    
  const [category,setCategory]=useState(food_items);


  return (
    <SearchContext.Provider value={{input,setInput,category,setCategory}}>
        {children}
    </SearchContext.Provider>
)
}

export default SearchProvider;