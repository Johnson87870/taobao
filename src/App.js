import React from "react";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Mind from "./pages/mind/Mind";
import OrderList from "./pages/orderList/OrderList";
import ShopingCart from "./pages/shopingCart/ShopingCart";
import Tabs from "./components/tabs/Tabs";
import { Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Redirect path="/" to="/home" />
        <Route exact path="/home" component={Home}></Route>
        <Route path="/mind" component={Mind}></Route>
        <Route path="/orderList" component={OrderList}></Route>
        <Route path="/cart" component={ShopingCart}></Route>
        <Route path="/login" component={Login}></Route>
      </div>

      <Tabs className="TabsBar" />
    </div>
  );
}

export default App;
