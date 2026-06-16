import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';
const Navtop = () => {
  return (
    <div className='bg-black p-2 justify-center flex  items-center px-4 md:px-16  sm:justify-between w-full'>
        <div className="flex justify-center gap-1 sm:gap-3 items-center text-center ">

        <p className='text-gray-300 text-[10px] sm:text-[14px] md:tracking-wide capitalize'>summer sale for all swim suits and free express delivery-off 50%!</p>
        <div  className='relative pb-1.5 md:pb-0.5'>
             <Link to={'/products'}><a className='text-white text-[10px] sm:text-[14px]  font-bold underline-offset-1 border-b border-gray-400 cursor-pointer hover:text-gray-200 transition-colors'>Shop Now</a></Link>
             

        </div>
       
    
        </div>
        <div className="sm:flex justify-center hidden items-center text-white text-[11px] sm:text-[14px] gap-1 sm:gap-2">
            <p>English</p>
            <IoIosArrowUp className='rotate-180 text-xs sm:text-sm' />

        </div>
      
    </div>
  )
}

export default Navtop;
