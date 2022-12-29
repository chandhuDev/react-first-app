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

const masonaryLayout = ({Images}) => {
  return (
    <Masonary breakpointCols={breakPoints} className='flex m-3 gap-2'>
      {Images?.map((image)=>{
        return <Pin key={image.sub}  url={image.url} />
      })}
    </Masonary>
  )
}

export default masonaryLayout
