import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
    const [issignin,setissignin]=useState(true);
    const togglesign =()=>{
        setissignin(!issignin);
    }

  return (
     <>
     <Header/>
     <div className='relative'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg" alt="" style={{backgroundPosition:"center"}} />
        <div className='absolute top-[10%] left-[35%] h-[800px] w-[400px]  bg-black bg-opacity-70 rounded-lg'>
            <h1 className='text-white text-[30px] font-medium mt-6 px-10'>{issignin ? "Sign In": "Sign Up"}</h1>
            <form className='flex flex-col px-10 mt-4 gap-6 py-5'>
                {issignin ? <div></div> : <input type="text" placeholder='Name' className='py-4 rounded-md bg-[#130F0E] text-white'/> }
                <input type="text" placeholder='Email or mobile number' className='py-4 rounded-md  bg-[#130F0E] text-white font-semibold' />
                <input type="password" placeholder='Password' className='py-4 rounded-md bg-[#130F0E] text-white' />
                <button className='bg-red-700 py-4 rounded-md'>{issignin ?  "Sign In": "Sign Up"}</button>
        </form>
         
        <div className='mt-4 ml-6'>
            {issignin ? <div> <h1 className='text-center text-white text-xl mt-4'>Forgot password?</h1>
            <input type="checkbox" className='px-1 py-2 mt-6'/>
             <label htmlFor="remember" className='text-white text-lg ml-2'>Remember Me</label> </div> : <div></div> }
        </div>
        <div className='mt-6 ml-6'>
            <h1 className='text-white text-lg cursor-pointer' onClick={togglesign}>{issignin?"Already Registred ? Sign in Now":"New to Netflix ? Sign up now."}  </h1>
            <h1 className='text-[#8C8C8C]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span><a href="">Learn more.</a></span></h1>
        </div>
             
        </div>
     </div>
     <div className='bg-black h-[50vh]'>

     </div>
     </>
  )
}

export default Login
