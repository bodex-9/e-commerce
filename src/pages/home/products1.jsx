import React from 'react'
import shirt from './../../assets/imgs/shirt.png'
import chair from './../../assets/imgs/chair.png'
import control from './../../assets/imgs/control.png'
import keyboard from './../../assets/imgs/keyboard.png'
import screen from './../../assets/imgs/screen.png'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoStarSharp, IoStarHalfSharp} from "react-icons/io5";
import { Link } from 'react-router-dom'
import { AddCart } from '../../services/rtk/slices/cart'
import { addwish } from '../../services/rtk/slices/wish'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
export const products1 = [
  {
    id: 212,
    title: "HAVIT HV-G92 Gamepad",
    description: "Ergonomic wired gamepad with dual vibration motors and responsive buttons for an immersive gaming experience.",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    rating: 5,
    reviewsCount: 88,
    thumbnail: control
  },
  {
    id: 213,
    title: "AK-900 Wired Keyboard",
    description: "Durable wired keyboard featuring customizable RGB backlighting and tactile keys for fast, accurate typing and gaming.",
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    rating: 3.5,
    reviewsCount: 75,
    thumbnail: keyboard
  },
  {
    id: 214,
    title: "IPS LCD Gaming Monitor",
    description: "High-refresh-rate IPS LCD monitor delivering stunning color accuracy and smooth visuals for competitive gameplay.",
    price: 370,
    oldPrice: 400,
    discount: "-30%",
    rating: 5,
    reviewsCount: 99,
    thumbnail: screen
  },
  {
    id: 215,
    title: "S-Series Comfort Chair",
    description: "Ergonomic gaming and office chair with lumbar support, adjustable armrests, and premium cushioning for all-day comfort.",
    price: 375,
    oldPrice: 400,
    discount: "-25%",
    rating: 4.5, 
    reviewsCount: 99,
    thumbnail: chair
  },
  {
    id: 216,
    title: "Black T-Shirt",
    description: "Classic and comfortable black cotton t-shirt, featuring a breathable fit perfect for casual everyday wear.",
    price: 140,
    oldPrice: 200,
    discount: "-25%",
    rating: 4, 
    reviewsCount: 99,
    thumbnail: shirt
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};




const Products1 = () => {

  const dispatch = useDispatch();

  return (
    <div className="pt-12 px-13">
     
        <motion.div variants={container} viewport={{once:true,amount:0.1}} initial="hidden" whileInView="show"  className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-7' >
        {products1.map((item) => 
{
    
 const full = Math.floor(item.rating);
 const halffull = (item.rating) % 1 !== 0;
 
 return(
                 <motion.div  key={item.id} variants={word} className="item flex  flex-col gap-3">
                  
      <div className="card bg-bage  hover:scale-105 transition-all duration-300 flex justify-center  p-11 group relative">
        <img src={item.thumbnail} className='w-35 h-35 mb-3 md:mb-0 object-contain'/>
          <div onClick={() => dispatch(addwish(item))} className='absolute top-5 right-3 rounded-full w-7 h-7 flex justify-center items-center bg-white hover:bg-secondr hover:text-white transition-all duration-300  cursor-pointer'>
            <FaRegHeart  />
        </div>
        <Link to={`/details/${item.id}`}><div className="absolute top-15 right-3 rounded-full w-7 h-7 p-1 flex justify-center items-center hover:text-white hover:bg-secondr transition-all duration-300  bg-white">
              <IoEyeOutline />
        </div></Link>
        <span className='absolute top-2 left-3 bg-secondr text-white text-sm rounded-md py-0.5 px-2'>{item.discount}</span>
        <button onClick={() => dispatch(AddCart(item))} className='bg-black text-white px-3 py-2 bottom-0 left-0  absolute w-full hidden md:block  text-center opacity-0 group-hover:opacity-100 transition-all duration-300'>Add To Cart</button>
        <button onClick={() => dispatch(AddCart(item))} className='bg-black text-white px-3 py-2 bottom-0 left-0   absolute w-full  text-center md:hidden transition-all duration-300'>Add To Cart</button>

      </div>

      <div className="flex flex-col gap-3">

      <h3 className='text-center font-semibold'>{item.title}</h3>

      <div className="price flex justify-center gap-3">
         <span className='text-secondr'>{item.price}$</span>
         <del className='text-gray-500'>{item.oldPrice}$</del>
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
         )}
         
         )}
          
    </motion.div>
    
     <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:100}} viewport={{once:true,amount:0.7}} transition={{duration:0.4}}  className="flex justify-center items-center">
      <Link to={'/products'}>
                <button className='bg-secondr text-white py-3 px-5 hover:bg-hoverr transition-all duration-300 my-13 rounded-md w-45'>View All Products</button>
                </Link>
            </motion.div>
     </div>
)}
export default Products1;
