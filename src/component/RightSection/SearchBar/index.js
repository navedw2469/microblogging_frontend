import React from 'react';
import search from "../images/search.png"
import Image from 'next/image'
import styles from './styles.module.css'

const SearchBar = () =>{
  return (
    <div className="bg-slate-100 flex m-3 border p-2 rounded-full sticky top-0">
      <Image src={search} alt="search" height={30} />
      <input className={styles.input} type="text" id="fname" name="fname" placeholder='Search User'></input>
    </div>
  )
}

export default SearchBar;