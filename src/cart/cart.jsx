import React from 'react'
import { TbXboxX } from "react-icons/tb";
import screen from '../assets/imgs/screen.png'
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCart } from '../services/rtk/slices/cart';
import { icreament,decrement } from '../services/rtk/slices/cart';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Cart = () => {

    const dispatch = useDispatch()
   const cartitems = useSelector(state => state.cart)
   const totalPrice  = cartitems.reduce((acc,item) => 
{
        acc += item.price * item.quantity;
        return acc;
},0)

  return (
    <motion.div initial={{y:100, opacity:0}} animate={{y:0, opacity:100}}  transition={{duration:0.4}} className='py-16 px-13 bg-gray-50 min-h-screen'>
    <div className="hidden md:grid grid-cols-4 bg-white rounded-lg shadow-sm p-6 font-semibold mb-6">
        <div className="font-semibold  capitalize">product</div>
        <div className="font-semibold  text-center capitalize">price</div>
        <div className="font-semibold  text-center capitalize">quantity</div>
        <div className="font-semibold  text-center capitalize">subtotal</div>

    </div>
        <div className=" p-5 md:p-0.5   ">
            {cartitems?.map((item) =>
            (
                     <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 gap-5 p-6 bg-white rounded-lg shadow-sm  mb-4 ">
                            <div className="flex items-center gap-5">
                                <div className="relative">
                                        <img src={item.thumbnail} className='w-15 h-15 object-contain'/>
                                        <TbXboxX onClick={()=> dispatch(DeleteCart(item))} className='absolute -top-1 -left-0.5 rounded-full cursor-pointer hidden md:block  bg-secondr text-white'/>
                                </div>
                                <span className=' capitalize'>{item.title}</span>
                                    
                            </div>
                            <div className=" items-center flex md:justify-center">
                                <span className="md:hidden font-semibold">
                                        Price:
                                </span>{" "}
                                {Math.ceil(item.price)}$
                            </div>
                            <div className="md:flex md:justify-center">
                                  <div className="flex items-center justify-center gap-4 border border-gray-300 rounded-md w-fit px-4 py-2">
                                <button onClick={()=> dispatch(decrement(item))} className="text-lg"><FaMinus className='bg-black text-white p-0.5 rounded-full hover:scale-105 transition-all duration-300' /></button>
                                <span className='font-semibold'>{item.quantity}</span>
                                <button onClick={()=> dispatch(icreament(item))} className="text-lg"><FaPlus className='bg-black text-white p-0.5 rounded-full hover:scale-105 transition-all duration-300'/></button>
                                </div>

                            </div>

                            <div className=" items-center flex md:justify-center">
                                <span className='md:hidden font-semibold'>
                                    Subtotal:
                                </span>{""}
                                            {Math.ceil(item.price) * item.quantity}$
                            </div>
                            <div className="md:hidden">
                                <div className="flex mt-5 items-center">
                                    <FaTrashAlt onClick={()=> dispatch(DeleteCart(item))} className=' cursor-pointer w-11 h-10 text-secondr text-2xl rounded-full'/>
                                </div>
                                

                            </div>
                    </div>
            ))}
                   
        </div>

        <div className="flex justify-center mt-7">
            <Link to={'/products'}>
                <button className=' capitalize py-3 px-4 w-45 text-black rounded-md border border-black/50 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer'>return to shop</button>
                </Link>
        </div>
        <div className="flex flex-col justify-center mt-15 md:flex-row gap-3 items-center md:gap-17">
                    <div className="flex flex-col   md:flex-row gap-4">
                        <input type='text' placeholder='Coupon Code' className='py-2 px-5  rounded-md border placeholder:text-sm border-black/70 outline-0'/>
                        <button className='bg-secondr hover:bg-hoverr transition-all duration-300 text-white py-2 px-3 text-sm w-30  rounded-md'>Apply Coupon</button>
                    </div>

                    <div className="p-6 flex md:w-1/4 gap-5 mt-5 md:mt-0 flex-col border w-full">
                        <h3 className=' capitalize font-semibold text-xl'>cart total</h3>
                        <div className="flex justify-between">
                            <span className=' capitalize'>subtotal:</span>
                            <span>{Math.ceil(totalPrice)}$</span>
                        </div>
                        <div className="md:w-77  h-0.5 border-b border-gray-500 "></div>
                        <div className="flex justify-between">
                            <span className=' capitalize'>shipping:</span>
                            <span>free</span>
                        </div>
                        <div className="md:w-77 h-0.5 border-b border-gray-500 "></div>
                        <div className="flex justify-between">
                            <span className=' capitalize'>total:</span>
                            <span>{Math.ceil(totalPrice)}$</span>
                        </div>
                        
                        <div className="flex justify-center">
                            {totalPrice > 0 ? 
                             <Link to={'/checkout'}> <button className=' capitalize bg-secondr transition-all duration-300 text-white py-3 px-4  rounded-md hover:bg-hoverr'>procees to checkout</button></Link>
                            :
                              <button disabled className=' capitalize bg-secondr transition-all duration-300 text-white py-3 px-4  rounded-md hover:bg-hoverr'>procees to checkout</button>}
                          
                        </div>

                    </div>
        </div>
    </motion.div>
  )
}

export default Cart
