import { BrowserRouter, Route, Switch } from "react-router-dom";
import products from "./containers/products";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/public_products" component={products}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
