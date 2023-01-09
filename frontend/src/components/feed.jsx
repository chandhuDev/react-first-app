import React,{useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom'
import {MasonaryLayout,Spinner} from './index'




const Feed = () => {

    const [loading,setLoading]=useState(true)
    const [imageData,setImageData]=useState([])
    const [imageUser,setImageUser]=useState({})
    const {categoryId}=useParams()
    const location = useLocation()
    console.log(categoryId)

 const getImagesWithFilters=async ()=>{

   const placeHolderValue=categoryId ? categoryId : 'wallpapers'
   const placeholder=placeHolderValue.toLowerCase()
   const response=await fetch(`https://api.unsplash.com/topics/${placeholder}/?client_id=ejq3XBjQOab2nvLTdZSGgPYHwrcCKvbrPZNukA6s9SM`)
   const responseData=await response.json()
   console.log(responseData)
   setImageUser(responseData)
   const allImages= responseData.preview_photos.map((image)=>{
    return {
     url:image.urls.raw,
     sub:image.id
    }
   })
   console.log('render in getImagesFilters')
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
        sub:image.id,
       
       }
      })
      
      console.log('rendering getImages')
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
   
 },[categoryId])

 


 
  return (
    <div className='flex flex-col items-center'>
     { loading ?<Spinner message={'We need to load the content , wait for it'}/>:
     
         <MasonaryLayout Images={imageData} imageDetails={imageUser}/>
     } 
    
    </div>
  )
}

export default Feed
