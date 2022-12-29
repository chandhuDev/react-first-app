import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {MasonaryLayout,Spinner} from './index'




const Feed = () => {
    const [loading,setLoading]=useState(true)
    const [imageData,setImageData]=useState([])
    const {categoryId}=useParams()
  

 const getImagesWithFilters=async ()=>{
   const placeHolderValue=categoryId!==undefined ? categoryId : 'wallpapers'
   const placeholder=placeHolderValue.toLowerCase()
   const response=await fetch(`https://api.unsplash.com/topics/${placeholder}/?client_id=ejq3XBjQOab2nvLTdZSGgPYHwrcCKvbrPZNukA6s9SM`)
   const responseData=await response.json()
   console.log(responseData)
   const allImages= responseData.preview_photos.map((image)=>{
    return {
     url:image.urls.raw,
     sub:image.id
    }
   })
    localStorage.setItem('Images',JSON.stringify(allImages))
    setImageData(allImages)
 }


    const getImages=async ()=>{
       const response=await fetch(`https://api.unsplash.com/photos/?client_id=ejq3XBjQOab2nvLTdZSGgPYHwrcCKvbrPZNukA6s9SM`)
       const responseData=await response.json()
       console.log(responseData)
       const allImages= responseData.map((image)=>{
       return {
        url:image.urls.raw,
        sub:image.id
       }
      })
       localStorage.setItem('Images',JSON.stringify(allImages))
       setImageData(allImages)
    }
 
useEffect(()=>{
   if(categoryId){
    getImagesWithFilters()
   }else{
    getImages()
   }
   setLoading(false)
   
 },[])



 
  return (
    <div className='flex flex-col items-center'>
     { loading ?<Spinner message={'We need to load the content , wait for it'}/>:
     <MasonaryLayout Images={imageData}/> 
     } 
    
    </div>
  )
}

export default Feed
