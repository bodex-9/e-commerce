import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useAllProducts } from '../utils/allproducts';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase';
import { Clear as clearCart } from '../services/rtk/slices/cart';
import { Clear as clearWish } from '../services/rtk/slices/wish';
const Navbar = ({user}) => {

         const navigate = useNavigate();
         

    const handleLogout = async()=>
    {
            try{
                await signOut(auth);
                    dispatch(clearCart())
                    dispatch(clearWish())
                 toast.success("Logged Out",{style: {
                                background:'black',
                                color:'white'
                            }
                            })
                            navigate('/login')
            }
            catch(error)
            {
                   const cleanMessage = (error.message.replace("Firebase:","").trim());
                            toast.error(cleanMessage,{style:{
                                background:'black',
                                color:'white'
                            }})
            }
    }

    const dispatch = useDispatch();
    const cartitems = useSelector(state => state.cart)
    const wishitems = useSelector(state => state.wish)
    const [menu, setmenu] = useState(false);
    const [search,setSearch] = useState("");
   
    const allproduct = useAllProducts();
    const filteredProduct = allproduct.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));

    const handleAccount = ()=>
    {
        if(!user)
        {
            return navigate('/login')
        }
    }

  return (
    <div className=' sticky top-0 z-100 bg-white pt-5 w-full pb-5 px-3 md:px-16 flex justify-between relative  items-center shadow-md'>
        
        
            <div className="logo">
                <h3 className='text-md md:text-2xl font-bold tracking-wide font-eater'>Exclusive</h3>
            </div>
            
                <ul className=' hidden xl:flex items-center gap-6 xl:gap-10 md:text-base font-medium'>
                    <Link to='/'><li className='relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:bg-black/45 after:h-0.5 hover:after:w-full transition-all hover:after:duration-300 hover:cursor-pointer'>Home</li></Link>
                    <Link to='/contact'><li className='relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:bg-black/45 after:h-0.5 hover:after:w-full transition-all hover:after:duration-300 hover:cursor-pointer'>Contact</li></Link>
                   <Link to='/about'><li className='relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:bg-black/45 after:h-0.5 hover:after:w-full transition-all hover:after:duration-300 hover:cursor-pointer'>About</li></Link>
                    {user !== undefined && !user && (<Link to={'/signup'}><li className='relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:bg-black/45 after:h-0.5 hover:after:w-full transition-all hover:after:duration-300 hover:cursor-pointer'>Sign Up</li></Link>)}
                    {user && <Link to={'/account'}><li className='relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:bg-black/45 after:h-0.5 hover:after:w-full transition-all hover:after:duration-300 hover:cursor-pointer'>My Account</li></Link>}
                </ul>
            

        <div className="flex  gap-7  items-center">
            <div className="relative flex items-center  ">
            <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}} className='w-28 sm:w-48 md:w-64 focus:outline-0 bg-[#F5F5F5] py-2 px-1 sm:px-6 rounded-lg  sm:placeholder:text-sm' placeholder='Search...'/>
            <IoSearchOutline className='absolute right-1 sm:right-3 bottom-3 text-lg sm:text-xl md:text-2xl  cursor-pointer' />
            {
                search.length > 0 && (
                     <div className=" absolute top-full left-0 max-h-65  overflow-y-auto w-full bg-[#F5F5F5] text-black/90 rounded-lg shadow-md  ">
                        {
                            filteredProduct.map((product) => (
                                <div onClick={()=> {
                                    navigate(`/details/${product.id}`)
                                    setSearch("")
                                }
                            }
                                
                                key={product.id} className=" cursor-pointer flex justify-center items-center mb-2 gap-3">
                                    <img src={product.thumbnail} className='w-13 h-13 object-contain'/>
                                    <span>{product.title.slice(0,9)}</span>

                                </div>
                            ))}
                        </div>
                )
            }

            </div>
            
          

            <div className="icons gap-2 sm:gap-5 flex items-center">
                <div className="relative">
                    <span className={`absolute -top-3 bg-secondr text-white rounded-full w-5 h-5 flex text-xs justify-center items-center -right-1  ${wishitems.length > 0 ? 'opacity-100': 'opacity-0'}`}>{wishitems.length}</span>
                      <Link to={'/wishlist'}><IoIosHeartEmpty className='text-2xl sm:text-3xl'/></Link>

                </div>
                <div className="relative">
                    <span className={`absolute -top-3 bg-secondr text-white rounded-full w-5 h-5 flex text-xs items-center justify-center -right-1 opacity-0 ${cartitems.length > 0 ? 'opacity-100': 'opacity-0'} `}>{cartitems.length}</span>
                    <Link to={'/cart'}>
                    <IoCartOutline   className='text-2xl sm:text-3xl'/>
                    </Link>
                </div>
                <div onClick={handleAccount} className="group relative">
                <LuUserRound className='text-2xl sm:text-3xl cursor-pointer ' />
                {user && ( <div className=" absolute top-full right-0 z-50 mt-2 bg-white/80 backdrop-blur-md shadow-xl opacity-0 group-hover:opacity-100 w-40 flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300">  
                <span onClick={handleLogout} className='text-black/80 cursor-pointer hover:text-secondr transition-all duration-300'>Log Out</span>
                </div>)}
               
                </div>
                  <div className="menu text-3xl sm:hidden">
                <IoMdMenu onClick={() => setmenu(!menu)} />

            </div>
                
                
            </div>
               {
            <div className={`absolute w-full top-15 left-0 bg-white text-black pt-3 mt-2  flex items-center py-5 flex-col  transition-all duration-300 shadow-2xl xl:hidden border border-black ${menu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-10'}`}>
                <ul className='flex flex-col gap-2' >
                    <Link to='/'><li onClick={() => setmenu(false)} className='text-lg font-semibold  text-black transition-all duration-300'>Home</li></Link>
                    <Link to={'/contact'}><li onClick={() => setmenu(false)} className='text-lg font-semibold  text-black transition-all duration-300'>Contact</li></Link>
                    <Link to='/about'><li onClick={() => setmenu(false)} className='text-lg font-semibold  text-black transition-all duration-300'>About</li></Link>
                    {user !== undefined && !user && (<Link to={'/signup'}><li onClick={() => setmenu(false)} className='text-lg font-semibold  text-black transition-all duration-300'>Sign Up</li></Link>)}
                    {user &&(<Link to={'/account'}><li onClick={() => setmenu(false)} className='text-lg font-semibold  text-black transition-all duration-300'>My Account</li></Link>)}
                </ul>


            </div>
        }
         

        </div>
     
        
      
    </div>
  )
}

export default Navbar;
