import "./Products.css";
import Header from "../header/Header";

const Products = (props) => {




  return (
    <div>
      {/* <Header /> */}
      <div>
        <img src={props.image} alt="image" />
        <div>
          {props.productName}
          {props.productPrice}
        </div>
        <div>
          <button onClick={{}}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
