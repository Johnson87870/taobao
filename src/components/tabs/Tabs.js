import React, { Component } from "react";
import { Route, Link, Redirect, NavLink } from "react-router-dom";
import "./Tabs.scss";

export default class Tabs extends Component {
  constructor(props) {
    super(props);
  }

  gotoNav = (route) => {
    console.log(Link);
    // this.props.route.push({
    //   path: route,
    // });
  };

  render() {
    return (
      <div className="TabsBar">
        <div className="Tab">
          {/* onClick={this.gotoNav.bind(this, "/")} */}
          <div className="tabsItems">
            <NavLink to="/home" activeClassName="home-active">
              <span className="icon home"></span>
              <span className="text"> 首页 </span>
            </NavLink>
          </div>
          <div className="tabsItems">
            {/* onClick={this.gotoNav.bind(this, "/card")} */}
            <NavLink to="/cart" activeClassName="shopcar-active">
              <span className="icon shopcar"> </span>
              <span className="text"> 购物车 </span>
            </NavLink>
          </div>
          <div className="tabsItems">
            {/* onClick={this.gotoNav.bind(this, "/orderList")} */}
            <NavLink to="/orderList" activeClassName="order-active">
              <span className="icon order"> </span>
              <span className="text"> 订单列表 </span>
            </NavLink>
          </div>
          <div className="tabsItems">
            {/* onClick={this.gotoNav.bind(this, "")} */}
            <NavLink to="/mind" activeClassName="mind-active">
              <span className="icon mind"> </span>
              <span className="text"> 我的淘宝 </span>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
