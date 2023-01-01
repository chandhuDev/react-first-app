import React from 'react'
import Masonary from 'react-masonry-css'
import {Pin} from './index'

const breakPoints={
  default:5,
  3000:6,
  2000:5,
  1200:3,
  1000:2,
  500:1
}

const masonaryLayout = ({Images,imageDetails}) => {
  return (
    <Masonary breakpointCols={breakPoints} className='flex m-3 gap-2'>
      {Images?.map((image)=>{
        return <Pin key={image.sub}  url={image.url} user_name={imageDetails.user.username} profile_url={imageDetails.user.profile_image.medium}/>
      })}
    </Masonary>
  )
}

export default masonaryLayout
