import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import MyContext from '../Context/authContext'
const PrivateRoute = ({children}) => {
    const { status, setstatus } = useContext(MyContext);
  return (
    status ? children:<Navigate to={'/login'}/>
  )
}

export default PrivateRoute