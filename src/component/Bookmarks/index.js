import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';
import RightSection from '../RightSection';
import Image from 'next/image';
import back from './back.png';
import { useRouter } from 'next/router';
import Card from '../Card';
import secureAPI from '@/api/axios';

const Bookmarks = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleScroll = (e) => {
    const bottom = (e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight + 1;

    if (bottom && !loading && data?.page !== data?.total) {
      setLoading(true);
      secureAPI.get("list_posts", {
        params: { is_user_data_required: true, page: data.page + 1 },
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
    secureAPI.get("list_posts", {
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
        <div className="bg-white sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-md border-b">
          <div className="p-3 gap-4 flex items-center">
            <Image src={back} alt="" className="h-[40px] w-[40px] rounded-full hover:bg-gray-200 cursor-pointer" onClick={()=>router.back()}/>
            <div>
              <div className="text-[20px]">Bookmarks</div>
              <div className="text-[12px] text-gray-700">@{"naved2469"}</div>
            </div>
          </div>
        </div>
        {
          data?.list?.map((obj)=>{
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