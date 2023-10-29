import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from "./images/logo.svg";
import search from "./images/search.svg";
import home from "./images/home.svg";
import bell from "./images/bell.svg";
import { useRouter } from 'next/navigation';
import bookmark from './images/bookmark.svg';
import profile from './images/profile.svg';

const Navigation = () =>{
  const router = useRouter();
  const [theme, setTheme] = useState();

  useEffect(() =>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
      setTheme('dark');
    else
      setTheme('light');
  }, []);

  const handleTheme = (toTheme) => {
    localStorage.theme = toTheme;
    toTheme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    setTheme(toTheme);
  }

  const data = {
    user:{
      profile_image_url: 'https://pbs.twimg.com/profile_images/1614840228841418752/53yLQOxa_400x400.jpg',
      user_name: 'naved2469',
      full_name: 'Naved Inam',
    },
    text: 'Would be wild if we found out the TVA were actually the ones responsible for pruning the timeline where Spider-Man 2099 had his daughter in Across the Spider-Verse 😱',
    image_url: 'https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png',
    no_of_like: 5,
    is_liked: false,
    no_of_comments: 11,
    date: 'Oct 23 2011',
  }

  return (
    <div className='xl:w-[250px] lg:x-[85px] lg:h-screen ml-3 mr-3 flex flex-col max-md:hidden overflow-y-scroll no-scrollbar'>
      <div className='p-3'>
        <Image src={logo} alt="" height={40} />
      </div>
      <div className='flex flex-col justify-between flex-1 dark:text-white'>
        <div>
          <div className="flex p-3 text-[20px] hover:bg-slate-100 rounded-full cursor-pointer gap-3 dark:hover:bg-neutral-900" onClick={()=>router.push('/posts')}>
            <Image src={home} alt="" height={30} className=" fill-red-500"/>
            <div className="md:max-xl:hidden">Home</div>
          </div>
          <div className="flex p-3 text-[20px] hover:bg-slate-100 rounded-full cursor-pointer gap-3 dark:hover:bg-neutral-900" onClick={()=>router.push('/find')}>
            <Image src={search} alt="" height={30} />
            <div className="md:max-xl:hidden">Find</div>
          </div>
          <div className="flex p-3 text-[20px] hover:bg-slate-100 rounded-full cursor-pointer gap-3 dark:hover:bg-neutral-900" onClick={()=>router.push('/notifications')}>
            <Image src={bell} alt="" height={30} />
            <div className="md:max-xl:hidden">Notifications</div>
          </div>
          <div className="flex p-3 text-[20px] hover:bg-slate-100 rounded-full cursor-pointer gap-3 dark:hover:bg-neutral-900" onClick={()=>router.push('/bookmarks')}>
            <Image src={bookmark} alt="" height={30} />
            <div className="md:max-xl:hidden">Bookmarks</div>
          </div>
          <div className="flex p-3 text-[20px] hover:bg-slate-100 rounded-full cursor-pointer gap-3 dark:hover:bg-neutral-900" onClick={()=>router.push('/naved2469')}>
            <Image src={profile} alt="" height={30} />
            <div className="md:max-xl:hidden">Profile</div>
          </div>
          <div className='p-3 mt-2 mr-10 bg-sky-500 rounded-full text-center font-bold text-white cursor-pointer hover:bg-blue-500 md:max-xl:hidden'>Post</div>
        </div>
        {theme === 'light' && <button type="button" className="bg-yellow-500" onClick={()=>handleTheme('dark')}>Dark Theme</button>}
          {theme === 'dark' && <button type="button" className="bg-yellow-500" onClick={()=>handleTheme('light')}>Light Theme</button>}
        <div className='p-3 pb-6 flex justify-between items-center md:max-xl:hidden'>
          <div className='flex gap-2'>
            <img src={data?.user?.profile_image_url} alt='profile image' width="40" height="40" className='rounded-full'/>
            <div>
              <p className='font-bold text-[15px]'>{"Mohit Raj"}</p>
              <p className='font-light text-[12px]'>@{"mohit355"}</p>
            </div>
          </div>
          <div className='font-bold text-red-400 cursor-pointer hover:text-red-500'>Log Out</div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;