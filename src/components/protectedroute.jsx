import React from 'react'
import { Navigate } from 'react-router-dom'
import auth from '../firebase/firebase'
const   ProtectedRoute = ({children,user}) => {

    if(user === undefined)
    {
        return <div className='flex justify-center items-center my-17'><h2  className='text-xl text-gray-500 tracking-wider animate-pulse text-center p-10'>Loading...</h2></div>
    }
    
    else if(!user)
    {
        return <Navigate to={'/login'}/>
    }

    return children

}

export default  ProtectedRoute
