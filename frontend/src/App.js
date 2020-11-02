import { BrowserRouter, Route, Switch } from "react-router-dom";
import products from "./containers/products";
import { Provider } from "react-redux";
import Layout from "./containers/layout";
import home from "./containers/home";
import productDetail from "./containers/productDetail";
import store from "./redux/store";
import "./sass/main.scss";
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/public_products" component={products}></Route>
            <Route
              exact
              path="/public_products/:id"
              component={productDetail}
            ></Route>
            <Route exact path="/" component={home}></Route>
          </Switch>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
}

export default App;
