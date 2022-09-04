import logo from "./logo.svg";
import "./App.css";
import Header from "./componets/header/Header";
import React, { useState } from "react";
import ProductsItems from "./componets/ProductsItems/ProductsItems";
import Rout from "./componets/ProductsItems/Rout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./componets/header/Cart";

const products = [
  {
    id: 1,
    productName: "Adidas TiShirt",
    productPrice: 399,
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
  },
  {
    id: 2,
    productName: "Rebook Tishirt",
    productPrice: 599,
    imageLink:
      "https://content.shop4reebok.com/static/Product-DU5012/MEN_Training_T-SHIRT_SHORT_SLEEVE_DU5012_1.jpg.plp",
  },
  {
    id: 3,
    productName: "Puma Tishirt",
    productPrice: 299,
    imageLink:
      "https://content.shop4reebok.com/static/Product-GJ0852/reebok_GJ0852_1.jpg.plp",
  },
  {
    id: 4,
    productName: "Adidas TiShirt",
    productPrice: 399,
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
  },
  {
    id: 5,
    productName: "Rebook Tishirt",
    productPrice: 599,
    imageLink:
      "https://content.shop4reebok.com/static/Product-DU5012/MEN_Training_T-SHIRT_SHORT_SLEEVE_DU5012_1.jpg.plp",
  },
  {
    id: 6,
    productName: "Puma Tishirt",
    productPrice: 299,
    imageLink:
      "https://content.shop4reebok.com/static/Product-GJ0852/reebok_GJ0852_1.jpg.plp",
  },
];

function App() {
  const [productItems, setProductsItems] = useState(products);
  const [cartItems, setCartItems] = useState([]);
  const [itemsInCart, setItemsInCart]= useState(0)

  const addToCartHandler = (products) => {
    // console.log([...cartItems,{...products,quantity: 1}],'llllloo')
    setCartItems([...cartItems,{...products,quantity: 1}])
    setItemsInCart(itemsInCart +1)
    
  };


 
  


  return (
    <div className="App">
      <Header itemsInCart={itemsInCart}/>
      <Routes>
        <Route
          path="/"
          element={
            <ProductsItems
              productItems={productItems}
              setCartItems={setCartItems}
              cartItems={cartItems}
              addToCartHandler={addToCartHandler}
            />
          }
        />
        <Route path="/cart" element={<Cart cartItems={cartItems}  />} />
      </Routes>
    </div>
  );
}

export default App;
