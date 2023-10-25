import React from 'react';
import Middle from "./Middle"
import Navigation from '../Navigation';
import RightSection from '../RightSection';

const Posts = () => {
  return(
    <div className='flex justify-center'>
      <Navigation />
      <Middle />
      <RightSection />
    </div>
  )
}

export default Posts;