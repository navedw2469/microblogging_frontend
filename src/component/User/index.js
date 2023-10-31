import React, { useState, useEffect } from 'react';
import Card from "../Card"
import Navigation from '../Navigation';
import RightSection from '../RightSection';
import linkIcon from './link_icon.png'
import back from './back.png'
import Image from 'next/image'
import { useRouter } from 'next/router';
import secureAPI from '@/api/axios';

const isEmpty = (obj) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

const User = () => {
  const router = useRouter();
  const userName = router.query.user_name

  const [tab, setTab] = useState('posts');
  const [followed, setFollowed] = useState(false);
  const [data, setData] = useState({});
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    secureAPI.get("get_user", {
      params: { user_name: userName },
    }).then(function (response) {
      setData(response.data?.data);
    }).catch(function (error) {
      console.log(error);
    });
  }, [userName]);

  useEffect(()=>{
    if(!isEmpty(data)){
      setLoading(true);
      secureAPI.get("list_posts", {
        params: { is_user_data_required: true },
      }).then(function (response) {
        setPosts(response.data);
        setLoading(false);
      }).catch(function (error) {
        console.log(error);
        setLoading(false);
      });
    }
  },[data, tab])

  const handleScroll = (e) => {
    const bottom = (e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight + 1;

    if (bottom && !loading && posts?.page !== posts?.total) {
      setLoading(true);
      secureAPI.get("list_posts", {
        params: { is_user_data_required: true, page: posts.page + 1 },
      }).then(function (response) {
        setPosts((oldData)=>{
          return { ...response.data, list: [...oldData.list, ...response.data.list] };
        });
        setLoading(false);
      }).catch(function (error) {
        console.log(error);
        setLoading(false);
      });
    }
  }

  return(
    <div className='flex justify-center'>
      <Navigation />
      <div className="w-[625px] h-[100vh] overflow-y-auto border-r border-l" onScroll={handleScroll}>
        <div className="p-3 gap-4 flex items-center sticky top-0 bg-opacity-80 bg-white backdrop-filter backdrop-blur-md">
          <Image src={back} alt="" className="h-[40px] w-[40px] rounded-full hover:bg-gray-200 cursor-pointer" onClick={()=>router.back()}/>
          <div>
            <div className="text-[20px]">{data?.user_name}</div>
            <div className="text-[12px] text-gray-700">@{data?.full_name}</div>
          </div>
        </div>
        <div className='flex p-10 gap-5'>
          <img
            src={data?.profile_image_url}
            alt='profile Image'
            className='w-[30%] h-[0%] rounded-full bg-slate-800'
          />
          <div className="flex-1">
            <div className='flex items-center gap-3 mb-3 justify-between'>
              <div>
                <div className='text-[24px]'>{data?.full_name}</div>
                <div className='text-[14px] text-gray-700 font-light'>@{data?.user_name}</div>
              </div>
              {!followed && <div className='px-4 py-2 border-2 rounded-full bg-blue-400 text-white font-bold hover:bg-blue-500 cursor-pointer' onClick={()=>setFollowed(true)}> Follow </div>}
              {followed && <div className='px-4 py-2 border-2 rounded-full font-bold cursor-pointer hover:bg-slate-100' onClick={()=>setFollowed(false)}> Unfollow </div>}
            </div>
            <div className='flex gap-5 mb-1'>
              <div className='flex hover:underline cursor-pointer' onClick={()=>router.push(`/${userName}/followers`)}>
                <div className='text-[14px] font-bold'>{234}</div>
                <div className='text-[14px]'>&nbsp;{"Followers"}</div>
              </div>
              <div className='flex gap-1 hover:underline cursor-pointer' onClick={()=>router.push(`/${userName}/following`)}>
                <div className='text-[14px] font-bold'>{234}</div>
                <div className='text-[14px]'>&nbsp;{"Followings"}</div>
              </div>
            </div>
            <div className='mb-1'>{data?.bio}</div>
            {/* <div className='flex gap-1'>
              <Image src={linkIcon} className='w-[16px]'/>
              <div>{}</div>
            </div> */}
          </div>
        </div>
        <div className='flex border-b'>
          <div className='flex-1 hover:bg-slate-200 cursor-pointer' onClick={()=>{setTab("posts")}}>
            <div className='text-center p-2 font-bold'>Posts</div>
            { tab === 'posts' && <div className='h-[5px] bg-blue-400 rounded-md ml-12 mr-12'></div>}
          </div>
          
          <div className='flex-1 hover:bg-slate-200 cursor-pointer' onClick={()=>{setTab("replies")}}>
            <div className='text-center p-2 font-bold'>Replies</div>
            { tab === 'replies' && <div className='h-[5px] bg-blue-400 rounded-md ml-12 mr-12'></div>}
          </div>

          <div className='flex-1 hover:bg-slate-200 cursor-pointer' onClick={()=>{setTab("media")}}>
            <div className='text-center p-2 font-bold'>Media</div>
            { tab === 'media' && <div className='h-[5px] bg-blue-400 rounded-md ml-12 mr-12'></div>}
          </div>

          <div className='flex-1 hover:bg-slate-200 cursor-pointer' onClick={()=>{setTab("likes")}}>
            <div className='text-center p-2 font-bold'>Likes</div>
            { tab === 'likes' && <div className='h-[5px] bg-blue-400 rounded-md ml-12 mr-12'></div>}
          </div>
        </div>
        {
        posts?.list?.map((obj)=>{
          return(
            <Card key={obj?.id} data={obj} />
            );
          })
        }
      </div>
      <RightSection />
    </div>
  )
}

export default User;