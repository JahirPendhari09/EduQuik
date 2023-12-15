import React from "react"
import "./courses.css"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const CoursesCard = () => {
  const navigate=useNavigate()
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    axios.get('https://fancy-flannel-nightgown-fly.cyclic.app/course').then((response) =>{
      // console.log(response.data.courses)
      setPosts(response.data.courses)
      });
  }, []);
  //  console.log(posts)
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {posts?.map((val,i) => (
            <div key={i} className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.image} alt='name' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.title}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <p>{val.description}</p>
                          </div>
                          <div className='para'>
                            
                          </div>
                        </div>
                        <br/>
                        <span>{val.category}</span>
                      </>
                    }
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                 Rs {val.price}
                </h3>
              </div>
              <button className='outline-btn' onClick={()=>{navigate(`/enroll/${val._id}`)}}>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
