import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const home = () => {
  return (
    <div>
      <Helmet>
        <title>Personal Store -</title>
      </Helmet>
      <h1>Welcome to my personal store</h1>
      <Link to="/public_products">View Products</Link>
    </div>
  );
};

export default home;
