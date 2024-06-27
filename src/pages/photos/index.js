import React, { useEffect, useState } from 'react'
import style from '@/styles/Photo.module.css'
import axios from 'axios'
import Link from 'next/link'
const photos = () => {
  const[photos,setPhotos]=useState([])
  const[loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(response=>{
      setPhotos(response.data)
      setLoading(false)
    })
  },[])
  return (
    <div className={style.photosContainer}>
      {loading&&<div>Loading...</div>}
      {photos.length>0 &&<div>ph</div>}
      {photos&&photos.map((item)=>
        <Link key={item.id} href={`/posts/${item.id}`}>
        
      <div className={style.idItem}>
      {item.id}
      </div>
      <div className={style.titleItem}>
      {item.title}
      </div>
      <div className={style.subjectItem}>
      {item.url}
      </div>
    </Link>
      
      )}
    </div>
   
  )
}

export default photos