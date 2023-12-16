
import axios from "axios";
import SingleCart from "./SingleCart"
import { useContext, useEffect, useState } from "react"

import MyContext from "../Context/authContext";
import { Navigate, useNavigate } from "react-router-dom";


const Cart = () => {

    const navigate=useNavigate()

    const [totalPrice, setTotalPrice] = useState(0);
    const {cartArray,setCartArray} = useContext(MyContext);

    useEffect(() => {
       let total = 0;
       cartArray.forEach(element => {
         total += element.price * element.quantity
       });
       setTotalPrice(total)
    }, [cartArray]);

    const deleteCart = (id) => {
       
        let update = cartArray.filter(item => item.id !== id);
        setCartArray(update);
    
    }

    return <>
        <div style={{width: "100%",display: "flex",justifyContent: "space-between",
            gap: "50px",fontSize:"18px"}}
        >
            <div style={{  width: "100%",display: "flex",flexDirection: "column",gap: "20px",padding: "20px"}}>
                {
                    cartArray?.map((item, i) => {
                        return <SingleCart key={i} i={i} {...item} deleteCart={deleteCart} />
                    })
                }
                {cartArray?.length==0 && <h3 style={{marginLeft:"30%",color:"red"}}>Cart is Empty</h3>}
            </div>
            <div style={{ width: "70%",padding: "20px"}}>
                <div style={{width:"100%",margin: "auto",
                    border: "1px solid black", borderRadius:"10px", backgroundColor:"white",padding: "20px"}}
                >
                    <h1 style={{ fontSize: "30px",marginBottom:"20px"}}>Cart Summary</h1>
                    <hr />
                    <div style={{ display: "flex", justifyContent: "space-around", padding: "10px" }}>
                        <p>SubTotal :</p>
                        <p>₹ {totalPrice}.00</p>
                    </div>
                    <hr />
        
                    <div style={{ display: "flex", justifyContent: "space-around", padding: "10px" }}>
                        <p>Grand Total :</p>
                        <p>₹ {totalPrice}.00 <span style={{ color: "green" }}> only</span></p>
                    </div>
                    <hr />
                    <button style={{width:"200px", marginLeft:"25%"}} onClick={(e)=>navigate("/payment")}>BUY NOW</button>
                </div>
            </div>
        </div>
    </>
}

export { Cart }
