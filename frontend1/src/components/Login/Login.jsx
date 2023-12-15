import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyContext from '../Context/authContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { status, setstatus } = useContext(MyContext);
 const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://fancy-flannel-nightgown-fly.cyclic.app/users/login',formData)
    .then((res)=>{
        // console.log(res)
        if(res.data.msg =="Wrong credentials")
        {
          alert('Password is Incorrect')
        }else if(res.data.msg=="User Does not exist"){
          alert("User Crediential are Invalid")
        }else{
          setstatus(true)
          alert("Login Sucessfull, Welcome to Educquik")
          navigate('/')
        }
    })
    .catch((err)=>{
        console.log(err)
        alert('Wrong Credentials')
    })
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p> Do not have accont <Link to="/signup" style={{color:"red"}}>Register</Link></p>
      </div>
    </div>
  );
};

