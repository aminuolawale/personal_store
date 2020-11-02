import React from "react";
import { Link } from "react-router-dom";
import UserThumb from "./UserThumb";

const Product = ({ product }) => {
  return (
    <Link to={`/public_products/${product.id}`}>
      <div className="productCard">
        <div className="productCard__top">
          <img src={product.main_image} alt={product.name}></img>
        </div>
        <div className="productCard__main">
          <UserThumb
            profile_picture={product.owner.profile_picture}
            username={product.owner.username}
          ></UserThumb>
          <p className="productCard__main__name">{product.name}</p>
          <p className="productCard__main__text">{product.description}</p>
          <p className="productCard__main__price">N{product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
