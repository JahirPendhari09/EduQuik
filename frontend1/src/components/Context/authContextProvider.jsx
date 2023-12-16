// MyContextProvider.js
import React, { useState, useContext } from 'react';
import MyContext from './authContext';

const MyContextProvider = ({ children }) => {
  const [status, setstatus] = useState(false);
  const [cartArray, setCartArray] = useState([]);
  const [user, setUser] = useState({})
  const isAuth = localStorage.getItem("isAuth")||false


  const addNewCart = (item) => {

    let update = cartArray.filter((val, i) => val.title == item.title);
    if (update.length > 0) {
      alert("Already Added")
    } else {
      let newCartArra = [...cartArray];
      const newCart = {
        id:item._id,
        image: item.image,
        title: item.title,
        discription: item.description,
        price: item.price,
        category: item.category,
        quantity: 1
      }

      newCartArra.push(newCart);
      setCartArray(newCartArra)
      // console.log(cartArray)
      alert("This Course is Added to Cart")
    }
  }

 
  console.log(cartArray,"cartArr")

  return (
    <MyContext.Provider value={{status, setstatus, user, setUser,cartArray, setCartArray ,addNewCart}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
