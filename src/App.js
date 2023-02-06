import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class App extends Component {
  state = {};
  componentDidMount = () => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Access-Control-Allow-Origin": "http://localhost:8000/api/",
      },
    };

    axios.get("user", config).then(
      (res) => {
        this.setUser(res.data);
      },
      (err) => {
        console.log(err);                                                                                                                                                                                         
      }
    );
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav user={this.state.user} setUser={this.setUser} />
          <Routes>
            <Route
              path="/"
              exact
              element={<Home/>}
            />
            {/* <Route
              path="/"
              exact
              element={() => <Home user={this.state.user.username} />}
            /> */}
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
