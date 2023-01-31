import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="App">
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/login"}>Đăng nhập</Link>
        <br />
        <Link to={"/register"}>Đăng ký</Link>
      </div>
    );
  }
}
