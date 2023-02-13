import React, { Component, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeCheckPassword = (e) => {
    setCheckPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      taikhoan: username,
      matkhau: password,
      checkmatkhau: checkpassword,
    };
    axios
      .post("register", data)
      .then((res) => {
        console.log(res);
        toast.success("Đăng ký thành công!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="App">
        <Link to={"/login"}>Đăng nhập</Link>
        <br />
        <Link to={"/register"}>Đăng ký</Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Đăng ký</h3>
          <input
            type="text"
            onChange={handleChangeUsername}
            placeholder="Tài khoản"
          />
          <input
            type="password"
            onChange={handleChangePassword}
            placeholder="Mật khẩu"
          />
          <input
            type="password"
            onChange={handleChangeCheckPassword}
            placeholder="Xác nhận mật khẩu"
          />
          <button>OK</button>
        </form>
      </div>
    </>
  );
};

export default Register;
