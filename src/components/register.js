import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      taikhoan: this.taikhoan,
      matkhau: this.matkhau,
      checkmatkhau: this.checkmatkhau,
    };
    axios
      .post("register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Đăng ký</h3>
          <input
            type="text"
            onChange={(e) => (this.taikhoan = e.target.value)}
            placeholder="Tài khoản"
          />
          <input
            type="password"
            onChange={(e) => (this.matkhau = e.target.value)}
            placeholder="Mật khẩu"
          />
          <input
            type="password"
            onChange={(e) => (this.checkmatkhau = e.target.value)}
            placeholder="Xác nhận mật khẩu"
          />
          <button>OK</button>
        </form>
      </div>
    );
  }
}
