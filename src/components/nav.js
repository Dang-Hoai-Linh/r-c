import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="App">
      {localStorage.getItem("token") ? (
        <div className="App">
          <Link to={"/"}>Home</Link>
          <button onClick={handleLogout}>Đăng xuất</button>
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
};

export default Nav;
