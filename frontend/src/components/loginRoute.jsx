import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import video from '../assests/share.mp4'
import logo from '../assests/logo.png'
import jwt_decode from 'jwt-decode'
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginRoute = () => {
    const navigate=useNavigate()
    const onSuccess=(response) => {
     const userObject = jwt_decode(response.credential);
     console.log(userObject);
     localStorage.setItem('user', JSON.stringify(userObject));
     if(localStorage.getItem('user')){
      navigate('/')
     }
}


const onFailure=credentialResponse => {
  console.log(credentialResponse)
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
              
              {/* <GoogleLogin
                 clientId='299897974338-qsr5n0u8pg24k8tpqqp72qrvt7ev12uo.apps.googleusercontent.com'
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
             /> */}
              
              {/* <GoogleLogin
                 onSuccess={onSuccess}
                 onError={onFailure}
                 type='icon'
                 theme='filled_blue'
                 text='signin'
                 size='large'
                 shape='pill'
                 width='200px'
                 
                 /> */}
              
              <GoogleOAuthProvider 
                clientId='299897974338-qsr5n0u8pg24k8tpqqp72qrvt7ev12uo.apps.googleusercontent.com'
                >
             <GoogleLogin
                 onSuccess={onSuccess}
                 onError={onFailure}
                 type='icon'
                 theme='filled_blue'
                 text='signin'
                 size='large'
                 shape='pill'
                 width='200px'
                />
            </GoogleOAuthProvider>
          </div>
      </div>
      </div> 
    </div>
  )
}

export default LoginRoute
