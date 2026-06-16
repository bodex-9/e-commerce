import React from 'react'
import about from '../assets/imgs/about.jpeg'
import founder from '../assets/imgs/founder.png'
import { BsShop } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { LuShoppingBag } from "react-icons/lu";
import { FaSackDollar } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { companyEmployees } from '../utils/employees';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay,Pagination } from "swiper/modules";
import Banner from './home/banner';
import { motion } from 'framer-motion';

const About = () => {
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const container2 = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 9, 
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
  const text2 = "Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer."
  const text1 = "Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Egypt. Supported by wide range of tailored marketing data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region."
  return (
    <div className='py-12 px-13'>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-7 md:gap-3">

            <div className="content order-2 md:order-1 flex flex-col gap-3">
                <motion.h2  
                  initial={{x:-100, opacity:0}}
                  animate={{x:0, opacity:1}}   
                  whileInView="show"
                  viewport={{ once: true }} transition={{duration:0.4}} 
                  className='text-3xl md:text-5xl tracking-wider mb-0 md:mb-5 font-semibold'>Our Story</motion.h2>
                <motion.p variants={container}   initial="hidden" whileInView="show" viewport={{ once: true }} className='max-w-138'> 
                   {text1.split(" ").map((w, i) => (
                <motion.span key={i} variants={word} className="inline-block mr-1">
                  {w}
                </motion.span>
                 ))}</motion.p>
                <motion.p variants={container2}   initial="hidden" whileInView="show"  delay={{duration:3}} viewport={{ once: true }} className='max-w-138'> 
                   {text2.split(" ").map((w, i) => (
                <motion.span key={i} variants={word} className="inline-block mr-1">
                  {w}
                </motion.span>
                 ))}</motion.p>
            </div>
            <motion.div  initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.4}} className=" order-1 md:order-2">
                <img src={about} className='rounded-md' />
            </motion.div>

        </div>

        <div className="pt-30">
               <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:100}} viewport={{once:true,amount:0.8}} transition={{duration:0.4}}  className="flex flex-col md:flex-row  justify-center items-center gap-7">
                        <div className=" w-full max-w-50 shadow-md hover:bg-secondr rounded-md hover:text-white transition-all duration-300 group flex flex-col py-5 items-center border border-gray-300    gap-2">
                            <div className="bg-black group-hover:bg-white group-hover:text-black text-white rounded-full p-3 group-hover:border-hoverr   border-8 border-icon">
                                          <BsShop  className='text-3xl ' />
                            </div>
                              
                                <h3 className='  uppercase  text-xl font-bold'>10.5k</h3>
                                <p className=' capitalize text-sm'>sallers active our site</p>
                        </div>
                        <div className=" w-full max-w-50 shadow-md hover:bg-secondr rounded-md hover:text-white transition-all duration-300 group flex flex-col py-5 items-center border border-gray-300    gap-2">
                            <div className="bg-black group-hover:bg-white group-hover:text-black text-white rounded-full p-3 group-hover:border-hoverr   border-8 border-icon">
                                          <BiDollarCircle  className='text-3xl ' />
                            </div>
                              
                                <h3 className='  uppercase  text-xl font-bold'>33k</h3>
                                <p className=' capitalize text-sm'>mopnthly products sale</p>
                        </div>
                        <div className=" w-full max-w-50 shadow-md hover:bg-secondr rounded-md hover:text-white transition-all duration-300 group flex flex-col py-5 items-center border border-gray-300    gap-2">
                            <div className="bg-black group-hover:bg-white group-hover:text-black text-white rounded-full p-3 group-hover:border-hoverr   border-8 border-icon">
                                          <LuShoppingBag   className='text-3xl ' />
                            </div>
                              
                                <h3 className='  uppercase  text-xl font-bold'>45.5k</h3>
                                <p className=' capitalize text-sm'>customer active in our site</p>
                        </div>
                        <div className=" w-full max-w-50 shadow-md hover:bg-secondr rounded-md hover:text-white transition-all duration-300 group flex flex-col py-5 items-center border border-gray-300    gap-2">
                            <div className="bg-black group-hover:bg-white group-hover:text-black text-white rounded-full p-3 group-hover:border-hoverr   border-8 border-icon">
                                          <FaSackDollar  className='text-3xl ' />
                            </div>
                              
                                <h3 className='  uppercase  text-xl font-bold'>25k</h3>
                                <p className=' capitalize text-sm'>anual gross sale in our site</p>
                        </div>
                        </motion.div>
        </div>

        <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:100}} viewport={{once:true,amount:0.7}} transition={{duration:0.4}}  className="py-15 mt-11">
                    <Swiper
          modules={[Autoplay,Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
            {companyEmployees.map((employee) =>
            (
                <SwiperSlide key={employee.id}>
                     <div  className="flex flex-col justify-center items-center  gap-3">
                <div className="flex justify-center items-center  ">
                    <img src={employee.image} className=' object-contain rounded-full p-1' />
                </div>
                <h2 className=' capitalize font-medium text-3xl tracking-wider'>{employee.name}</h2>
                <p className=' capitalize text-sm'>{employee.position}</p>
                <div className="flex gap-3 justify-center">
                        <FaXTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />

                </div>


            </div>
            </SwiperSlide>
            ))}
           
                </Swiper>
        </motion.div>
       <Banner/>
      
    </div>
  )
}

export default About
