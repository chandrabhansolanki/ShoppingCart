import React from "react";

import Header from "../header/Header";
import ProductsItems from "./ProductsItems";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Rout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsItems />} />
      </Routes>
    </div>
  );
};

export default Rout;
