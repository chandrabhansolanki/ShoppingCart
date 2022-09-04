import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cartItems } = props;

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  const incQty = (id) => {
    const itemQuantity = cart.map((item) => {
      return id === item.id ? { ...item, quantity: item.quantity + 1 } : item;
    });
    setCart(itemQuantity);
    // console.log(itemQuantity);
  };

  const decQty = (id) => {
    const decQuantity = cart.map((item) => {
      return id === item.id ? { ...item, quantity: item.quantity - 1 } : item;
    });
    setCart(decQuantity);
  };

  console.log(cartItems, "cartItems");
  return (
    <div>
      {cartItems.length === 0 && <p>No items are added...</p>}

      <div className="cartContainer">
        {cart.map((item) => (
          <div key={item.id} className="items">
            <div>
              <img src={item.imageLink} alt={item.productName} />
            </div>

            <div className="quantity">
              <button
                onClick={() => {
                  decQty(item.id);
                }}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  incQty(item.id);
                }}
              >
                +
              </button>
            </div>
            <div>
              <p>{item.productPrice * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div>
          Total Rs.{" "}
          {cart
            .map((item) => item.productPrice * item.quantity)
            .reduce((total, current) => total + current, 0)}
        </div>
      )}
    </div>
  );
};

export default Cart;
