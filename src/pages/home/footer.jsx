import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import qrcode from '../../assets/imgs/Qrcode.png'
import stores from '../../assets/imgs/stores.png'
import apple from '../../assets/imgs/appstore.png'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = ({user}) => {
  return (
    <>
    <div className='bg-black py-12'>
        <div className="  text-white flex md:justify-around justify-center items-center flex-col md:flex-row gap-4   "> 
            <div className="flex flex-col items-center gap-3">
                     <h2 className='text-2xl font-eater font-bold '>exclusive</h2>
            <h3 className=' tracking-wide '>Subscribe</h3>
            <p className=' capitalize text-sm'>get 10% off your first order</p>
            <div className=" relative">
                         <input type="text" placeholder='Enter Your Email' className='border outline-0  border-white w-48 py-2 px-5 placeholder:text-sm'/>
                         <LuSendHorizontal className='text-xl absolute top-3 right-2 cursor-pointer' />
            </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-30 md:w-full gap-3">
                <h3 className=' tracking-wide  font-medium text-xl'>Support</h3>
                <p className=' text-sm capitalize text-center'>kafr el shiekh staduim street<br/> dh 1515, egypt</p>
                <p className='text-sm text-center'>exclusive@gmail.com</p>
                <p className='text-sm text-center'>+88015-88888-9999</p>

            </div>
            <div className="flex flex-col gap-3">
                <h3 className=' tracking-wide font-medium text-xl '>Account</h3>
                <Link to={'/account'} className='hover:text-secondr transition-all duration-300 text-sm cursor-pointer'>My Account</Link>
                <Link to={'/login'} className='hover:text-secondr transition-all duration-300 text-sm cursor-pointer'>Login</Link>
               {!user && <Link to={'/signup'} className='hover:text-secondr transition-all duration-300 text-sm cursor-pointer'>Register</Link>}
                <Link to={'/cart'} className='hover:text-secondr transition-all duration-300 text-sm cursor-pointer'>Cart</Link>
                <Link to={'/wishlist'} className='hover:text-secondr transition-all duration-300 text-sm cursor-pointer'>Wishlist</Link>
                <Link to={'/products'} className='hover:text-secondr transition-all duration-300 text-sm cursor-pointer'>Shop</Link>

            </div>
            <div className="flex flex-col gap-3">
                <h3 className=' tracking-wide font-medium text-xl '>Quick Links</h3>
                <a className='text-sm hover:text-greens transition-all duration-300'>Privacy Policy</a>
                <a className='text-sm hover:text-greens transition-all duration-300'>Terms Of Use</a>
                <a className='text-sm hover:text-greens transition-all duration-300'>FAQ</a>
                <a className='text-sm hover:text-greens transition-all duration-300'>Contact</a>

            </div>
            <div className="flex flex-col gap-4">
                <h3 className=' tracking-wide text-2xl font-semibold'>Download App</h3>
                <p className='text-gray-500 text-xs'>Save 3$ with App New User Only</p>
                <div className="flex gap-3">
                            <img src={qrcode} className=' cursor-pointer '/>
                            <div className="">
                             <img src={stores} className='cursor-pointer w-25 object-contain'/>
                            
                            </div>
                           
                            

                </div>
                <div className="icons flex  gap-10">
                    <FaFacebookF   className=' cursor-pointer'/>
                    <FaXTwitter    className=' cursor-pointer'/>
                    <FaInstagram   className=' cursor-pointer'/>
                    <FaLinkedinIn  className=' cursor-pointer'/>
                </div> 

            </div>
           
        </div>

      
    </div>
    <hr className='w-full border-gray-600' />
       <div className="footer w-full bg-black flex justify-center p-5 ">
        
            <p className=' tracking-wider capitalize text-sm md:text-base text-white'>&copy;All right rserved 2026 by | <strong><a target='_blank' href='https://www.linkedin.com/in/abdullah-mhrous-70805a389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className='cursor-pointer hover:text-greens transition-all duration-300'>Abdullah Mhrous</a></strong></p>

        </div>
        </>
  )
}

export default Footer
