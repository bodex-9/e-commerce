import React from 'react'
import { Navigate } from 'react-router-dom'
import auth from '../firebase/firebase'
const GuestRoute = ({children,user}) => {

    if (user === undefined)
    {
        return <div className='flex justify-center items-center min-h-screen'><h2  className='text-xl text-gray-500 tracking-wider animate-pulse text-center p-10'>Loading...</h2></div>
    }

     if(user)
    {
        return <Navigate to={'/'} replace/>
    }
    
  return children
}

export default GuestRoute
