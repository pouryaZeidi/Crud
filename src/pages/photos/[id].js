import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import style from '@/styles/Photo.module.css'
import { getData, getData2 } from '@/utils/Fetch'

const photoDetail = () => {
    const[photoDetail,setPhotoDetail]=useState([])
    const[loading,setLoading]=useState(false)
    const [error,setError] = useState(false)
    const router=useRouter()
    const{id}=router.query

    useEffect(()=>{

        if(id){
            const data = getData(`https://jsonplaceholder.typicode.com/photos/${id}`,setLoading,setError)
            setPhotoDetail(data)
        }
        if(id){
            getData2(`https://jsonplaceholder.typicode.com/photos/${id}`,setLoading,setError,setPhotoDetail)
        }

        if(id)
            setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => {
            setPhotoDetail(response.data);
            setLoading(false)
        })
    },[id])

  return (
    <>
      <div className={style.photoDetail}>
      <button onClick={()=>{router.back()}} className={style.backbtn}>Back</button>
        </div>
         <div className={style.photoDetailContainer}>
         {loading&&<div>loading...</div>}

         {photoDetail&&<div>
           <p className={style.photoId}>{photoDetail.id}</p>
           <p className={style.photoTittle}>{photoDetail.title}</p>
           <p className={style.photoUser}>{photoDetail.albumId}</p>
           <p className={style.photoBody}>{photoDetail.body}</p>
         </div>}
       </div>
    </>
  )
}

export default photoDetail