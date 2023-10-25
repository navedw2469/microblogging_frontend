import React from 'react';
import ProfileCard from '../ProfileCard';

const ProfileCards = () => {
  
  return(
    <div className="border-l border-r overflow-scroll h-[90vh]">
      {
        [1,2,3,4,5,6,7].map((c)=>{
          return(
            <ProfileCard key={c}/>
            );
          })
        }
    </div>
  )
}

export default ProfileCards;