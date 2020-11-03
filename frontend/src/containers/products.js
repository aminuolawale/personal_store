import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicProducts } from "../redux/products/actions";
import Product from "../components/Product";

const Products = ({ limit, fetchProducts, view = "public" }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  fetchProducts = fetchProducts || fetchPublicProducts;
  useEffect(() => dispatch(fetchProducts()), []);
  let productsData = useSelector((state) =>
    view === "public"
      ? state.publicProducts.publicProducts
      : state.products.products
  );

  useEffect(() => {
    productsData = limit ? productsData.splice(0, limit) : productsData;
    setProducts(productsData);
  }, [productsData]);
  const productsDisplay = products.map((product) => (
    <Product key={product.id} product={product}></Product>
  ));
  return <div className="productsGrid">{productsDisplay}</div>;
};

export default Products;
