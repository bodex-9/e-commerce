import React, { useState } from 'react'
import { toast } from 'react-toastify'
import auth from '../firebase/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
const ForgetPassword = () => {
    const [email,setEmail] = useState("")
    const handleForget = async(e)=>
    {
        e.preventDefault();
        try{
            await sendPasswordResetEmail(auth,email);
            toast.success("Link Sent");
           setEmail("")
        }
        catch(error){
              const cleanMessage = (error.message.replace("Firebase:","").trim());
                        toast.error(cleanMessage,{style:{
                            background:'black',
                            color:'white'
                        }})
        }
        
    }
  return (
    <div className='py-12 px-13'>
        <form onSubmit={handleForget}  className='p-4 max-w-100 flex gap-8 flex-col mx-auto mb-5 mt-25 shadow-lg'>
            <h2 className='text-center text-xl md:text-2xl font-semibold  text-secondr capitalize '>forget password</h2>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='py-3 px-5 placeholder: text-sm rounded-md border-gray-400 border outline-0'/>
            <div className="flex justify-center items-center">
                <button type="submit" className='bg-secondr text-white py-3 px-4 rounded-md w-45 tracking-wider hover:bg-hoverr transition-all duration-300 cursor-pointer capitalize'>send Link</button>

            </div>

        </form>
      
    </div>
  )
}

export default ForgetPassword
