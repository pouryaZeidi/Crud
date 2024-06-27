import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import style from '@/styles/Post.module.css'

const postdetails = () => {
    const[postDetail,setPostDetail]=useState([])
    const[loading,setLoading]=useState(false)
    const router=useRouter()
    const{id}=router.query

    useEffect(()=>{
        if(id)
            setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            setPostDetail(response.data);
            setLoading(false)
        })
        .catch(error => {
            console.error("Error fetching post details:", error)
        })
    },[id])

  return (
    <>
      <div className={style.postDetail}>
      <button onClick={()=>{router.back()}} className={style.backbtn}>Back</button>
        </div>
         <div className={style.postDetailContainer}>
         {loading&&<div>loading...</div>}
         {postDetail&&<div>
           <p className={style.postId}>{postDetail.id}</p>
           <p className={style.postTittle}>{postDetail.title}</p>
           <p className={style.postUser}>{postDetail.userId}</p>
           <p className={style.postBody}>{postDetail.body}</p>
         </div>}
       </div>
    </>

  )
}

export default postdetails