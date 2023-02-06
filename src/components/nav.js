import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };
  render() {
    return (
      <div className="App">
        <Link to={"/"}>Home</Link>
        {localStorage.getItem("token") ? (
          <div className="App">
            <Link to={"/login"} onClick={this.handleLogout}>
              Đăng xuất
            </Link>
          </div>
        ) : (
          <div className="App">
            <Link to={"/login"}>Đăng nhập</Link>
            <br />
            <Link to={"/register"}>Đăng ký</Link>
          </div>
        )}
      </div>
    );
  }
}
