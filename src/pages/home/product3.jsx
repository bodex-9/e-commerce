import { products3 } from '../../utils/products3'
import { FaRegHeart } from "react-icons/fa";
import { IoStarSharp, IoStarHalfSharp } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Col from '../../components/col';
import { Link } from 'react-router-dom';
import { AddCart } from '../../services/rtk/slices/cart'
import { addwish } from '../../services/rtk/slices/wish'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion';
const Product3 = () => {
  const dispatch = useDispatch()
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
  return (
    <div className="pt-12 px-13">
         <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}} className="flex gap-5 mb-5 items-center">
            <Col/>
            <span className='font-semibold text-secondr'>Products</span>
        </motion.div>
        <motion.h2 initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}}  className='font-semibold text-2xl  capitalize'>explore our products</motion.h2>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{once:true,amount:0.1}} className='grid grid-cols-1 mt-10 sm:grid-cols-3 md:grid-cols-4 gap-7' >
        {products3.map((item) => 
{
    
 const full = Math.floor(item.rating);
 const halffull = (item.rating) % 1 !== 0;
 
 return(
                 <motion.div  key={item.id} variants={word} className="item flex  flex-col gap-3">
      <div className="card bg-bage  hover:scale-105 transition-all duration-300 flex justify-center  p-7 group relative">
        <img src={item.thumbnail} className='w-35 h-35 mb-5 md:mb-0 object-contain'/>
       <div onClick={()=> dispatch(addwish(item))} className='absolute top-5 right-3 rounded-full w-7 h-7 flex justify-center items-center bg-white hover:bg-secondr hover:text-white transition-all duration-300  cursor-pointer'>
    <FaRegHeart  />
</div>
<Link to={`/details/${item.id}`}><div className="absolute top-15 right-3 rounded-full w-7 h-7 p-1 flex justify-center items-center hover:text-white hover:bg-secondr transition-all duration-300  bg-white">
      <IoEyeOutline />
</div></Link>
          
        <span className={`absolute top-2 left-3 bg-greens text-white text-sm rounded-md py-0.5 px-2 ${item.isNew ?'opacity-100' :'opacity-0'}`}>New</span>
         <button onClick={() => dispatch(AddCart(item))} className='bg-black text-white px-3 py-2 bottom-0 left-0  absolute w-full hidden md:block  text-center opacity-0 group-hover:opacity-100 transition-all duration-300'>Add To Cart</button>
               <button onClick={() => dispatch(AddCart(item))} className='bg-black text-white px-3 py-2 bottom-0 left-0  absolute w-full  text-center md:hidden transition-all duration-300'>Add To Cart</button>

      </div>
      <div className="flex flex-col gap-3">

      <h3 className='text-center font-semibold'>{item.title}</h3>

      <div className="price flex justify-center gap-3">
         <span className='text-secondr'>{item.price}$</span>
         <div className="stars flex justify-center gap-1 text-amber-300">
                
            
         {Array.from({length:full}).map((_, id) => 
        (
            <IoStarSharp key={`full-${id}`} />

            
        ))}
        {halffull && <IoStarHalfSharp />}
        </div>
         
      </div>

         

      </div>
       </motion.div>
         )})}
          
    </motion.div>
     <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:100}} viewport={{once:true,amount:0.7}} transition={{duration:0.4}}  className="flex justify-center items-center">
      <Link to={'/products'}>
      <button className='bg-secondr text-white py-3 px-5 hover:bg-hoverr transition-all duration-300 my-13 rounded-md w-45'>View All Products</button>
      </Link>
                
            </motion.div>
     </div>
)}

export default Product3
