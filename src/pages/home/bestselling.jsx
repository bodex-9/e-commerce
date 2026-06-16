import React from 'react'
import { bestseller } from '../../utils/bestseller'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoStarSharp, IoStarHalfSharp} from "react-icons/io5";
import Col from '../../components/col'
import { AddCart } from '../../services/rtk/slices/cart'
import { addwish } from '../../services/rtk/slices/wish'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const  Bestselling = () => {
  const dispatch = useDispatch();
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};
  return (
    <div className='px-10 py-12'>
      <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}}  className="flex items-center gap-5">
        <Col/>
             <span className='font-semibold text-secondr'>This Month</span>
      </motion.div>
      <div className="flex justify-between items-center">
        <motion.h2  initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.1}} className='font-semibold text-2xl'>Best Selling Products</motion.h2>
        <Link to={'/products'}><motion.button initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true,amount:0.1}} transition={{duration:0.4}}  className='bg-secondr text-white py-3 px-5 hover:bg-hoverr transition-all duration-300 my-13 rounded-md w-45'>View All</motion.button></Link>

      </div>
      <motion.div variants={container} viewport={{once:true,amount:0.2}} initial="hidden" whileInView="show" className="grid grid-cols-1 gap-7 sm:grid-cols-4">
               {bestseller.map((item) => 
        {
            
         const full = Math.floor(item.rating);
         const halffull = (item.rating) % 1 !== 0;
         
         return(
                         <motion.div variants={word} key={item.id}  className="item flex  flex-col gap-3">
              <div className="card bg-bage  hover:scale-105 transition-all duration-300 flex justify-center  p-7 group relative">
                <img src={item.thumbnail} className='w-35 h-35 mb-5 md:mb-0 object-contain'/>
                <div onClick={()=> dispatch(addwish(item))} className='absolute top-5 right-3 rounded-full w-7 h-7 flex justify-center items-center bg-white hover:bg-secondr hover:text-white transition-all duration-300  cursor-pointer'>
                  <FaRegHeart  />
              </div>
              <Link to={`/details/${item.id}`}><div className="absolute top-15 right-3 rounded-full w-7 h-7 p-1 flex justify-center items-center hover:text-white hover:bg-secondr transition-all duration-300  bg-white">
                    <IoEyeOutline />
              </div></Link>
                 <button onClick={() => dispatch(AddCart(item))} className='bg-black text-white px-3 py-2 bottom-0 left-0  absolute w-full hidden md:block  text-center opacity-0 group-hover:opacity-100 transition-all duration-300'>Add To Cart</button>
                       <button onClick={() => dispatch(AddCart(item))} className='bg-black text-white px-3 py-2 bottom-0 left-0  absolute w-full  text-center md:hidden transition-all duration-300'>Add To Cart</button>
        
              </div>
              <div className="flex flex-col gap-3">
        
              <h3 className='text-center font-semibold'>{item.title}</h3>
        
              <div className="price flex justify-center gap-3">
                 <span className='text-secondr'>{item.price}$</span>
                 <del className='text-gray-500'>{item.originalPrice}$</del>
              </div>
        
                 <div className="stars flex justify-center gap-1 text-amber-300">
                        
                    
                 {Array.from({length:full}).map((_, id) => 
                (
                    <IoStarSharp key={`full-${id}`} />
        
                    
                ))}
                {halffull && <IoStarHalfSharp />}
                </div>
        
              </div>
               </motion.div>
                 )})}
                  
            </motion.div>

      </div>
    
  )
}

export default Bestselling
