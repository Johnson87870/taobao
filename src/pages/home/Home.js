import React, { PureComponent } from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import GoodList from "../../components/GoodList/GoodList";
import "./Home.scss";
export default class Home extends PureComponent {
  render() {
    return (
      <>
        <SearchHeader />
        <div className="home-container">
          <div className="banner-container">
            <Banner />
            <NavBar />
            <GoodList />
          </div>
        </div>
      </>
    );
  }
}
