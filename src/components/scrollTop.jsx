import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
const ScrollTop = () => {

    const [showbtn, setShowbtn] = useState(false);

    useEffect(() =>
    {
            const handleScroll = () =>

                {
                    if (window.scrollY > 300)
                    {
                        setShowbtn(true);
                    }
                    else{
                        setShowbtn(false)
                    }
                };

                window.addEventListener("scroll", handleScroll);

                return ()=>
                {
                    window.removeEventListener("scroll",handleScroll);
                }
    },[])
            function goTop()
            {
                window.scrollTo({
                    top:0,
                    behavior:'smooth'
                })
            }

  return (
    <div>
        {showbtn && 
         <div className="bg-secondr p-2 w-8 h-8 flex justify-center items-center z-50 rounded-full bottom-4 right-3 fixed cursor-pointer hover:scale-105 transition-all duration-300  text-white">
                <FaArrowCircleUp onClick={() =>goTop()} className='text-2xl  ' />
      </div>
        }
     
    </div>
  )
}

export default ScrollTop
