import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Products, Navbar, Cart, Chekout } from "./components";
import ProductsContextProvider from "./components/contex/commerce-contex";

function App() {
  return (
    <Router>
      <ProductsContextProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </ProductsContextProvider>
    </Router>
  );
}

export default App;
