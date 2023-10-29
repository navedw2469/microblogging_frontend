import React from 'react';
import search from "../images/search.png"
import Image from 'next/image'

const SearchBar = () =>{
  return (
    <div className="bg-slate-100 flex m-3 p-2 rounded-full sticky top-0 dark:bg-neutral-800">
      <Image src={search} alt="search" height={30} />
      <input className="bg-slate-100 w-[85%] focus:outline-none dark:text-white dark:bg-neutral-800" type="text" id="fname" name="fname" placeholder='Search User'></input>
    </div>
  )
}

export default SearchBar;