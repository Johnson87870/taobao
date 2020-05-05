import React, { PureComponent } from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Banner from "../../components/Banner/Banner";
import NavBar from '../../components/NavBar/NavBar';
import GoodList from '../../components/GoodList/GoodList';
export default class Home extends PureComponent {
  render() {
    return (
      <>
        {/* <div className="home-header">SearchHeader</div> */} <SearchHeader />
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
