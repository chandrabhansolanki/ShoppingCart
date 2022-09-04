import React, { useState } from "react";
import "./ProductsItems.css";
import Header from "../header/Header";



const ProductsItems = (props) => {
  const {productItems,addToCartHandler} = props
  
 
  // const addToCartHandler = (id) => {
    // console.log(id);
    // const cartData = productItems.find((data) =>
    //   data.id === id ? {...data, qty: 1 } : null
    // );
    // console.log(cartData);

    // setCart(cartData);


  // };
  

  return (
    <div>
      {/* <Header /> */}
      <div className="productContainer">
        {productItems.map((data) => (
          <div key={data.id} className="items">
            <div className="image">
              <img src={data.imageLink} alt={{}} />
            </div>
            <div className="title">
              <h3 className="product-name"> {data.productName}</h3>
              <div className="product-price"> Rs {data.productPrice}</div>
            </div>
            <div className="add-to-cart" >
              <button  onClick={() => addToCartHandler(data)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductsItems;
