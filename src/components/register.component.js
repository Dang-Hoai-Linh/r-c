import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div>
        <form>
          <h3>Đăng ký</h3>
          <input type="text" placeholder="Tài khoản" />
          <input type="password" placeholder="Mật khẩu" />
          <input type="password" placeholder="Xác nhận mật khẩu" />
          <button>OK</button>
        </form>
      </div>
    );
  }
}
