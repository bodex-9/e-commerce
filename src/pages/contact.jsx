import React, { useState } from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [area,setArea] = useState("");
    const handleform = (e)=>
    {
        e.preventDefault();

        Swal.fire({
        title: "Message sent successfully!",
        icon: "success",
        draggable: true,
        confirmButtonColor:'#DB4444',
        iconColor: '#DB4444'
        });
            setPhone("")
            setEmail("")
            setName("")
            setArea("")
    }
  return (
    <div className='py-12 px-13'>
        <div className="flex flex-col justify-center gap-7 md:flex-row">
                        <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:100}} transition={{duration:0.4}} className="w-full max-w-90  p-11 flex flex-col shadow-xl gap-3">
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center bg-secondr rounded-full w-10 h-10 text-white p-1">
                                    <IoCallOutline className='text-xl'/>
                                </div>
                                    <h3 className=' capitalize text-xl '>call to us</h3>
                            </div>
                            <p className=' capitalize text-sm'>we are avaliable 24/7, 7days a week.</p>
                            <p className=' capitalize text-sm'>phone: +2010111122222</p>
                            <div className="border-black/70 my-5 w-63 border-b flex justify-center"></div>
                               <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center bg-secondr rounded-full w-10 h-10 text-white p-1">
                                    <MdOutlineEmail className='text-xl'/>
                                </div>
                                    <h3 className=' capitalize text-xl '>write to us</h3>
                            </div>
                            <p className=' capitalize text-sm'>fill out our form and we will contact you within 24 hours.</p>
                            <p className='  text-sm'>Emails: customer@exculsive.com</p>
                            <p className='  text-sm'>Emails: support@exculsive.com</p>
                        </motion.div>
                        <motion.div initial={{x:100, opacity:0}} animate={{x:0, opacity:100}} transition={{duration:0.4}} className="bg-white shadow-xl p-12">
                            <form onSubmit={handleform}>
                                <div className="flex justify-center flex-col md:flex-row gap-3 ">
                                    <input required value={name} onChange={e => setName(e.target.value)} className='bg-bage px-3 outline-0 py-2 rounded-md' type="text" placeholder='Your Name'/>
                                    <input required value={email} onChange={e => setEmail(e.target.value)} className='bg-bage px-3 outline-0 py-2 rounded-md' type="email" placeholder='Your Email'/>
                                    <input required value={phone} onChange={e => setPhone(e.target.value)} className='bg-bage px-3 outline-0 py-2 rounded-md' type="tel" placeholder='Your Phone'/>
                                </div> 
                                <textarea value={area} onChange={e => setArea(e.target.value)} className='bg-bage w-full h-60 py-3 px-4 outline-0 rounded-md mt-9' rows={5} cols={4} placeholder='Your Message'/>
                                <div className="flex justify-center items-center mx-auto hover:bg-hoverr transition-all duration-300 w-42 rounded-sm mt-5 bg-secondr ">
                                <button type='submit' className='text-white py-3 px-7'>Send Message</button>
                            </div>
                            </form>
                            

                        </motion.div>
        </div>

      </div>
  )
}

export default Contact
