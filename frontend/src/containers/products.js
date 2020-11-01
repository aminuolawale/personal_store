import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicProducts } from "../redux/products/actions";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPublicProducts()), []);
  const publicProducts = useSelector((state) => state.publicProducts);
  console.log("these are the public products", publicProducts);
  return <div>This is the products page-{publicProducts.length}</div>;
};

export default Products;
