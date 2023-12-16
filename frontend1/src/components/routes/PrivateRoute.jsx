import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import MyContext from '../Context/authContext'
const PrivateRoute = ({children}) => {
    const { status, setstatus } = useContext(MyContext);
    const isAuth = localStorage.getItem("isAuth");
    
  return (
    status || isAuth ? children:<Navigate to={'/login'}/>
  )
}

export default PrivateRoute