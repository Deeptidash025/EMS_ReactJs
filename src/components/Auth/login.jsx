import React, { useState } from 'react'

const Login = () => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
         
       console.log(email);
       console.log(password);
        setEmail("")
        setPassword("")
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center outline-none'>
        <div  className='border-50-black'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center bg-transparent outline-none'
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-25 font-medium text-lg py-1 px-10  placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-25 font-medium text-lg py-1 px-10 mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className= 'outline-none bg-transparent border-25 font-medium text-lg rounded-full mt-10 placeholder:text-white-400'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login