import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import {Navbar,PinDetails,Feed,Search,CreatePin} from './index'

const Pins = ({user}) => {
  const [search,setSearch]=useState('')

  return (
    <div className='px-2 md:px-5'>
      <div >
         <Navbar search={search} setSearch={setSearch} user={user&&user}/>
            
         
      </div>
      <div className='h-full'>
          <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/pinDetail/:id' element={<PinDetails />}/>
            <Route path='/createPin' element={<CreatePin />}/>
            <Route path='/search' element={<Search search={search} setSearch={setSearch} />}/>
          </Routes>
      </div>
      
    </div>
  )
}

export default Pins
