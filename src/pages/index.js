// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [x, setx] = useState(1);
  return (
      <>{x}</>
  )
}
