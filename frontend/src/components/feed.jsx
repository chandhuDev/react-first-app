import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {MasonaryLayout,Spinner} from './index'




const Feed = () => {
    const [loading,setLoading]=useState(true)
    const [imageData,setImageData]=useState([])
    const categoryid=useParams()
    


    const getImages=async ()=>{
       const response=await fetch(`https://api.unsplash.com/photos/?client_id=ejq3XBjQOab2nvLTdZSGgPYHwrcCKvbrPZNukA6s9SM`)
       const responseData=await response.json()
      
       const allImages= responseData.map((image)=>{
       return {
        url:image.urls.raw,
        sub:image.id
      }
    })
       localStorage.setItem('Images',JSON.stringify(allImages))
       setImageData(allImages)
       console.log(allImages)
       console.log(responseData)
    }
 
useEffect(()=>{
   
   getImages()
   setLoading(false)
    console.log('rendered in second useeffect')
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
