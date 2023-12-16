import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../Context/authContext';
const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');

  const {  user} = useContext(MyContext);
  console.log(user)
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`https://frightened-bracelet-bee.cyclic.app/users/updateuser/${user._id}`,{
     active_orders:user.cart
    })
    .then((res)=>{
      // console.log(res)
      alert("Payment Successfuly Done Redirecting to Home Page")
      navigate('/')
      setCardNumber('');
      setExpiry('');
      setCvc('');
      setName('');
    })
    .catch((err)=>{
      console.log(err)
    })
  
  };

  return (
    <div style={{width:"30%",display:"flex",margin:"auto",
        flexDirection:"column",padding:"20px",marginTop:"50px",borderRadius:"20px",
        marginBottom:"50px",boxSizing:"border-box", border:"1px solid black"}}
      >
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number
          <input
            type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Expiry Date
          <input
            type="number"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </label>
        <label>
          CVC
          <input
            type="number"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            required

          />
        </label>
        <label>
          Cardholder Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button type="submit" style={{width:"30%",backgroundColor:"#008ae6", marginLeft:"30%"}}>Pay Now</button>
      </form>
    </div>
  )
}

export default Payment