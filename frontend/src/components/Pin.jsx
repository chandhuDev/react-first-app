import React from 'react'

const Pin = ({url,user_name,profile_url}) => {
  return (
    <div className='w-full flex flex-col rounded-md border-5 shadow-xl m-2'>
      <img src={`${url}`} loading='lazy' width={200} height={200} alt='image'className='w-full rounded-lg hover:ease-in transition duration-300 ease-out pb-1 cursor-pointer'/>
      <div className='flex flex-row justify-center items-center '>
        <img src={`${profile_url}`} loading='lazy'  className='rounded-full w-8 h-8 object-fill ml-3 mb-2 mt-1 grow-0 hover:border-4 hover:border-solid border-purple-500'/>
        <p className='flex justify-center font-semibold grow  '>{user_name}</p>
      </div>    
    </div>
  )
}

export default Pin
