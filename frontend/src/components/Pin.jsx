import React from 'react'

const Pin = ({url}) => {
  return (
    <div className='w-full rounded-md border-5 shadow-xl m-2'>
      <img src={`${url}`} loading='lazy' width={200} height={200} alt='image'className='w-full rounded-lg hover:ease-in transition duration-300 ease-out cursor-pointer'/>
    </div>
  )
}

export default Pin
