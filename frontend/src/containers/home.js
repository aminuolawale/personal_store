import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <h1>Welcome to my personal store</h1>
      <Link to="/public_products">View Products</Link>
    </div>
  );
};

export default home;
