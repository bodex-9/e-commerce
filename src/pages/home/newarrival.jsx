import React from 'react'
import ps5 from '../../assets/imgs/ps5.png'
import womencollections from '../../assets/imgs/Women-Accessories.png'
import speakers from '../../assets/imgs/speakers.png'
import perfume from '../../assets/imgs/perfume.png'
import Col from '../../components/col'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Newarrival = () => {
  return (
    <div className="py-12 px-13">
        <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:100}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}}  className="flex gap-5 mb-5 items-center">
            <Col/>
            <span className='font-semibold text-secondr'>Features</span>
        </motion.div>
        <motion.h2 initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}}  className='font-semibold text-2xl  capitalize'>New Arrival</motion.h2>
        <div className="flex justify-center flex-col sm:flex-row items-center gap-7 mt-10 ">
            <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}}  className="bg-black w-[500px] h-[580px] hover:scale-105 transition-all duration-300 relative text-white">
                <div className="flex flex-col  absolute bottom-7 md:left-5 left-15 z-10 gap-3">
                     <h2 className='text-xl font-semibold tracking-wide '>playstation 5</h2>
                <p className='text-xs leading-5 capitalize'>black and white version of the ps5<br/>  coming out on sale </p>
                <a className='text-sm underline-offset-4 decoration-gray-400 hover:text-gray-300 transition-all duration-300 underline cursor-pointer'>Shop Now</a>

                </div>
               
                <img src ={ps5} className='object-contain '/>

            </motion.div>
            <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}}  className="flex flex-col gap-2">
                <div className="bg-black flex justify-between w-[570px]  h-[284px] hover:scale-105 transition-all duration-300 relative p-2 items-center  text-white">
                      <div className="flex flex-col absolute bottom-4 left-25 md:left-3 gap-3">
                     <h2 className='text-xl font-semibold '>Woman’s Collections</h2>
                <p className='text-xs leading-5 capitalize'>feaured woman collections that<br/> give you antoher vibe </p>
                <Link to={'/products'}><a className='text-sm underline-offset-4 decoration-gray-400 hover:text-gray-300 transition-all duration-300 underline cursor-pointer '>Shop Now</a></Link>

                </div>
                        
                    <img src={womencollections} className=' md:w-1/2 w-45 object-contain md:right-2 right-20 absolute'/>
                </div>
                <div className="flex gap-7 ">
                    <div className="bg-black w-[270px] justify-center hover:scale-105 transition-all duration-300 relative flex h-[284px]">
                        <img src={speakers} className='object-contain  z-10 w-50'/>
                        <div className="absolute  inset-0 scale-110 bg-white/40 blur-3xl rounded-full"></div>
                                <div className="flex flex-col absolute md:left-3 right-6 bottom-4 z-11 text-white gap-3">
                     <h2 className='text-xl font-semibold  tracking-wide'>Speakers</h2>
                <p className='text-xs md:leading-5 capitalize'>Amazon wireless speakers</p>
                <Link to={'/products'}><a className='text-sm underline-offset-4 decoration-gray-400 hover:text-gray-300 transition-all duration-300 underline cursor-pointer '>Shop Now</a></Link>

                </div>
                    </div>
                    <div className="bg-black w-[270px] hover:scale-105 transition-all duration-300 flex relative justify-center h-[284px]">
                        <img src={perfume} className='object-contain z-10 w-50'/>
                        <div className="absolute  inset-0 scale-110 bg-white/40 blur-3xl rounded-full"></div>
                                <div className="flex flex-col absolute left-5 md:right-0  bottom-4 text-white z-10 gap-3">
                     <h2 className='text-xl font-semibold tracking-wide'>Perfume</h2>
                <p className='text-xs md:leading-5 capitalize'>GUCCI INENSE OUD EDP</p>
                <Link to={'/products'}><a className='text-sm underline-offset-4 decoration-gray-400 hover:text-gray-300 transition-all duration-300 underline cursor-pointer '>Shop Now</a></Link>

                </div>

                    </div>
                    
                </div>

            </motion.div>

        </div>

      
    </div>
  )
}

export default Newarrival
