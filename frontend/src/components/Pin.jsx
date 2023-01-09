import React from 'react'
import { Blurhash } from "react-blurhash";

const Pin = ({url,user_name,profile_url}) => {
  return (
    <div className='group'>
      <div className='w-full flex flex-col rounded-md border-5 shadow-xl m-6  hover:blur-sm  hover:scale-100 duration-150'>
       <img src={`${url}`} loading='lazy' width={200} height={200} alt='image' className='w-full rounded-lg hover:ease-in transition duration-300 object-cover ease-out pb-1 cursor-pointer'/>
       {/* <Blurhash hash={`${hash}`} width={200} height={200} resolutionX={32} resolutionY={32} punch={1} className='w-full rounded-lg hover:ease-in transition duration-300 object-cover ease-out pb-1 cursor-pointer'/> */}
       <div className='flex flex-row justify-center items-center '>
        <img src={`${profile_url}`} loading='lazy'  className='rounded-full w-8 h-8 object-fill ml-3 mb-2 mt-1 grow-0 hover:border-4 hover:border-solid border-purple-500'/>
        <p className='flex justify-center font-semibold grow  '>{user_name}</p>
      </div>    
    </div>
    </div>
    
  )
}

export default Pin
