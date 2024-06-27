import React, { useEffect, useState } from 'react'
import style from '@/styles/Post.module.css'
import axios from 'axios'
import Link from 'next/link'

const post = () => {
  const[posts,setPosts]=useState([])
  const[loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setPosts(response.data);
      setLoading(false)})
  },[])
console.log(posts)
  return (
    <div className={style.postsContainer}>
       {loading&&<div>Loading...</div>}
       {posts.length > 0&&<div>po</div>}

       {posts && posts.map((item) =>
        <Link key={item.id} href={`/posts/${item.id}`}>
         <div className={style.idItem}>
        {item.id}
      </div>
      <div className={style.titleItem}>
       {item.title}
      </div>
      <div className={style.subjectItem}>
        {item.body}
      </div>
        </Link>
      )}
     
    </div>
  )
}

export default post