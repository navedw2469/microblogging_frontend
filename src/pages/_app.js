import { useEffect, createContext, useState } from 'react';
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import secureAPI from '@/api/axios';
import UserContext from '@/context/UserContext';



export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  
  useEffect(() =>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[]);

  useEffect(() => {
    const sessionToken =  Cookies.get('session_token');
    if(sessionToken){
      secureAPI.get("get_user_session", {
        params: { session_token: sessionToken },
      }).then(function (response) {
        console.log(router, 'response', )
        if(response.data.user){
          setUser(response.data.user);
          if(router.pathname === '/login') router.push('/posts');
        }else{
          Cookies.remove('session_token');
          console.log(Cookies.get('session_token'), 'st');
          router.push('/login');
        }
      }).catch(function (error) {
        console.log(error);
      });
    }else{
      router.push('/login');
    }
  }, []);

  

  return (<UserContext.Provider value={{user, setUser}}>
            <Component {...pageProps} />
          </UserContext.Provider>);
}
