import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';

const Followers = () => {
  const router = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/list_users", {
      params: { is_user_data_required: true, page_limit: 3 },
    }).then(function (response) {
      setData(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <div className="bg-slate-100 rounded-2xl border m-3">
      <div className='p-3 border-b font-bold'>
        FOLLOWERS
      </div>
      {
        data?.list?.map((user)=>{
          return(
            <div className='flex gap-3 p-3 items-center hover:bg-slate-200 cursor-pointer' key={user?.id} onClick={()=>router.push('/user')}>
              <img src={user?.profile_image_url} alt="photo" className='w-[40px] h-[40px] rounded-full'/>
              <div>
                <p className='font-bold text-[15px]'>{user?.full_name}</p>
                <p className='font-light text-[12px]'>@{user?.user_name}</p>
              </div>
            </div>
          );
        })
      }
      {data?.total > 1 && <div className='p-3 border-t text-[15px] cursor-pointer text-blue-500 rounded-b-2xl hover:bg-slate-200'>
        Show More
      </div>}
    </div>
  )
}

export default Followers;