import React from 'react'
import Slider from './slider'
import Timer from './timer'
import Products1 from './products1'
import Categoreypage from './categoreypage'
import Bestselling from './bestselling'
import Jbl from './jbl'
import Product3 from './product3'
import Newarrival from './newarrival'
import Banner from './banner'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div 
    initial={{x:"-100vw"}}
    animate={{x:0}}
    transition={{duration:0.4}}>
      <Slider/>
      <Timer/>
      <Products1/>
      <Categoreypage/>
      <Bestselling/>
      <Jbl/>
      <Product3/>
      <Newarrival/>
      <Banner/>
      
    </motion.div>
  )
}

export default Home
