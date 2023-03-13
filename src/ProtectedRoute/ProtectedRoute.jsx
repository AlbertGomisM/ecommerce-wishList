import React from 'react'
import { UserContext } from './../context/userContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
    const {loginState} = useContext(UserContext)
    
    if(loginState==false){
        return <Navigate to="/login" replace={true}/>
    } else{
        return children
    }

}
