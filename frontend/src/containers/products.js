import React from "react";
import { fetchPublicProducts } from "../redux/products/actions";
import Products from "../components/Products";

//this should probably be moved into components
const products = () => {
  return (
    <Products fetchProducts={fetchPublicProducts} view={"public"}></Products>
  );
};

export default products;
