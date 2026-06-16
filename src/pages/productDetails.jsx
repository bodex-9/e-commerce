import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { IoStarSharp, IoStarHalfSharp} from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCw } from "react-icons/lu";
import { bestseller } from '../utils/bestseller';
import { products3 } from '../utils/products3';
import { products1 } from './home/products1';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { AddCart } from '../services/rtk/slices/cart';
import { useDispatch } from 'react-redux';
const ProductDetails = () => {
    const dispatch = useDispatch();

    const allproduct =[
        ...products1,
        ...products3,
        ...bestseller,
     ]
     const[product,setproduct] = useState(null);
    const {id} = useParams();
    const localproduct = allproduct.find((item) => String(item.id) === String(id));
    const getproduct = async() =>
    {
        try{
            if(localproduct)
            {
                setproduct(localproduct);
                return;
            }
                const res = await axios.get(`https://dummyjson.com/products/${id}`);
                setproduct(res.data);
        }
        catch (error){
                console.log(error);
        }
    }
    useEffect(()=>
    {
        getproduct();
    },[id])
     if (!product)
           {
                return(
                    <div className="flex justify-center items-center my-30 ">
                    <h2 className='text-gray-400 animate-pulse text-2xl'>Loading...</h2>

                </div>
                )
           }
             const full = Math.floor(product.rating);
            const halffull = (product.rating) % 1 !== 0;

  return (
    <div className='px-13 py-12'>
      
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 ">
            <div className="bg-bage w-full max-h-100 md:w-1/2">
            <div className="flex justify-center items-center p-5">
                    <img src={product.thumbnail} className='w-60 h-60 object-contain'/>
            </div>
            

            </div>
            <div className="flex flex-col text-center gap-5">
                <h2 className=' font-semibold md:text-2xl'>{product.title}</h2>
                <div className="flex gap-3 justify-center items-center">
                   <div className="stars flex justify-center gap-1 text-amber-300">
                                   
                               
                            {Array.from({length:full}).map((_, id) => 
                           (
                               <IoStarSharp key={`full-${id}`} />
                   
                               
                           ))}
                           {halffull && <IoStarHalfSharp />}
                           </div>|
                           <span className='text-greens'> In Stock</span>
                </div>
                <div className="flex justify-center items-center -ml-10">
                              <span className='text-xl md:text-2xl text-secondr'>{Math.ceil(product.price)}$</span>
                </div>
              
                <div className="max-w-90">
                            <span>{product.description}</span>
                </div>
                  <div onClick={() => dispatch(AddCart(product))} className="flex relative justify-center mt-9 gap-2  ">
                                <button   className='bg-black text-white px-3 py-2 cursor-pointer bottom-0 left-0  absolute w-full  text-center transition-all duration-300'>Add To Cart</button>
                                <IoCartOutline className='absolute cursor-pointer  text-3xl z-50 text-white bottom-1.5 left-14 md:left-1/4' />
                                </div>
                <div className="flex flex-col gap-5 border border-gray-500 p-5 mt-5">
                            <div className="flex gap-5 items-center">
                            <TbTruckDelivery className='text-4xl'/>
                            <div className="flex flex-col">
                                <span className='font-semibold'>Free Delivery</span>
                                <p className='text-sm underline capitalize'>enter your postal code for delivery availability</p>
                            </div>
                            </div>
                            <div className="flex gap-5 items-center">
                            <LuRefreshCw  className='text-4xl'/>
                            <div className="flex flex-col">
                                <span className='font-semibold'>Return Delivery</span>
                                <p className='text-sm  capitalize'>free 30 days delivery returns <a className='underline'>Details</a></p>
                            </div>

                </div>
                
                </div>
                  <div className="flex justify-center items-center">
                <Link to={'/products'}>
                <button className=' capitalize py-3 px-4 w-45 text-black rounded-md border border-black/50 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer'>return to shop</button>
                </Link>
                
            </div>
                

            </div>
          

        </div>

      
    </div>
  )
}

export default ProductDetails
