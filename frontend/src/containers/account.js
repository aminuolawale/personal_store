import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { getAccount } from "../redux/auth/actions";
import Products from "../containers/products";
import { fetchMyProducts } from "../redux/myProducts/actions";
import Product from "../components/Product";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState();
  const accountInfo = useSelector((state) => state.auth.account);
  console.log(account);
  useEffect(() => {
    dispatch(getAccount());
  }, []);
  useEffect(() => {
    setAccount(accountInfo);
  }, [accountInfo]);
  return account ? (
    <div className="account">
      <div className="account__main">
        <div className="account__main__info">
          <div className="account__main__info__image">
            <img src={account.profile_picture}></img>
          </div>
          <p className="account__main__info__text--main">{account.username}</p>
          <p className="account__main__info__text">{account.email}</p>
          <p className="account__main__info__text">
            Location: {account.address.country}
          </p>
          <p className="account__main__info__text">
            Joined: <Moment format="MMM Y">{account.date_joined}</Moment>
          </p>
        </div>
        <div className="account__main__actions">
          <Link to="/list_product">
            <Button text="UPLOAD PRODUCT" size="mid"></Button>
          </Link>
        </div>
      </div>
      <div className="account__extra">
        <div className="account__extra__heading">
          <p className="account__extra__heading__title">My Products</p>
          <Link to="/my_products">View all ></Link>
        </div>
        <Products
          limit={5}
          fetchProducts={fetchMyProducts}
          view="private"
        ></Products>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Account;
