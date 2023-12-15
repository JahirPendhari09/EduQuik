import React from "react"
import {Routes,Route} from "react-router-dom"
import About from "../about/About"
import CourseHome from "../allcourses/CourseHome"
import Team from "../team/Team"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Contact from "../contact/Contact"

import Home from "../home/Home"
import { Enroll } from "../Enroll/Enroll"
import { Login } from "../Login/Login"
import { Signup } from "../Signup/Signup"
import PrivateRoute from "./PrivateRoute"

const AllRoutes=()=>{
    return(
        <div>
         <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/courses' element={<PrivateRoute><CourseHome/></PrivateRoute>} />
          <Route  path='/team' element={<Team/>} />
          <Route  path='/pricing' element={<PrivateRoute><Pricing/></PrivateRoute>} />
          <Route  path='/journal' element={<Blog/>} />
          <Route  path='/contact'element={<Contact/>} />
          <Route path="/enroll/:id" element={<Enroll/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </div>
    )
}
export default AllRoutes