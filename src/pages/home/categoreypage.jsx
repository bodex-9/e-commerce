import React from 'react'
import Col from '../../components/col';
import { GiSmartphone } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { FiWatch } from "react-icons/fi";
import { IoBagHandle } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { MdSportsSoccer } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Categoreypage = () => {
        const navigate = useNavigate();
  return (
    <div className='py-12 px-10'>
      <div className="flex flex-col gap-7">
        <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}}  className="flex gap-5 items-center">
            <Col/>
            <span className='font-semibold text-secondr'>Categories</span>
        </motion.div>
        <motion.h2 initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}}  className='font-semibold text-2xl'>Browse By Categorey</motion.h2>

        <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}}  className="grid grid-col-2 sm:grid-cols-4  md:grid-cols-6 mx-auto gap-7">

            <div onClick={()=>navigate('/products/category/smartphones')} className="border border-black/35 rounded-lg  hover:scale-105 transition-all duration-300 w-40 h-35 flex flex-col justify-center items-center hover:bg-secondr gap-4 hover:text-white">
            <div className="flex justify-center items-center">
                 <GiSmartphone className='text-5xl ' />
            </div>
                <h3 className='text-center text-xl'>Phones</h3>
            </div>
            <div onClick={()=>navigate('/products/category/laptops')} className="border border-black/35 rounded-lg  hover:scale-105 transition-all duration-300 w-40 h-35 flex flex-col justify-center items-center hover:bg-secondr gap-4 hover:text-white">
            <div className="flex justify-center items-center">
                 <FaComputer className='text-5xl ' />
            </div>
                <h3 className='text-center text-xl'>Computers</h3>
            </div>
            <div  onClick={()=>navigate('/products/category/mens-watches')} className="border border-black/35 rounded-lg  hover:scale-105 transition-all duration-300 w-40 h-35 flex flex-col justify-center items-center hover:bg-secondr gap-4 hover:text-white">
            <div className="flex justify-center items-center">
                 <FiWatch className='text-5xl ' />
            </div>
                <h3 className='text-center text-xl'>Watches</h3>
            </div>
            <div onClick={()=>navigate('/products/category/womens-bags')} className="border border-black/35 rounded-lg  hover:scale-105 transition-all duration-300 w-40 h-35 flex flex-col justify-center items-center hover:bg-secondr gap-4 hover:text-white">
            <div className="flex justify-center items-center">
                 <IoBagHandle  className='text-5xl ' />
            </div>
                <h3 className='text-center text-xl capitalize'>womens bags</h3>
            </div>
            <div onClick={()=>navigate('/products/category/mobile-accessories')} className="border border-black/35 rounded-lg  hover:scale-105 transition-all duration-300 w-40 h-35 flex flex-col justify-center items-center hover:bg-secondr gap-4 hover:text-white">
            <div className="flex justify-center items-center">
                 <FaHeadphones  className='text-5xl ' />
            </div>
                <h3 className='text-center text-xl'>HeadPhones</h3>
            </div>
            <div onClick={()=>navigate('/products/category/sports-accessories')} className="border border-black/35 rounded-lg  hover:scale-105 transition-all duration-300 w-40 h-35 flex flex-col justify-center items-center hover:bg-secondr gap-4 hover:text-white">
            <div className="flex justify-center items-center">
                 <MdSportsSoccer className='text-5xl ' />
            </div>
                <h3 className='text-center text-xl'>Sports</h3>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Categoreypage;
