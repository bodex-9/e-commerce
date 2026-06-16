import React, { useEffect, useState, useRef } from 'react'
import Col from '../../components/col'
import { motion } from 'framer-motion';
const Timer = () => {

   const targetTimeRef = useRef(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);

  const getRemainingTime = () => {
    const now = new Date().getTime();
    const difference = targetTimeRef.current - now;


    if (difference <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    const days = Math.floor(difference / (24 * 60 * 60 * 1000));
    const hours = Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((difference % (60 * 1000)) / 1000);


    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const [time, setTime] = useState(getRemainingTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getRemainingTime());
    }, 1000);

   
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:100}} viewport={{once:true,amount:0.7}} transition={{duration:0.4}} className='flex flex-col gap-5 pt-30 px-10'>
        <div className="flex items-center gap-4">
        <Col/>
        <span className='font-semibold text-secondr'>Today’s</span>
        </div>

        <div className="flex gap-15">
            <h3 className='text-3xl font-semibold'>Flash Sale</h3>
            <div className="flex md:gap-5 gap-3">

                <div className="flex flex-col gap-2">
                    <span className='text-sm'>Days</span>
                    <div className="flex gap-1">
                        <h3 className='font-bold text-xl'>{time.days}</h3>
                        <div className="dots text-secondr text-xl">:</div>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-2">
                    <span className='text-sm'>Hours</span>
                    <div className="flex gap-1">
                        <h3 className='font-bold text-xl'>{time.hours}</h3>
                        <div className="dots text-secondr text-xl">:</div>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-2">
                    <span className='text-sm'>Minutes</span>
                    <div className="flex gap-1">
                        <h3 className='font-bold text-xl'>{time.minutes}</h3>
                        <div className="dots text-secondr text-xl">:</div>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-2">
                    <span className='text-sm'>Seconds</span>
                    <div className="flex gap-1">
                        <h3 className='font-bold text-xl'>{time.seconds}</h3>
                        
                    </div>
                    
                </div>
                
           

            </div>

        </div>

      
    </motion.div>
  )
}

export default Timer
