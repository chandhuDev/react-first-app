import React from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom'
import {Login,Home} from './components/index'

const App = () => {
  return (
    <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="/*" element={<Home/>} />
    </Routes>
  )
}

export default App

