import React, {useState} from 'react';

const ProfileCard = ({data = {}}) =>{
  const [followed, setFollowed] = useState(false);
  // const data = {
  //   user:{
  //     profile_image_url: 'https://pbs.twimg.com/profile_images/1700051019525488640/VRqy0bTE_400x400.jpg',
  //     user_name: 'naved2469',
  //     full_name: 'Naved Inam',
  //   },
  //   text: 'Would be wild if we found out the TVA were actually the ones responsible for pruning the timeline.',
  //   image_url: 'https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png',
  //   no_of_like: 5,
  //   is_liked: false,
  //   no_of_comments: 11,
  //   date: 'Oct 23 2011',
  // }

  return (
    <div className="border-b p-3 flex gap-4 hover:bg-gray-100 cursor-pointer" >

      <div>
        <img src={data?.profile_image_url} alt='profile image' width="40" height="40" className='rounded-full'/>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <p className='font-bold'>{data?.full_name}</p>
            <p className='font-light'>@{data?.user_name}</p>
          </div>
          { !followed && <div className="px-4 py-1 border rounded-full bg-blue-400 text-white font-bold cursor-pointer hover:bg-blue-500" onClick={()=>setFollowed(true)}>Follow</div>}
          { followed && <div className="px-4 py-1 rounded-full bg-red-100 text-red-500 font-bold cursor-pointer hover:bg-red-200" onClick={()=>setFollowed(false)}>Unfollow</div>}
        </div>
        <div>{data?.bio}</div>
      </div>

    </div>
  )
}

export default ProfileCard;