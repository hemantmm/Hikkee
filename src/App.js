import React from "react";
import { useState } from "react";
import Cart from "./Component/Cart";
// import Login from "./Login/Login";


const App=()=>{

  const [currentForm,setCurrentForm]=useState('login')

  return(
    <>
    {/* {currentForm==="login"}?<Login> <Cart /> </Login> */}
    {/* <Login /> */}
    <Cart />
    </>
  )
}

export default App