import React from 'react'
import signup from '../assets/imgs/signup.png'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import auth from '../firebase/firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
const Login = () => {
      const [email,setEmail] = useState("")
      const [password,setPassword] = useState("")
      const navigate = useNavigate();

        const handleLogin =  async(e) =>
  {
    e.preventDefault();
  try{

  const dataofUser = await signInWithEmailAndPassword(auth,email,password);
  const loginUser = dataofUser.user;
  const userName = loginUser.displayName || "User"
  const finalName = userName[0].toUpperCase() + userName.slice(1)
         toast.success(`Welcom Back ${finalName}`,{style: {
                    background:'black',
                    color:'white'
                }
                })
                navigate('/')
  }

  
  catch (error)
  {
    let finalMessage ="";
   if (error.code === "auth/invalid-credential")
   {
        finalMessage = "The account does not exist or invalid password";
    
     }
     else{
         finalMessage = (error.message.replace("Firebase:","").trim());
     }
       
                 toast.error(finalMessage,{style:{
                     background:'black',
                     color:'white'
                 }})
 
            
    
    // console.log(error)
       
  }
}


  return (
    <div className='px-13 py-12'>
             <div className="flex flex-col justify-around items-center gap-5 md:flex-row">
                    <motion.img initial={{y:100, opacity:0}} animate={{y:0, opacity:100}} transition={{duration:0.4}} src={signup} className='w-xl object-contain'/>
                    <motion.form initial={{y:100, opacity:0}} animate={{y:0, opacity:100}} transition={{duration:0.4}} onSubmit={handleLogin} className="flex gap-4 flex-col">
                        <div className="mb-5">
                        <h2 className='text-2xl md:text-3xl font-semibold mb-3 capitalize'>Log in to excluive</h2>
                        <p className=' text-xs capitalize'>enter your details below</p>
                        </div>
                      
                       
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type='text' placeholder='Your Email' className='border-b    outline-0   text-[15px] mb-2 border-gray-400 pb-1' />
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='password' className='border-b border-gray-400 outline-0  pb-1 text-[15px] mb-3' />
                              <div className="flex justify-between gap-11 items-center">
                                        <button className='bg-secondr w-24 text-white py-3 px-5 cursor-pointer text-sm rounded-md hover:bg-hoverr transition-all duration-300 cursor-pointe capitalize '>log in</button>
                                        <span onClick={()=> navigate('/forgetpassword')} className='text-secondr cursor-pointer'>Forget Password?</span>
                              </div>
                        
                      
                       
                        
        
        
                    </motion.form>
        
                </div>
      
    </div>
  )
}

export default Login
