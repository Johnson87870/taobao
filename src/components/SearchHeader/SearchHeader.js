import React, { Component } from "react";
import "./SearchHeader.scss";
export default class SearchHeader extends Component {
  render() {
    return (
      <div className="search-header">
        <span className="logo"></span>
        <span className="search">
          <input type="text" placeholder="寻找宝贝店铺" />
        </span>
      </div>
    );
  }
}
