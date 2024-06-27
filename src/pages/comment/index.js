import React, { useEffect, useState } from 'react'
import style from '@/styles/Comment.module.css'
import axios from 'axios'
import Link from 'next/link'
const comment = () => {
const[comment,setComment]=useState([])
const[loading,setLoading]=useState(false)

useEffect(()=>{
  setLoading(true)
  axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(response=>{
    setComment(response.data);
    setLoading(false)
  })
},[])

  return (
    <div className={style.commentContainer}>
      {loading&&<div>Loading...</div>}
      {comment.length > 0 && <div>cm</div>}
      {comment && comment.map((item)=>
      <Link key={item.id} href={`/comment/${item.id}`}>
      
      <div className={style.idItem}>
      {item.id}
      </div>
      <div className={style.titleItem}>
      {item.email}
      </div>
      <div className={style.subjectItem}>
      {item.name}
      </div>
      
  </Link>
      
      )}
    </div>
  )
}

export default comment


