import { BrowserRouter, Route, Switch } from "react-router-dom";
import products from "./containers/products";
import { Provider } from "react-redux";
import Layout from "./containers/layout";
import home from "./containers/home";
import signup from "./containers/signup";
import login from "./containers/login";
import productDetail from "./containers/productDetail";
import account from "./containers/account";
import listProduct from "./containers/listProduct";
import store from "./redux/store";
import "./sass/main.scss";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/public_products" component={products}></Route>
            <Route exact path="/my_products" component={products}></Route>
            <Route
              exact
              path="/public_products/:id"
              component={productDetail}
            ></Route>
            <Route exact path="/" component={home}></Route>
            <Route exact path="/signup" component={signup}></Route>
            <Route exact path="/login" component={login}></Route>
            <Route exact path="/account" component={account}></Route>
            <Route exact path="/list_product" component={listProduct}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
