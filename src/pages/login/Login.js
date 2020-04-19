import React, { PureComponent } from "react";
import "./login.scss";

export default class Login extends PureComponent {
  render() {
    return (
      <div className="login">
        <div className="logo-box">
          <span className="login-logo"></span>
        </div>

        <form className="login-form">
          <div className="user-account">
            <input type="text" placeholder="手机号/邮箱\会员名" />
            <span className="icon"></span>
          </div>
          <div className="user-password">
            <input type="password" placeholder="请输入登陆密码" />
            <span className="icon"></span>
          </div>
          <div className="code-registered">
            <span>短信验证登录</span>
            <span>免费注册</span>
          </div>
          <div className="login-btn">
            <button type="submit" className="fm-button">
              登录
            </button>
          </div>
        </form>
      </div>
    );
  }
}
