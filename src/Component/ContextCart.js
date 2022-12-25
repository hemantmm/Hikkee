import React,{useContext, useState} from 'react'
import cartLogo from "../Images/cartLogo.jpg";
import userLogo from "../Images/userLogo.jpg"
import Items from "./Items";
import { Scrollbars } from 'react-custom-scrollbars-2';
// import product from "./product";
import  {CartContext}  from './Cart';
import { useEffect } from 'react';

// import 
// import "./cart.css";
// import './cart.css'

// import { Validator } from 'react';
import validator from 'validator';
import './ContextCart.css'



const ContextCart = () => {

  const [show,setShow]=useState(false)

const [toggle,setToggle]=React.useState(0.5)

const [email,setEmail]=useState('')

const [pass,setPass]=useState('')
const [emails,setEmails]=useState('')

const [emailError,setEmailError]=useState('')

const handle = () => {
  localStorage.setItem('Name', emails);
  localStorage.setItem('Password', pass);
  setEmails('')
  setPass('')
};



const handleSubmit=(e)=>{
e.preventDefault()
  console.log(email);
}


const [popupStyle,showPopup]=useState('hide')

const popup=()=>{
  showPopup("login-popup")
  setTimeout(() => {
    showPopup("hide")
  }, 3000);
}


useEffect(()=>{
  setShow(true);
},[])


const validateEmail=(e)=>{
  let email=e.target.value

  if(validator.isEmail(email))
  {
    setEmailError('Valid email')
  }
  else
  {
    setEmailError('Enter valid email')
  }
}
  

    const {item,clearCart,totalItems,totalAmount} = useContext(CartContext)

    if(item.length === 0)
    {
      return (
        <>
        <header>
        <div className="continue-shopping">
          <img src="./images/HikeLogo.jpg" alt="logo" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src={cartLogo} alt="" />
          <p>0</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          You have <span className="total-items-count"> 0 </span> items in
          shopping cart
        </p>
        </section>
        </>
      )
    }

  return (
    <>
 <header>
        <div className="continue-shopping">
          <img src="./images/HikeLogo.jpg" alt="logo" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className='userLogin'>
          <img src={userLogo} alt="" onClick={()=>setShow(true)} className='user-logo' />
          {/* <h2>Eloo</h2> */}
        </div>


        <div className="cart-icon">
          <img src={cartLogo} alt=""  className="blur" />
          <p>{totalItems}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          You have <span className="total-items-count"> {totalItems} </span> items in
          shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
          <Scrollbars>
            {
                item.map((curItem)=>{
                    return  <Items key={curItem.id} {...curItem} />
                })
            }
            
            </Scrollbars> 
          </div>
        </div>


<div className="card-total">
    <h3>Card total: <span>${totalAmount}</span></h3>
    <button>CheckOut</button>
    <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
</div>

      </section>



 {show ?
<div className="page" id='pages'>
<div className="cover">
  <h1>Login</h1>
  <div className='form-email' onChange={(e)=>validateEmail(e)}>
  <input className='email' value={emails} type="email" name="email" placeholder='you@gmail.com' onChange={(e)=>setEmails(e.target.value)}  />
  </div>
  <input className='password'value={pass} type="password" placeholder='******' name="" onChange={(e)=>setPass(e.target.value)} />

  <div className="login-btn" onClick={handle} >
    <button onClick={popup} className='logins-btn'>
    Login
    </button>
    </div>

  <p className="text">Or login using</p>

<div className="alt-login">
  <div className="facebook"></div>
  <div className="google"></div>
</div>

<div className={popupStyle}>
<h3 className='logs'>Login Failed</h3>
<p className='user'>{emailError}</p>
</div>

<div className="close">
  <button onClick={()=>setShow(false)}>Close</button>
</div>
</div>
</div>
:null} 



<div className="carts" >

<button onClick={clearCart}>CheckOut</button>
</div>


    </>
  )
}

export default ContextCart