import React from 'react'
import { MdRadioButtonUnchecked } from "react-icons/md";
import visa from '../assets/imgs/visa.png';
import master from '../assets/imgs/master.png';
import kash from '../assets/imgs/kash.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Clear } from '../services/rtk/slices/cart';
import { useDispatch } from 'react-redux';
const Checkout = () => {
    const dispatch = useDispatch();
 const cartitems = useSelector(state => state.cart)
    const totalPrice  = cartitems.reduce((acc,item) => 
{
        acc += Math.ceil(item.price) * item.quantity;
        return acc;
},0)
    const [active ,setactive] = useState(false);
    const [isactive ,setisactive] = useState(false);

        const [name,setName] = useState("");
        const [email,setEmail] = useState("");
        const [phone,setPhone] = useState("");
        const [street,setStreet] = useState("");
        const [town,setTown] = useState("");
        const [company,setCompany] = useState("");
        const [apartment,setApartment] = useState("");
            const handleform = async(e)=>
            {
                e.preventDefault();
                            if (
                !name.trim() ||
                !email.trim() ||
                !phone.trim() ||
                !street.trim() ||
                !town.trim()
            ) {
                Swal.fire({
                    title: "Complete all fields",
                    icon: "warning",
                    iconColor:'#DB4444',
                    confirmButtonColor: "#DB4444"
                });

                return;
            }
                            if (cartitems,length === 0  ) {
                Swal.fire({
                    title: "there is no produtcts To Order",
                    icon: "warning",
                    iconColor:'#DB4444',
                    confirmButtonColor: "#DB4444"
                });

                return;
            }
        
                await Swal.fire({
                title: "Your Order Done!",
                icon: "success",
                draggable: true,
                confirmButtonColor:'#DB4444',
                iconColor: '#DB4444'
                });
                dispatch(Clear())
                    setPhone("")
                    setEmail("")
                    setName("")
                    setStreet("")
                    setTown("")
                    setCompany("")
                    setApartment("")
            }
    
  return (
    <div className='px-13 py-12'>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="details  flex flex-col gap-4 md:gap-6 w-full max-w-90 ">
                <h2 className=' capitalize tex-xl md:text-3xl tracking-wider font-semibold'>billing details</h2>
                 <div className="flex flex-col gap-1">
                    <label className=' capitalize text-[15px] text-gray-400'>first name</label>
                    <input value={name} onChange={e => setName(e.target.value)} className='bg-bage px-3 outline-0 py-2 rounded-md' type="text" />
                     </div>
                 <div className="flex flex-col gap-1">
                    <label className=' capitalize text-[15px] text-gray-400'>company name</label>
                    <input value={company} onChange={e => setCompany(e.target.value)}   className='bg-bage px-3 outline-0 py-2 rounded-md' type="text" />
                     </div>
                 <div className="flex flex-col gap-1">
                    <label className=' capitalize text-[15px] text-gray-400'>street name</label>
                    <input value={street} onChange={e => setStreet(e.target.value)}  className='bg-bage px-3 outline-0 py-2 rounded-md' type="text" />
                     </div>
                 <div className="flex flex-col gap-1">
                    <label className=' capitalize text-[15px] text-gray-400'>apartment floor,etc.(optional)</label>
                    <input value={apartment} onChange={e => setApartment(e.target.value)}  className='bg-bage px-3 outline-0 py-2 rounded-md' type="text" />
                     </div>
                 <div className="flex flex-col gap-1">
                    <label className=' capitalize text-[15px] text-gray-400'>town/city</label>
                    <input value={town} onChange={e => setTown(e.target.value)}  className='bg-bage px-3 outline-0 py-2 rounded-md' type="text" />
                     </div>
                 <div className="flex flex-col gap-1">
                    <label className=' capitalize text-[15px] text-gray-400'>phone number</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)}  className='bg-bage px-3 outline-0 py-2 rounded-md' type="tel" />
                     </div>
                 <div className="flex flex-col gap-1">
                    <label className=' capitalize text-[15px] text-gray-400'>email adress</label>
                    <input value={email} onChange={e => setEmail(e.target.value)}  className='bg-bage px-3 outline-0 py-2 rounded-md' type="email" />
                     </div>
                     <div className="flex gap-3">
                        <input type="checkbox" className='w-4 h-4 text-secondr accent-secondr'/>
                        <span className=' capitalize text-sm  tracking-tighter '>save the information for faster check-out next time</span>
                     </div>
                 

            </div>
            
               <div className="pay flex flex-col w-full max-w-100 gap-6 mt-5 md:mt-15">
                {cartitems.map((item) => 
                (
                        <div key={item.id} className="grid grid-cols-1 gap-3 ">
                                <div className="flex justify-between  items-center w-full">
                                    <div className="flex gap-3 items-center">
                                        <img src={item.thumbnail} className='object-contain w-13'/>
                                        <span className='text-sm'>{item.title.slice(0,8)}</span>
                                    </div>
                                    <span className=''>{Math.ceil(item.price)}$</span>
                                </div>
                          </div>
                ))}
                            
                <div className="flex justify-between border-b border-gray-500 pb-2">
                    <span className=' capitalize '>subtotal:</span>
                    <span>{totalPrice}$</span>
                </div>
                <div className="flex justify-between border-b border-gray-500 pb-2">
                    <span className=' capitalize '>shipping:</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between border-b border-gray-500 pb-2">
                    <span className=' capitalize '>total:</span>
                    <span>{totalPrice}$</span>
                </div>
                <div className={`flex justify-between items-center ${isactive? 'opacity-0': 'opacity-100'}`}>
                    <div className="flex gap-2 items-center ">
                       <div onClick={()=> setactive(!active)} className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center cursor-pointer">
                            {active && 
                            (
                                <div className="w-3 h-3 rounded-full bg-black"></div>
                            )}
                       </div>
                        <span>Bank</span>
                    </div>
                    <div className="icons flex gap-2">
                        <img src={kash}  className='object-contain'/>
                        <img src={visa}  className='object-contain'/>
                        <img src={master}className='object-contain'/>

                    </div>

                </div>
                      <div className={`flex gap-2 items-center ${active? 'opacity-0': 'opacity-100'} `}>
                       <div onClick={()=> setisactive(!isactive)} className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center cursor-pointer">
                            {isactive && 
                            (
                                <div className="w-3 h-3 rounded-full bg-black"></div>
                            )}
                       </div>
                        <span className=' capitalize'>cash on delivery</span>
                    </div>
                       <div className="flex flex-col   md:flex-row gap-4">
                        <input type='text' placeholder='Coupon Code' className='py-2 px-5  rounded-md border placeholder:text-sm border-black/70 outline-0'/>
                        <button className='bg-secondr hover:bg-hoverr transition-all duration-300 text-white py-2 px-3 text-sm w-30  rounded-md'>Apply Coupon</button>
                    </div>
                    <div className="flex">
                             <button onClick={handleform} type='submit' className='bg-secondr hover:bg-hoverr transition-all duration-300 text-white py-3 px-5 md:w-40 text-sm w-30 capitalize  rounded-md'>place order</button>
                    </div>
                   
               

            </div>

        </div>
      
    </div>
  )
}

export default Checkout
