import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicProducts } from "../redux/products/actions";
import Product from "../components/Product";

const Products = ({ limit, fetchProducts, view = "public" }) => {
  const dispatch = useDispatch();
  fetchProducts = fetchProducts || fetchPublicProducts;
  useEffect(() => dispatch(fetchProducts()), []);
  let products = useSelector((state) =>
    view === "public"
      ? state.publicProducts.publicProducts
      : state.products.products
  );
  console.log(products);
  products = limit ? products.splice(0, limit) : products;
  const productsDisplay = products.map((product) => (
    <Product key={product.id} product={product}></Product>
  ));
  console.log(productsDisplay);
  return <div className="productsGrid">{productsDisplay}</div>;
};

export default Products;
