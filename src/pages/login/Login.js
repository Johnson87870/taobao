import React from "react";
import "./login.scss";
import { Cookies } from "react-cookie";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAccount: "",
      userPassword: "",
    };
  }

  userAccountChange = (e) => {
    this.setState({ userAccount: e.target.value });
  };

  userPasswordChange = (e) => {
    this.setState({ userPassword: e.target.value });
  };

  login = (e) => {
    e.preventDefault();
    if (this.state.userAccount == "" || this.state.userPassword == "") {
      alert("存在未输入项");
      return;
    }
    
  };

  setCookie = () => {};

  render() {
    const { userAccount, userPassword } = this.state;
    return (
      <div className="login">
        <div className="logo-box">
          <span className="login-logo"></span>
        </div>

        <form action="" className="login-form">
          <div className="user-account">
            <input
              type="text"
              placeholder="手机号/邮箱\会员名"
              value={userAccount}
              onChange={this.userAccountChange}
            />
            <span className="icon"></span>
          </div>
          <div className="user-password">
            <input
              type="password"
              placeholder="请输入登陆密码"
              value={userPassword}
              onChange={this.userPasswordChange}
            />
            <span className="icon"></span>
          </div>
          <div className="code-registered">
            <span>短信验证登录</span>
            <span>免费注册</span>
          </div>
          <div className="login-btn">
            <button type="submit" className="fm-button" onClick={this.login}>
              登录
            </button>
          </div>
        </form>
      </div>
    );
  }
}
