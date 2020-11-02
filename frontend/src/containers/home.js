import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../components/Button";

const home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Personal Store -</title>
      </Helmet>
      <div className="home__hero">
        <div className="home__hero__content">
          <h1 className="home__hero__content__text">
            Welcome to my personal store
          </h1>
          <Link to="/public_products">
            <Button text="View Products" size="mid"></Button>
          </Link>
        </div>
        <img
          className="home__hero__bg"
          src="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/WBC_7095.jpg?format=2500w"
        ></img>
      </div>
    </div>
  );
};

export default home;
