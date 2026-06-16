import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch,useSelector } from 'react-redux';
import { Deletewish } from '../services/rtk/slices/wish';
import { AddCart } from '../services/rtk/slices/cart';
import { addalltoCart } from '../services/rtk/slices/cart';
import { Clear } from '../services/rtk/slices/wish';
import { motion } from 'framer-motion';
const Wishlist = () => {

    const dispatch = useDispatch();
    const wishItem = useSelector((state) => state.wish)
    const moveall = () =>
    {
        dispatch(addalltoCart(wishItem));
        dispatch(Clear());
    }
  

  return (
    <motion.div  initial={{y:-100, opacity:0}} animate={{y:0, opacity:100}}  transition={{duration:0.4}} className='px-13 py-12'>
        <div className="flex justify-between items-center">
            <h2 className='text-2xl font-semibold'>Wishlist({wishItem.length})</h2>
            <button onClick={moveall} className={`bg-transparent border text-black font-semibold hover:cursor-pointer border-black/60 py-3 px-4 hover:bg-black hover:text-white transition-all duration-300 rounded-md ${wishItem.length !== 0 ? 'opacity-100' : 'opacity-0'} `}>Move All to Cart</button>
        </div>
        <div className="flex justify-center items-center mt-15">
          <h2 className={`capitalize text-xl md:text-2xl text-gray-500 ${wishItem.length === 0 ? 'opacity-100' : 'opacity-0'} `}>Your Wishlist is Empty</h2>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 ">
          
            {wishItem.map((item) => 
            
            {
                const addtocart = () =>
    {
        dispatch(AddCart(item));
        dispatch(Deletewish(item));
    }
    return(
                             <div key={item.id} className="item flex mt-10  flex-col gap-3">
                  <div className="card bg-bage  hover:scale-105 transition-all duration-300 flex justify-center  p-7 group relative">
                    <img src={item.thumbnail} className='w-35 h-35 object-contain'/>
                   <div onClick={()=> dispatch(Deletewish(item))} className='absolute top-5 right-3 rounded-full w-7 h-7 flex justify-center items-center bg-white hover:bg-secondr hover:text-white transition-all duration-300  cursor-pointer'>
             <FaRegTrashCan className='text-xl'/>
            </div>

                      <span className={`absolute top-2 left-3 bg-secondr text-white text-sm rounded-md py-0.5 px-2 ${item.discount ? 'opacity-100' : 'opacity-0'}`}>{item.discount}</span>
                    <span className={`absolute top-2 left-3 bg-greens text-white text-sm rounded-md py-0.5 px-2 ${item.isNew ?'opacity-100' :'opacity-0'}`}>New</span>
                    <button onClick={addtocart} className='bg-black text-white px-3 py-2 bottom-0 left-0  absolute w-full  text-center opacity-0 group-hover:opacity-100 transition-all duration-300'>Add To Cart</button>
            
                  </div>
                  <div className="flex flex-col gap-3">
            
                  <h3 className='text-center font-semibold'>{item.title}</h3>
                   <span className='text-secondr text-center'>{item.price}$</span>
                  </div>
                  </div>
)})}
                 



        </div>
    </motion.div>
  )
}

export default Wishlist
