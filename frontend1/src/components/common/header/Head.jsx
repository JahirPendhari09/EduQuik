import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import MyContext from "../../Context/authContext"
const Head = () => {
  //const [status,setstatus]=useState(true)
  const navigate=useNavigate()
  const { status, setstatus,user } = useContext(MyContext);
  const isAuth = localStorage.getItem("isAuth")||false
  // console.log(isAuth,status)
  const [render , setRender ]=useState(false)
  useEffect(()=>{

  },[render])
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>EDUQUIK</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>
           
          <div>
            { isAuth || status? <button id="login" onClick={(e)=>{
              e.preventDefault()
              setstatus(false)
              setRender(!render)
              localStorage.removeItem("isAuth");
              
            }}>Logout</button>:<button id="login" onClick={()=>{navigate('/login')}}>LOGIN</button>}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
