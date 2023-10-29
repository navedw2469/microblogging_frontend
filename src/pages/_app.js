import { useEffect } from 'react';
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() =>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[]);

  return <Component {...pageProps} />
}
