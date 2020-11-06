import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";

//this should probably be moved into components
const Products = ({ limit, fetchProducts, view }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchProducts()), [dispatch, fetchProducts]);
  let productsData = useSelector((state) =>
    view === "public"
      ? state.publicProducts.publicProducts
      : state.products.products
  );

  useEffect(() => {
    console.log("this is the product data", productsData);
    productsData = productsData
      ? limit
        ? productsData.splice(0, limit)
        : productsData
      : [];
    setProducts(productsData);
  }, [productsData]);
  const productsDisplay = products.map((product) => (
    <Product key={product.id} product={product}></Product>
  ));
  return <div className="productsGrid">{productsDisplay}</div>;
};

export default Products;
