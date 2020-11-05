import React from "react";
import Products from "../components/Products";
import { fetchMyProducts } from "../redux/myProducts/actions";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const MyProducts = () => {
  return (
    <div className="myProducts">
      <div className="myProducts__actions">
        <Link to="/upload_product">
          <Button text="UPLOAD PRODUCT" size="mid"></Button>
        </Link>
      </div>
      <Products fetchProducts={fetchMyProducts} view="private"></Products>
    </div>
  );
};

export default MyProducts;
