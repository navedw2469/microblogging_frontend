import React from 'react';
import Middle from "./Middle"
import Navigation from '../Navigation';
import RightSection from '../RightSection';

const Find = () => {
  return(
    <div className='flex justify-center'>
      <Navigation />
      <Middle />
      <RightSection searchBar={false}/>
    </div>
  )
}

export default Find;