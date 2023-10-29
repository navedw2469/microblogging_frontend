import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';
import RightSection from '../RightSection';
import Image from 'next/image';
import back from './back.png';
import { useRouter } from 'next/router';
import ProfileCard from '../ProfileCard';
import axios from 'axios';

const Follower = () => {
  const router = useRouter();
  const userName = router.query.user_name;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleScroll = (e) => {
    const bottom = (e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight + 1;

    if (bottom && !loading && data?.page !== data?.total) {
      setLoading(true);
      axios.get("http://127.0.0.1:3000/list_users", {
        params: { page: data.page + 1 },
      }).then(function (response) {
        setData((oldData)=>{
          return { ...response.data, list: [...oldData.list, ...response.data.list] };
        });
        setLoading(false);
      }).catch(function (error) {
        console.log(error);
        setLoading(false);
      });;
    }
  }

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/list_users", {
      params: { is_user_data_required: true },
    }).then(function (response) {
      setData(response.data);
    }).catch(function (error) {
      console.log(error);
    });;
  }, []);

  return (
    <div className='flex justify-center'>
      <Navigation/>
      <div className="w-[625px] border-r border-l h-[100vh] overflow-y-scroll" onScroll={handleScroll}>
        <div className="bg-white sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-md">
          <div className="p-3 gap-4 flex items-cente">
            <Image src={back} alt="" className="h-[40px] w-[40px] rounded-full hover:bg-gray-200 cursor-pointer" onClick={()=>router.back()}/>
            <div>
              <div className="text-[20px]">{"Naved Inam"}</div>
              <div className="text-[12px] text-gray-700">@{"naved2469"}</div>
            </div>
          </div>
          <div className='flex border-b'>
            <div className='flex-1 hover:bg-slate-200 cursor-pointer'>
              <div className='text-center p-2 font-bold'>Followers</div>
              <div className='h-[5px] bg-blue-400 rounded-md ml-28 mr-28'></div> 
            </div>
            
            <div className='flex-1 hover:bg-slate-200 cursor-pointer' onClick={()=>router.push(`/${userName}/following`)}>
              <div className='text-center p-2 font-bold'>Following</div>
            </div>
          </div>
        </div>
        {
          data?.list?.map((obj)=>{
            return(
              <ProfileCard key={obj?.id} data={obj}/>
            );
          })
        }
      </div>
      <RightSection />
    </div>
  )
}

export default Follower;