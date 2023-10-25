import React from 'react';
import Navigation from '../Navigation';
import RightSection from '../RightSection';
import Image from 'next/image';
import back from './back.png';
import { useRouter } from 'next/router';
import ProfileCard from '../ProfileCard';

const Following = () => {
  const router = useRouter();
  return (
    <div className='flex justify-center'>
      <Navigation/>
      <div className="w-[625px] border-r border-l h-[100vh] overflow-y-scroll">
        <div className="bg-white sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-md">
          <div className="p-3 gap-4 flex items-cente">
            <Image src={back} alt="" className="h-[40px] w-[40px] rounded-full hover:bg-gray-200 cursor-pointer" onClick={()=>router.back()}/>
            <div>
              <div className="text-[20px]">{"Naved Inam"}</div>
              <div className="text-[12px] text-gray-700">@{"naved2469"}</div>
            </div>
          </div>
          <div className='flex border-b'>
            <div className='flex-1 hover:bg-slate-200 cursor-pointer' onClick={()=>router.push('./followers')}>
              <div className='text-center p-2 font-bold'>Followers</div>
            </div>
            
            <div className='flex-1 hover:bg-slate-200 cursor-pointer'>
              <div className='text-center p-2 font-bold'>Following</div>
              <div className='h-[5px] bg-blue-400 rounded-md ml-28 mr-28'></div>
            </div>
        </div>
        </div>
        {
          [1,2,3,4,5,6,7].map((c)=>{
            return(
              <ProfileCard key={c}/>
            );
          })
        }
      </div>
      <RightSection />
    </div>
  )
}

export default Following;