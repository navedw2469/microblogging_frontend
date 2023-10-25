import React from 'react';
import Navigation from '../Navigation';
import RightSection from '../RightSection';
import Image from 'next/image';
import back from './back.png';
import { useRouter } from 'next/router';
import Card from '../Card';

const Bookmarks = () => {
  const router = useRouter();

  return (
    <div className='flex justify-center'>
      <Navigation/>
      <div className="w-[625px] border-r border-l h-[100vh] overflow-y-scroll">
        <div className="bg-white sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-md border-b">
          <div className="p-3 gap-4 flex items-center">
            <Image src={back} alt="" className="h-[40px] w-[40px] rounded-full hover:bg-gray-200 cursor-pointer" onClick={()=>router.back()}/>
            <div>
              <div className="text-[20px]">Notifications</div>
              <div className="text-[12px] text-gray-700">@{"naved2469"}</div>
            </div>
          </div>
        </div>
        {
          [].map((obj)=>{
            return(
              <Card key={obj?.id} data={obj}/>
            );
          })
        }
      </div>
      <RightSection />
    </div>
  )
}

export default Bookmarks;