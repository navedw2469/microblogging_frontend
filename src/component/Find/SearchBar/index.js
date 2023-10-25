import React from 'react';
import search from "../images/search.png"
import Image from 'next/image'

const SearchBar = () =>{
  return (
    <div className="bg-slate-100 flex p-2 mb-2 mx-4 rounded-full">
      <Image src={search} alt="search" height={30} />
      <input className="w-[90%] focus-visible:outline-none bg-slate-100" type="text" id="fname" name="fname" placeholder='Search'></input>
    </div>
  )
}

export default SearchBar;