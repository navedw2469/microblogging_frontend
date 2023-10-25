import React from 'react';
import Image from 'next/image';
import logo from './logo-no-background.png'
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();

  return(
    <div className="flex flex-col items-center h-[625px] gap-3 p-5 pt-20">
      <div className="md:border w-[350px] rounded-lg">
        <Image src={logo} alt="logo" className="w-[175px] m-auto my-10"/>
        <input type="text" id="fullname" name="fullname" placeholder="Full Name" className="border w-[270px] h-[36px] m-auto block p-2 mb-2 rounded-lg bg-slate-100 placeholder:text-slate-400"></input>
        <input type="text" id="email" name="email" placeholder="Email" className="border w-[270px] h-[36px] m-auto block p-2 mb-2 rounded-lg bg-slate-100 placeholder:text-slate-400"></input>
        <input type="text" id="username" name="username" placeholder="Username" className="border w-[270px] h-[36px] m-auto block p-2 mb-2 rounded-lg bg-slate-100 placeholder:text-slate-400"></input>
        <input type="password" id="password" name="password" placeholder="Password" className="border w-[270px] h-[36px] m-auto block p-2 mb-2 rounded-lg bg-slate-100 placeholder:text-slate-400"></input>
        <label htmlFor="dob" className="w-[270px] m-auto block text-[12px] text-slate-700">Date of Birth</label>
        <input 
          type="date" 
          id="dob" 
          name="dob"
          className="border w-[270px] h-[36px] m-auto block p-2 mb-2 rounded-lg bg-slate-100"
        />


        <button type="button" className="w-[270px] h-[36px] m-auto block my-3 rounded-lg bg-blue-400 hover:bg-blue-500">Login</button>
        {/* <hr className="w-[270px] m-auto my-2"/> */}
        {/* <div className="text-center text-[14px] mt-2 mb-5 text-blue-800 cursor-pointer">Forgotten your password?</div> */}
      </div>
      <div className="md:border w-[350px] rounded-lg">
        <div className="flex m-auto justify-center items-center gap-2 my-5">
          <div>Have an account?</div>
          <div className="text-blue-800 cursor-pointer" onClick={()=>router.push('/login')}>Log in</div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
