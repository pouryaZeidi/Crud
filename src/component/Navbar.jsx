import React from 'react'
import style from '@/styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={style.navbar}> 
        <h1>LOGO</h1>        
        <div className={style.navbarContainer}>
        <Link className={style.navItem} href='/posts'>POST</Link>
        <Link className={style.navItem} href='/comment'>COMMENT</Link>
        <Link className={style.navItem} href='/photos'>PHOTOS</Link>
        <Link className={style.navItem} href='/'>HOME</Link>
        </div>
    </div>
  )
}

export default Navbar