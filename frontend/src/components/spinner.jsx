import React from 'react'
import {Audio ,Circles ,MagnifyingGlass} from 'react-loader-spinner'


const Spinner = ({message}) => {
 

  return (
    <div className='flex flex-col items-center'>
      {/* <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> */}
{/* <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  
/> */}
<MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
      <p>{message}</p>
    </div>
  )
}

export default Spinner
