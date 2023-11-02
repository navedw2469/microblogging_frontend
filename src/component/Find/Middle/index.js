import React, {useState, useEffect} from 'react';
import Card from '@/component/Card';
import SearchBar from '../SearchBar';
import ProfileCard from '@/component/ProfileCard';
import secureAPI from '@/api/axios';
import {PostSkelton, UserSkelton} from '@/component/common/Skelton';

const Middle = () => {
  const [posts, setPosts] = useState({});
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('posts');
  

  const handleScroll = (e) => {
    if(tab === 'posts') return handleScrollPosts(e);
    if(tab === 'users') return handleScrollUsers(e);
  }

  const handleScrollPosts = (e) => {
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

  const handleScrollUsers = (e) => {
    const bottom = (e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight + 1;

    if (bottom && !loading && users?.page !== users?.total) {
      setLoading(true);
      secureAPI.get("list_users", {
        params: { page:  (users.page ? users.page + 1 : 1) }
      }).then(function (response) {
        setUsers((oldData)=>{
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
    if(tab === 'posts' && !posts?.page){
      secureAPI.get("list_posts", {
        params: { is_user_data_required: true },
      }).then(function (response) {
        setPosts(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }

    if(tab === 'users' && !users?.page){
      secureAPI.get("list_users", {
        params: { page: 1 },
      }).then(function (response) {
        setUsers(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, [tab]);

  return(
    <div className="w-[625px] h-[100vh] overflow-y-scroll border-l border-r" onScroll={handleScroll}>
      <div className='sticky top-0 bg-white pt-3 border-b bg-opacity-80 backdrop-filter backdrop-blur-md'>
        <SearchBar />
        <div className='flex'>
          <div className='flex-1 hover:bg-slate-200 cursor-pointer' onClick={()=>{setTab('posts')}}>
            <div className='text-center p-2 font-bold'>Posts</div>
            {tab === 'posts' && <div className='h-[5px] bg-blue-400 rounded-md ml-28 mr-28'></div>}
          </div>
          
          <div className='flex-1 hover:bg-slate-200 cursor-pointer' onClick={()=>{setTab('users')}}>
            <div className='text-center p-2 font-bold'>Users</div>
            {tab === 'users' && <div className='h-[5px] bg-blue-400 rounded-md ml-28 mr-28'></div>}
          </div>
        </div>
      </div>
      {tab === 'posts' && posts?.list?.map((obj)=>{
        
        return(
          <Card key={obj?.id} data={obj}/>
          );
          
        })
      }
      
      {tab === 'posts' && <PostSkelton />}
      
      {tab === 'users' && users?.list?.map((obj)=>{
        return(
          <ProfileCard key={obj?.id} data={obj}/>
          );
        })
      }
      {tab === 'users' && <UserSkelton />}
      {loading && <div>Loading ...</div>}
    </div>
  );

}

export default Middle;