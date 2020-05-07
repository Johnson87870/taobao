import React, { Component } from "react";
import "./BackTop.scss";
export default class BackTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBackTop: props.showBackTop,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ showBackTop: nextProps.showBackTop });
  }

  backTopCom = () => {
    return (
      <div className="back-top">
        <a href="#"></a>
        <span className="back-icon"></span>
        <div className="back-text">顶部</div>
      </div>
    );
  };

  render() {
    return <>{this.state.showBackTop ? this.backTopCom() : null}</>;
  }
}
