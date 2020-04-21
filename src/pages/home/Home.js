import React, { PureComponent } from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
export default class Home extends PureComponent {
  render() {
    return (
      <>
        {/* <div className="home-header">SearchHeader</div> */}
        <SearchHeader />
        <div className="home-container">Home</div>
      </>
    );
  }
}
