import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { motion } from 'framer-motion';
const Banner = () => {
  return (
    <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:100}} viewport={{once:true,amount:0.7}} transition={{duration:0.4}}  className='px-13 py-12'>
        <div className="grid grid-cols-1 mx-auto gap-5 sm:grid-cols-3">
            <div className=" flex flex-col  items-center  gap-2">
                <div className="bg-black text-white rounded-full p-2  border-8 border-icon">
                              <TbTruckDelivery className='text-4xl ' />
                </div>
                  
                    <h3 className='  uppercase text-center  text-lg font-semibold'>free and fast delivery</h3>
                    <p className=' capitalize text-xs'>free delivery for all orders over 140$</p>
            </div>
            <div className=" flex flex-col items-center  gap-2">
                <div className="bg-black text-white rounded-full p-2  border-8 border-icon">
                              <BiSupport className='text-4xl ' />
                </div>
                  
                    <h3 className='  uppercase text-center  text-lg font-semibold'>24/7 customer service</h3>
                    <p className=' capitalize text-xs'>friendly 24/7 customer support</p>
            </div>
            <div className=" flex flex-col items-center  gap-2">
                <div className="bg-black text-white rounded-full p-2  border-8 border-icon">
                              <VscWorkspaceTrusted className='text-4xl ' />
                </div>
                  
                    <h3 className='  uppercase text-center  text-lg font-semibold'>money back guarantee</h3>
                    <p className=' capitalize text-xs'>we return money within 30 days</p>
            </div>

        </div>

      
    </motion.div>
  )
}

export default Banner
