import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import clothes from './../../assets/imgs/clothes.png'
import furniture from './../../assets/imgs/furniture.png'
import phone from './../../assets/imgs/phone.png'
import { useNavigate } from 'react-router-dom'


const Slider = () => {


const slides = [
  { img: clothes , title: 'New Arrivals', sub: 'Discover the latest collections',color:'bg-[#2A2B2D]',button:'Shop Now',category:'mens-shirts' },
  { img: phone, title: 'Flash Sale', sub: 'Up to 50% discount',color:'bg-black' ,button:'Order Now',category:'smartphones' },
  { img: furniture, title: 'Home Living', sub: 'Furnish your home with elegance',color:'bg-[#1D4F6F]',button:'Explore Now',category:'furniture' },
];
const navigate = useNavigate()
  return (
    <div>
        <Swiper       
        modules={[Autoplay, Pagination]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  
  loop
  className="w-3/4 mt-10 h-125 shadow-2xl rounded-lg"
>

        {slides.map((item,i) =>
        (
            <SwiperSlide key={i} >
                <div className={`slide-${i} flex justify-around flex-col md:flex-row items-center shadow-2xl px-5 w-full h-full pb-4 ${item.color}`}>

                     <div className=" flex flex-col gap-5 md:gap-9 justify-center order-2 text-white ">
                        <h2 className='md:text-5xl text-2xl font-bold uppercase '>{item.title}</h2>
                        <p className='md:text-md text-sm tracking-widest capitalize'>{item.sub}</p>
                        <button onClick={()=>navigate(`/products/category/${item.category}`)} className='bg-white py-2 px-3 text-black w-38 rounded-lg'>{item.button}</button>
                    </div>

                    <img src={item.img} alt={item.title}className='md:w-80 md:h-80 w-70 h-60 object-contain order-1 '/>
                </div>
                

            </SwiperSlide>
        ))}
            
        </Swiper>
      
    </div>
  )
}

export default Slider
