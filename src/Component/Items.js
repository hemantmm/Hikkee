import React,{useContext} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

// import '../Component/cart.css'

import cartLogo from "../images/cartLogo.jpg";
import logo from "../images/searchLog.jpg";
// import logo1 from '../images/AppleLogo.jpg'
// import logo2 from '../images/AppleLogo.jpg'

import  {CartContext}  from './Cart';



const Items = ({id ,category,img,price,title,quantity}) => {


const {removeItem, increment, decrement} = useContext(CartContext)

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src='../images/AppleLogo.jpg' alt="no data" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{category}</p>
        </div>

        <div className="add-minus-quantity">
          {/* <i class="fa-solid fa-minus minus"></i> */}
          <FontAwesomeIcon icon={faMinus} className="minus"onClick={()=>decrement(id)} />

          <input type="text" placeholder={quantity} />
          {/* <i className="fa-solid fa-plus add"></i> */}
          {/* <FontAwesomeIcon icon="fa-regular fa-plus" className="add" /> */}
          <FontAwesomeIcon icon={faPlus} className="plus" onClick={()=>increment(id)} />
        </div>

        <div className="price">
          <h3>${price}</h3>
        </div>

        <div className="remove-item">
          <FontAwesomeIcon icon={faTrash} className="remove" onClick={()=>removeItem(id)} />
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
