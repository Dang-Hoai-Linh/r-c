import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      taikhoan: username,
      matkhau: password,
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
        console.log(res.data);
        const config = {
          headers: {
            Authorization: "Bearer " + res.data.access_token,
            "Access-Control-Allow-Origin": "http://localhost:8000/api/",
          },
        };
        toast.success("Đăng nhập thành công!");

        axios.get("user", config).then(
          (res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/");
          },
          (err) => {
            console.log(err);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="App">
        <Link to={"/login"}>Đăng nhập</Link>
        <br />
        <Link to={"/register"}>Đăng ký</Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Đăng nhập</h3>
          <input
            onChange={handleChangeUsername}
            type="text"
            name="taikhoan"
            placeholder="Tài khoản"
          />
          <input
            onChange={handleChangePassword}
            type="password"
            name="matkhau"
            placeholder="Mật khẩu"
          />
          <button>OK</button>
        </form>
      </div>
    </>
  );
};

export default Login;
