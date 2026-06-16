import React, { useEffect, useState } from 'react'
import Col from '../components/col'
import { useDispatch,useSelector } from 'react-redux'
import { getProducts } from '../services/rtk/slices/products'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoStarSharp, IoStarHalfSharp,IoStarOutline} from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { AddCart } from '../services/rtk/slices/cart';
import { addwish } from '../services/rtk/slices/wish';
import { Link, useParams } from 'react-router-dom';
import { getProductsbyCategory } from '../services/rtk/slices/products';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
const Products = () => {
    
const container = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.35,
    },
  },
};

    const dispatch  = useDispatch();
    const {data:products,loading,total} = useSelector((state) => state.products)

    const [currentpage,setcurrentpage] = useState(1);
    const productsperpage = 20;
     const {category} = useParams();
    useEffect(() => 
    {
      if(category)
      {
          dispatch(getProductsbyCategory(category))
      }
      else{
             dispatch(getProducts(currentpage))
      }
           
    },[currentpage,category])

    useEffect(() => {
    
    if (!loading && products.length > 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}, [products, loading]);
    const totalpages =Math.ceil((total || 0 ) / productsperpage);

    const [sortType,setsortType] = useState("default");
    const sortedProduct = [...products]

   

    switch(sortType)
    {
      case "price-asc":
        sortedProduct.sort((a,b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProduct.sort((a,b) => b.price - a.price);
        break;
      case "rating":
        sortedProduct.sort((a,b) => b.rating - a.rating);
        break;
      case "name":
        sortedProduct.sort((a,b) => a.title.localeCompare(b.title));
        break;

    }
  return (
    <div className='py-12 relative min-h-screen px-13'>
           <div className="flex gap-5 mb-5 items-center">
            <Col/>
            <span className='font-semibold text-secondr'>Our Store</span>
        </div>
        <div className="flex justify-between">
            <h2 className='font-semibold text-2xl  capitalize'>all products</h2>
            <select
            value={sortType}
            onChange={(e) => setsortType(e.target.value)}
             className='border border-gray-400 rounded-md py-2 px-3 md:w-45 w-40 ml-2 outline-0'>
                 <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="name">Name: A–Z</option>
            </select>
        </div>
        {loading && (
      <div className="absolute inset-0 bg-white/70 animate-pulse flex justify-center items-center z-50">
        <span className="text-2xl font-semibold animate-pulse">
          Loading...
        </span>
      </div>
    )}
    <AnimatePresence mode='wait'>
         <motion.div variants={container} initial="hidden" animate="show" key={currentpage} exit={{ opacity: 0 }} className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mt-10 gap-7' >
        {
           
        sortedProduct.map((item) => 
        {
         const full = Math.floor(item.rating);
         const halffull = (item.rating) % 1 >= 0.5;
         const empaty = 5 - full - (halffull ? 1 : 0);
         
         return(
                         <motion.div variants={word} key={item.id} className="item flex  flex-col gap-3">
              <div className="card bg-bage  hover:scale-105 transition-all duration-300 flex justify-center  p-9 group relative">
                <img src={item.thumbnail} className='w-40 h-40 object-contain'/>
                  <div onClick={() => dispatch(addwish(item))} className='absolute top-5 right-3 rounded-full w-7 h-7 flex justify-center items-center bg-white hover:bg-secondr hover:text-white transition-all duration-300  cursor-pointer'>
                    <FaRegHeart  />
                </div>
                <Link to={`/details/${item.id}`}><div className="absolute top-15 right-3 rounded-full w-7 h-7 p-1 flex justify-center items-center hover:text-white hover:bg-secondr transition-all duration-300  bg-white">
                      <IoEyeOutline />
                </div></Link>
                <span className={`absolute top-2 left-3 bg-secondr text-white text-sm opacity-0 rounded-md py-0.5 ${item.discountPercentage > 12 ? 'opacity-100' : 'opacity-0'} px-2`}>{Math.ceil(item.discountPercentage)}%</span>
                <div className="flex justify-center gap-2">
                  <button onClick={() => dispatch(AddCart(item))} className='bg-black text-white px-3 py-2 bottom-0 left-0  absolute w-full hidden md:block  text-center opacity-0 group-hover:opacity-100 transition-all duration-300'>Add To Cart</button>
                        <button onClick={() => dispatch(AddCart(item))} className='bg-black text-white px-3 py-2 bottom-0 left-0  absolute w-full  text-center md:hidden transition-all duration-300'>Add To Cart</button>
                <IoCartOutline className='absolute opacity-0 group-hover:opacity-100 text-3xl z-50 text-white bottom-1.5 left-18' />
                </div>
               
        
              </div>
        
              <div className="flex flex-col gap-3">
        
              <h3 className='text-center font-semibold'>{item.title}</h3>
        
              <div className="price flex justify-center gap-3">
                 <span className='text-secondr'>{Math.round(item.price)}$</span>
                 
              </div>
        
                 <div className="stars flex justify-center gap-1 text-amber-300">
                        
                    
                 {Array.from({length:full}).map((_, id) => 
                (
                    <IoStarSharp key={`full-${id}`} />
        
                    
                ))}
                {halffull && <IoStarHalfSharp />}
                  {Array.from({length:empaty}).map((_, id) => 
                (
                    <IoStarOutline key={`empaty-${id}`} />
        
                    
                ))}
                </div>
        
              </div>
        
               </motion.div>
                 )}
        )}
       
      
      
    </motion.div>
    </AnimatePresence>
     {/* pagination */}
       <div className="flex justify-center items-center  gap-3 mt-10 ">
         {[...Array(totalpages)].map((_,index) =>
        (
        <button
            key={index}
            onClick={()=> setcurrentpage(index+1)}
        className={`py-2 md:px-1 px-2 border border-gray-300 rounded-md w-8 h-10  transition-all duration-300 text-black ${index+1 == currentpage ? 'bg-secondr text-white' : ''}`}>
            {index+1}

        </button>
        ) )}
    

       </div>
    </div>
  )
}

export default Products
