import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicProducts } from "../redux/products/actions";
import Product from "../components/Product";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPublicProducts()), []);
  const publicProducts = useSelector((state) => state.publicProducts);
  const productsDisplay = publicProducts.map((product) => (
    <Product key={product.id} product={product}></Product>
  ));
  console.log(productsDisplay);
  return <div className="productsGrid">{productsDisplay}</div>;
};

export default Products;
