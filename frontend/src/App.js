import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import products from "./containers/products";
import myProducts from "./containers/myProducts";
import Layout from "./containers/layout";
import PrivateRoute from "./components/PrivateRoute";
import home from "./containers/home";
import signup from "./containers/signup";
import login from "./containers/login";
import productDetail from "./containers/productDetail";
import account from "./containers/account";
import listProduct from "./containers/listProduct";
import { useDispatch } from "react-redux";
import { getAccount } from "./redux/auth/actions";
import "./sass/main.scss";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/signup" component={signup}></Route>
          <Route exact path="/login" component={login}></Route>
          <Route exact path="/public_products" component={products}></Route>
          <PrivateRoute
            exact
            path="/account"
            component={account}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/my_products"
            component={myProducts}
          ></PrivateRoute>
          <Route
            exact
            path="/public_products/:id"
            component={productDetail}
          ></Route>
          <Route exact path="/" component={home}></Route>
          <PrivateRoute
            exact
            path="/list_product"
            component={listProduct}
          ></PrivateRoute>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
