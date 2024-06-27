import React from 'react'
import style from '@/styles/Layout.module.css'
import Navbar from '@/component/Navbar'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({children}) =>{
  return (
    <div className={`${inter.className} ${style.container}`}>
        <div className={style.navContainer}>
            <Navbar/>
        </div>
        <div className={style.pages}>{children}</div>
    </div>
  )
}

export default Layout