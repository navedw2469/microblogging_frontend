import React from 'react';


const PostSkelton = () => {
    return (

        // <div>
        //   {[1, 2, 3].map((e) => {
        <div className="border-b p-3 flex gap-4 hover:bg-gray-100 cursor-pointer border-l border-r dark:text-white dark:hover:bg-neutral-900 shadow animate-pulse">

            <div>
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
            </div>

            <div className='flex-1'>

                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[100%] text-center mb-2"> </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[60%] text-center mb-2"> </div>

                <div class="flex items-center justify-center h-80 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                </div>

            </div>
        </div>
        //    })}
        // </div>

    );
}


const FollowerSkelton = () => {
    return (

        <div role="status" className="divide-y divide-gray-200 rounded animate-pulse dark:divide-gray-700 dark:border-gray-700">
            {[1, 2, 3].map((e) => {
                return (
                    <div class="flex gap-3 p-3 items-center" key={e}>
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <div>
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                    </div>
                )
            })}
        </div>

    );
};


const UserSkelton = () => {
    return (

        <div role="status" className="divide-y divide-gray-200 rounded animate-pulse dark:divide-gray-700 dark:border-gray-700">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e) => {
                return (
                    <div class="flex gap-3 p-3 items-center">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <div className="flex flex-1 justify-between items-center ">
                            <div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            </div>
                            <div class="h-7  bg-gray-200 rounded-full dark:bg-gray-700 w-[84px] ml-20 px-4 py-1"></div>
                        </div>
                    </div>

                )
            })}
        </div>

    );
};


const ProfileSkelton = () => {
    return (

        <div role="status" className="divide-y divide-gray-200 rounded animate-pulse dark:divide-gray-700 dark:border-gray-700">
            {[1].map((e) => {
                return (
                    <div class="flex gap-5 p-10 items-center">
                        <svg class="w-[30%] h-[30%] text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <div class="flex-1">
                            <div className="flex flex-1 justify-between items-center ">
                                <div>
                                    <div class="h-[32px] bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                    <div class="h-[14px] w-26 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div class="h-11  bg-gray-200 rounded-full dark:bg-gray-700 w-[84px] ml-20 px-4 py-2"></div>

                            </div>
                            <div className="flex-1 justify-between items-center  mt-5">
                                    <div className="flex">
                                        <div class="h-[14px] bg-gray-200 rounded-full dark:bg-gray-700 w-[110px] mb-2"></div>
                                        <div class="h-[14px] ml-5 w-[120px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                    </div>

                            </div>
                        </div>
                            
                    </div>

                )
            })}
        </div>

    );
};

export { PostSkelton, FollowerSkelton, UserSkelton, ProfileSkelton };