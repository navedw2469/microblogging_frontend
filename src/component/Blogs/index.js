import React from 'react';
import Navbar from '../Navbar';
import styles from './styles.module.css';

const Blogs = () => {
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
  return(
    <div className='flex w-full'>
      <div className='w-[25%] bg-slate-700 h-screen'>left</div>
      <div className="w-[600px]">
        <Navbar />
        <div className="border-l border-r overflow-scroll h-[93vh]">
          {
            [1,2,3,4,5,6,7,].map((c)=>{
              return(
                  <div className="border-b p-3 flex gap-4 hover:bg-gray-100 cursor-pointer"  key={c}>
                    <div>
                      <img src={data?.user?.profile_image_url} alt='profile image' width="40" height="40" className='rounded-full'/>
                    </div>
                    <div className={styles.blog}>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <p className='font-bold'>{data?.user?.full_name}</p>
                        &nbsp;
                        <p className='font-light'>@{data?.user?.user_name}</p>
                        ・
                        <p className='font-light'>{data?.date}</p>
                      </div>
                      <div className="mb-2">{data?.text}</div>
                      <img src={data?.image_url} alt="blog image" width={515}className="rounded-[10px]"></img>
                      <div className='flex h-[18px] justify-around mt-3'>
                        <div className='flex'>

                          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                          <div>&nbsp;{data?.no_of_comments}</div>
                        </div>
                        
                        <div className='flex'>
                          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                          <div>&nbsp;{data?.no_of_like}</div>
                        </div>
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
                      </div>
                    </div>
                </div>
                );
              })
            }
        </div>

      </div>
      <div className='bg-zinc-400 flex-1'>right</div>
    </div>
  )
}

export default Blogs;