import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
  const [state, setState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let tk = document.getElementsByName("taikhoan")[0].value;
    let mk = document.getElementsByName("matkhau")[0].value;
    const data = {
      taikhoan: tk,
      matkhau: mk,
    };
    const headers = {
      "Access-Control-Allow-Origin": "http://localhost:8000/",
    };

    axios
      .post("login", data, {
        headers: headers,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        setState({
          loggedIn: true,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (state.loggedIn) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Đăng nhập</h3>
        <input type="text" name="taikhoan" placeholder="Tài khoản" />
        <input type="password" name="matkhau" placeholder="Mật khẩu" />
        <button>OK</button>
      </form>
    </div>
  );
};

export default Login;
