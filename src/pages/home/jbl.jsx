import React from 'react'
import jbl from '../../assets/imgs/jbl.png'
import axios from 'axios'
import { AddCart } from '../../services/rtk/slices/cart'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'
const Jbl = () => {

  const dispatch = useDispatch();
  const item ={
    id:'400',
    thumbnail:jbl,
    title:'JBL',
    price:600,
    quantity:1
  }

  const addproduct = async()=>
  {
    try{
           const res = await axios.post("https://dummyjson.com/products/add",
     item
    )
    dispatch(AddCart(item));
        await Swal.fire({
      title: "Added To Cart",
      icon: "success",
      iconColor:'#00FF66',
      confirmButtonColor: "#00FF66"
    });
    }
    catch (error) {
    console.log(error);
  }
}

  return (
    <div className="py-12 px-10">
    <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true,amount:0.3}} transition={{duration:0.4}}  className=' flex justify-between flex-col md:flex-row bg-black md:w-[1170px] md:h-[500px] mx-auto px-10 py-15   shadow-md rounded-md'>
      <div className="flex flex-col order-2 md:order-1 md:gap-9 gap-7  ">
        <span className='font-semibold text-greens'>Categories</span>
        <h2 className='md:text-5xl text-2xl font-bold text-white md:leading-17 capitalize tracking-wide'>Enhance your<br/> sound experience</h2>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-5">
            <div className="flex flex-col  bg-white text-black hover:text-white transition-all duration-300 hover:bg-greens w-15 p-2 h-15 items-center rounded-full ">
                <span className='font-bold'>23</span>
                <p className='text-xs'>Hours</p>

            </div>
            <div className="flex flex-col  bg-white text-black w-15 p-2 h-15 items-center  hover:text-white transition-all duration-300 hover:bg-greens rounded-full ">
                <span className='font-bold'>05</span>
                <p className='text-xs'>Days</p>

            </div>
            <div className="flex flex-col  bg-white text-black w-15 p-2 h-15 items-center hover:text-white transition-all duration-300 hover:bg-greens rounded-full ">
                <span className='font-bold'>59</span>
                <p className='text-xs'>Minutes</p>

            </div>
            <div className="flex flex-col  bg-white text-black w-15 p-2 h-15 items-center hover:text-white transition-all duration-300 hover:bg-greens rounded-full ">
                <span className='font-bold'>35</span>
                <p className='text-xs'>Seconds</p>

            </div>
            

        </div>
        <button onClick={addproduct} className='bg-greens w-40 py-3 px-3 rounded-md text-white hover:bg-hoverr  tracking-wide'>Buy Now</button>
        </div>
        <div className="relative order-1 md:order-2 ">
            <div className="absolute  inset-0 scale-110 bg-white/40 blur-3xl rounded-full"></div>
             <img src={jbl} className='md:w-[550px] mb-5 md:mb-0   z-10 relative md:h-[330px] '/>  

        </div>
               
      </motion.div>
    </div>
  )
  }


export default Jbl
