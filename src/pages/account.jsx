import React, { useEffect, useState } from 'react'
import auth from '../firebase/firebase'
import {toast}from "react-toastify";
import { updatePassword,EmailAuthProvider,reauthenticateWithCredential } from 'firebase/auth';
import { db } from '../firebase/firebase';
import { setDoc,doc,getDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
const Account = () => {

    const [lastName,setlastName] = useState("");
    const [adress,setAdress] = useState("");
    const [currentpassword,setCurrentPassword] = useState("");
    const [newpassword,setnewPassword] = useState("");
    const [confirmpassword,setconfirmPassword] = useState("");
        const hanlesubmit = async(e)=>
        {
                e.preventDefault();
                
                try{
                    await setDoc(doc(db,"users",auth.currentUser.uid),{adress:adress,lastName:lastName},{merge:true})

                if(newpassword || currentpassword)
                {
                    if(confirmpassword !== newpassword)
                    {
                        toast.error("Passwords do not match");
                        return;
                    }
                    

                    const credential = EmailAuthProvider.credential(auth.currentUser.email,currentpassword);
                    await reauthenticateWithCredential(auth.currentUser,credential);
                    await updatePassword(auth.currentUser,newpassword)
                    toast.success("Password Updated")
                    setCurrentPassword("")
                    setconfirmPassword("")
                    setnewPassword("")
                }
               }
               catch(error)
               {
                toast.error(error.message)
               }
    }

    useEffect(()=>
    {
        const getData =  async()=>
        {
            if(!auth.currentUser)
                return;

            const ref = doc(db,"users",auth.currentUser.uid)
            const snap = await getDoc(ref)
            if(snap.exists())
            {
                setAdress(snap.data().adress || "")
                setlastName(snap.data().lastName || "")
            }
        }
        getData()
    },[])
    
    const hansleCancle = async()=>
    {
                  const ref = doc(db,"users",auth.currentUser.uid)
                  const snap = await getDoc(ref)
                  if (snap.exists())
                  {
                     setAdress(snap.data().adress || "")
                     setlastName(snap.data().lastName || "")
                  }
                   setCurrentPassword("")
                    setconfirmPassword("")
                    setnewPassword("")
    }

    const name1 = auth.currentUser?. displayName || "user";
    const name2 = name1.charAt(0).toUpperCase() + name1.slice(1);
    const email = auth.currentUser?.email;
  return (
    <div className='px-13 py-12'>
        
        <motion.h2 initial={{y:-100, opacity:0}} whileInView={{y:0, opacity:100}} viewport={{once:true,amount:0.4}} transition={{duration:0.4}} className='  capitalize text-center md:text-2xl text-xl  mb-7'>welcome<span className=' text-secondr ml-2 '>{name2}</span></motion.h2>
        <div className="flex flex-col md:flex-row   gap-9">
            
            <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:100}} viewport={{once:true,amount:0.7}} transition={{duration:0.4}} className="flex flex-col gap-4 w-full max-w-90 p-10 shadow-sm">
                <h3 className=' capitalize font-semibold text-center text-lg'>manage my account</h3>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <span className=' capitalize text-sm text-gray-400 cursor-pointer hover:text-secondr transition-all duration-300'>my profile</span>
                    <span className=' capitalize text-sm text-gray-400 cursor-pointer hover:text-secondr transition-all duration-300'>adress book</span>
                    <span className=' capitalize text-sm text-gray-400 cursor-pointer hover:text-secondr transition-all duration-300'>my payment options</span>
                </div>
                <h3 className=' capitalize font-semibold text-center text-lg'>my orders</h3>
                <div className="flex flex-col gap-3 justify-center items-center">
                    <span className=' capitalize text-sm text-gray-400 cursor-pointer hover:text-secondr transition-all duration-300'>my returns</span>
                    <span className=' capitalize text-sm text-gray-400 cursor-pointer hover:text-secondr transition-all duration-300'>my cancellation</span>
                </div>
                <h3 className=' capitalize font-semibold text-lg text-center'>my wishlist</h3>
              
              


            </motion.div>

                        <motion.form initial={{x:100, opacity:0}} whileInView={{x:0, opacity:100}} viewport={{once:true,amount:0.7}} transition={{duration:0.4}} onSubmit={hanlesubmit} className="bg-white md:ml-16  shadow-xl p-12">
                                <h3 className=' capitalize text-secondr text-xl font-semibold mb-8'>edit your profile</h3>
                            <div >
                                <div className="flex justify-center flex-col md:flex-row gap-4 md:gap-11 ">
                                    <div className="flex flex-col gap-1">
                                         <label className=' capitalize'>first name</label>
                                    <input value={name2} readOnly className='bg-bage px-3 outline-0 py-2 rounded-md' type="text" placeholder='First Name'/>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                         <label className=' capitalize'>last name</label>
                                    <input value={lastName} onChange={(e) => setlastName(e.target.value)} className='bg-bage px-3 outline-0 py-2 rounded-md' type="text" placeholder='Last Name'/>
                                    </div> 
                                </div>
                                <div className="flex justify-center  flex-col md:flex-row gap-4 mt-4 md:gap-11 md:mt-7 ">
                                     <div className="flex flex-col gap-1">
                                         <label className=' capitalize'>email</label>
                                    <input value={email} readOnly className='bg-bage px-3 outline-0 py-2 rounded-md' type="email" placeholder='Email'/>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                         <label className=' capitalize'>adress</label>
                                    <input value={adress} onChange={(e) => setAdress(e.target.value)} className='bg-bage px-3 outline-0 py-2 rounded-md' type="text" placeholder='your Adress'/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 mt-7">
                                    <h3>password changes</h3>
                                    <input onChange={(e)=>setCurrentPassword(e.target.value)} value={currentpassword} className='bg-bage px-3 outline-0 py-2 rounded-md' type="password" placeholder='current password'/>
                                    <input onChange={(e)=>setnewPassword(e.target.value)}value={newpassword} className='bg-bage px-3 outline-0 py-2 rounded-md' type="password" placeholder='new password'/>
                                    <input onChange={(e)=>setconfirmPassword(e.target.value)}value={confirmpassword} className='bg-bage px-3 outline-0 py-2 rounded-md' type="password" placeholder='confirm new password'/>
 
                                </div>
                            </div>
                            <div className="flex justify-end items-center  mt-7 ">

                                <button onClick={hansleCancle} type='button' className='text-black border-0 cursor-pointer py-3 px-7 capitalize'>Cancel</button>
                                <button type="submit" className='text-white md:py-3 md:px-7 py-2 px-3 text-sm md:text-base cursor-pointer bg-secondr rounded-md hover:bg-hoverr transition-all duration-300 capitalize'>Save changes</button>
                            </div>

                        </motion.form>

        </div>

      
    </div>
  )
}

export default Account
