import React from 'react'
import styles from './styles.module.css';
import logo from './logo-no-background.png';
import Image from "next/image";
import profilePicture from "./profile.webp"
import search from "./search.png"

const Navbar = () => {
  return (
    <main className="border-l border-r border-b border-[#ccc] sticky top-0 bg-opacity-90 bg-white backdrop-filter backdrop-blur-md">
      <div className={styles.navbar}>
        <Image src={logo} alt="logo" height={40} />
        {/* <div className={styles.search_bar}>
          <Image src={search} alt="search" height={30} />
          <input className={styles.input} type="text" id="fname" name="fname" placeholder='Search'></input>
        </div> */}
        <img src='https://pbs.twimg.com/profile_images/1614840228841418752/53yLQOxa_400x400.jpg' alt="profile" width={"40px"} className="rounded-full" />
      </div>
    </main>
  )
}
export default Navbar;