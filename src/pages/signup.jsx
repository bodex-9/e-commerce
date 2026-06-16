import React, { useState } from 'react'
import signup from '../assets/imgs/signup.png'
import google from '../assets/imgs/google.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {GoogleAuthProvider,signInWithPopup}from 'firebase/auth'
import { updateProfile } from 'firebase/auth'
import { doc,setDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import auth from '../firebase/firebase'
import { motion } from 'framer-motion'
const Signup = () => {
    const [user,setUser] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider()

    const handleGoogle = async(e)=>
    {
         e.preventDefault();
         try{
            await signInWithPopup(auth,provider)
            toast.success("Logged In Successfully",{style:{
                    background:'black',
                    color:'white'
            }})
         }
            catch(error)
        {
           const cleanMessage = (error.message.replace("Firebase:","").trim());
            toast.error(cleanMessage,{style:{
                background:'black',
                color:'white'
            }})
        }
    }

    const handleSubmit = async(e) =>
    {
        e.preventDefault()
        try{
            
        const res = await createUserWithEmailAndPassword(auth,email,password);
        await setDoc(doc(db,"users",res.user.uid),{name:user,email,createdAt:Date.now()})
        await updateProfile(res.user,{
            displayName:user
        })
            toast.success("Account has been registered successfully",{style: {
                background:'black',
                color:'white'
            }
            })
            navigate('/')
        }

        catch(error)
        {
           const cleanMessage = (error.message.replace("Firebase:","").trim());
            toast.error(cleanMessage,{style:{
                background:'black',
                color:'white'
            }})
        }
      
    }
  return (
    <div className='px-13 py-12'>
        <div className="flex flex-col justify-around items-center gap-5 md:flex-row">
            <motion.img initial={{x:-100, opacity:0}} animate={{x:0, opacity:100}} transition={{duration:0.4}} src={signup} className='w-xl object-contain'/>
            <motion.form initial={{x:100, opacity:0}} animate={{x:0, opacity:100}} transition={{duration:0.4}} onSubmit={handleSubmit} className="flex gap-4 flex-col">
                <div className="mb-5">
                <h2 className='text-2xl md:text-3xl font-semibold mb-3'>Create an Account</h2>
                <p className=' text-xs capitalize'>enter your details below</p>
                </div>
              
                <input value={user}     onChange={e => setUser(e.target.value)} type='text' placeholder='Name' className='border-b border-gray-400     outline-0 text-[15px] pb-1 mb-2' />
                <input value={email}    onChange={e => setEmail(e.target.value)} type='text' placeholder='Email' className='border-b    outline-0   text-[15px] mb-2 border-gray-400 pb-1' />
                <input value={password} onChange={e => setPassword(e.target.value)} type='text' placeholder='password' className='border-b border-gray-400 outline-0  pb-1 text-[15px] mb-2' />

                <button className='bg-secondr text-white py-2 px-4 text-sm rounded-md hover:bg-hoverr transition-all duration-300 cursor-pointer '>Create Account</button>
                <div className=" relative flex justify-center">
                    <button type='button' onClick={handleGoogle} className='  capitalize border border-gray-400 py-2 w-100 rounded-md px-4 cursor-pointer '>sign up with google</button>
                    <img src={google} className=' absolute left-1/5 top-2.5 w-5 object-contain' />
                </div> 
                <div className="flex justify-center gap-4">
                    <span className='text-gray-500 '>Already have Account?</span>
                    <Link to={'/login'}><span className='text-gray-600 underline underline-offset-7  decoration-gray-400 cursor-pointer'>Log in</span></Link>
                </div>
                


            </motion.form>

        </div>
      
    </div>
  )
}

export default Signup
