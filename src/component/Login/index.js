import React, { useContext } from 'react';
import Image from 'next/image';
import logo from './logo-no-background.png'
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import UserContext from '@/context/UserContext';
import Cookies from 'js-cookie';
import secureAPI from '@/api/axios';


const Login = () => {
  const router = useRouter();
  const {setUser} = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    secureAPI.post("login_user", 
      { user_name: data?.username, password: data?.password },
    ).then(function (response) {
      Cookies.set('session_token', response?.data?.session_token);
      setUser(response?.data?.user);
      router.push('/posts');
    }).catch(function (error) {
      console.log(error);
    });
  };
  
  return(
    <div className="flex flex-col items-center h-[625px] gap-3 p-5 pt-20">
      <div className="md:border w-[350px] rounded-lg">
        <Image src={logo} alt="logo" className="w-[175px] m-auto my-10"/>
        <input type="text" id="username" name="username" placeholder="username" {...register("username")} className="border w-[270px] h-[36px] m-auto block p-2 mb-2 rounded-lg bg-slate-100"></input>
        <input type="password" id="password" name="password" placeholder="password" {...register("password")} className="border w-[270px] h-[36px] m-auto block p-2 mb-2 rounded-lg bg-slate-100"></input>
        <button type="button" className="w-[270px] h-[36px] m-auto block my-3 rounded-lg bg-blue-400 hover:bg-blue-500" onClick={handleSubmit(onSubmit)}>Login</button>
        <hr className="w-[270px] m-auto my-2"/>
        <div className="text-center text-[14px] mt-2 mb-10 text-blue-800 cursor-pointer">Forgotten your password?</div>
      </div>
      <div className="md:border w-[350px] rounded-lg">
        <div className="flex m-auto justify-center items-center gap-2 my-5">
          <div>Don{"'"}t have an account?</div>
          <div className="text-blue-800 cursor-pointer" onClick={()=>router.push('/signup')}>Sign up</div>
        </div>
      </div>
    </div>
  )
}

export default Login;
