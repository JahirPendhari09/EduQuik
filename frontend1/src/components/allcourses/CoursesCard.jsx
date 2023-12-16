import React, { useContext } from "react"
import "./courses.css"
import { useState, useEffect } from "react"
import axios from "axios"
import MyContext from "../Context/authContext"

const CoursesCard = () => {
  const [posts, setPosts] = useState([]);
  const { status, setstatus, cartArray, addNewCart } = useContext(MyContext);

  useEffect(() => {
    let ans = axios.get('https://frightened-bracelet-bee.cyclic.app/course').then((response) => {
      // console.log(response.data.courses)
      setPosts(response.data.courses)
    });
    clearInterval=ans
  }, []);

  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {posts?.map((val, i) => (
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
                        <br />
                        <span>{val.category}</span>
                      </>
                    }
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                ₹ {val.price}
                </h3>
              </div>
              <button className='outline-btn' onClick={(e) => addNewCart(val)}>ADD TO CART !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
