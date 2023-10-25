import React from 'react';
import SearchBar from './SearchBar';
import Followers from './Followers';
import Followings from './Followings';

const RightSection = ({searchBar = true}) =>{
  return (
  <div className='pl-5 xl:w-[390px] lg:w-[320px] max-lg:hidden h-[100vh] overflow-y-auto'>
    {searchBar && <SearchBar />}
    <Followers />
    <Followings />
  </div>
  )
}

export default RightSection;