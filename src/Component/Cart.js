import React, { createContext,useEffect,useReducer } from "react";
import "./cart.css";
// import { Scrollbars } from 'react-custom-scrollbars-2';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

// import '../Component/cart.css'

import cartLogo from "../images/cartLogo.jpg";
import logo from "../images/searchLog.jpg";
// import Items from "./Items";
import { useState } from "react";
import product from "./product";
import ContextCart from "./ContextCart";
import {reducer} from './reducer'
// import  product  from "./product";

export const CartContext = createContext();

const initialState={
    item:product,
    totalAmount:0,
    totalItems:0,
}

const Cart = () => {
//   const [item, setItem] = useState(product);

const [state, dispatch] = useReducer(reducer, initialState)

const removeItem=(id)=>{
    return dispatch({
        type:"REMOVE_ITEM",
        payload:id,
    })
}

const clearCart=()=>{
    return dispatch({
        type:"CLEAR_CART",
        // payload:id,
    })
}

const increment=(id)=>{
    return dispatch({
        type:"INCREMENT",
        payload:id,
    })
}

const decrement=(id)=>{
    return dispatch({
        type:"DECREMENT",
        payload:id,
    })
}

useEffect(()=>{
    dispatch({type:"GET_TOTAL"})
    console.log("HI");
},[state.item])


  return (
    // <>
      <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
        <ContextCart />
      </CartContext.Provider>
    //  </>
  );
};

export default Cart;
