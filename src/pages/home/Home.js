import React, { PureComponent } from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import GoodList from "../../components/GoodList/GoodList";
import BackTop from "../../components/BackTop/BackTop";
import "./Home.scss";
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showBackTop: false,
    };
  }

  componentDidMount() {
    // 挂载滚动监听
    window.addEventListener("scroll", this.bindScroll);
  }
  componentWillUnmount() {
    // 移除滚动监听
    window.removeEventListener("scroll", this.bindScroll);
  }

  bindScroll = (event) => {
    const scrollTop =
      (event.srcElement ? event.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (event.srcElement ? event.srcElement.body.scrollTop : 0);
    this.setState({
      showBackTop: scrollTop >= 50 ? true : false,
    });
  };

  render() {
    return (
      <>
        <SearchHeader />
        <div className="home-container">
          <div className="banner-container">
            <Banner />
            <NavBar />
            <GoodList />
            <BackTop showBackTop={this.state.showBackTop} />
          </div>
        </div>
      </>
    );
  }
}
