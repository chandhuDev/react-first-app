import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import video from '../assests/share.mp4'
import logo from '../assests/logo.png'

const loginRoute = () => {

 const success=(response)=>{
    console.log(response)
 }
 const failure=(response)=>{
  console.log(response)
}

  return (
    <div className='h-screen'>
     <div className="relative w-full h-full" >
       <video src={video}  autoPlay muted loop controls={false}
       className="w-full h-full object-cover" 
       />
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-blackOverlay" >
          <div className='p-2 bg-slate-200 rounded-full'>
               <img src={logo} alt="shareme-logo"  width="100px"/>
               
          </div>
          <div className='mt-4 '>
              
              <GoogleLogin
                 clientId={process.env.client_id}
                 render={(renderprops)=>(
                
                    <button 
                    className='bg-gradient rounded-xl flex items-center gap-1 p-3 cursor-pointer'
                    onClick={renderprops.onClick} disabled={renderprops.disabled}
                    >
                      <FcGoogle className='mr-1 '/>
                      <span className='font-medium text-amber-50'>Login with Google</span>
                    </button>
                  )}
                onSuccess={success}
                onFailure={failure}
                cookiePolicy={'single_host_origin'} 
             />
          </div>
      </div>

     </div> 
    
  
      
    </div>
  )
}

export default loginRoute
