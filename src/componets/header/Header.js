import React from "react";
import "./Header.css";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { itemsInCart } = props;
  

  return (
    <div className="header">
      <div>
        <Link to="/" style={{textDecoration:"none"}}>
        <h2>E commerce</h2>
        </Link>
      </div>
      <div className="cart">
        <Link to="/cart" style={{textDecoration:"none"}}>
          <h3>Cart </h3>
        <p>{itemsInCart}</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
