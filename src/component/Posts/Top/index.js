import React from 'react'

const Top = () => {
  return (
    <main className="border-l border-r border-b border-[#ccc] sticky top-0 bg-opacity-80 bg-white backdrop-filter backdrop-blur-md dark:bg-black dark:bg-opacity-50 dark:text-white">
      <div className="flex justify-between items-center p-3">
        <div className='text-[20px] font-semibold'>Home</div>
        <img src='https://pbs.twimg.com/profile_images/1614840228841418752/53yLQOxa_400x400.jpg' alt="profile" className="w-[40px] h-[40px] rounded-full" />
      </div>
    </main>
  )
}
export default Top;