import axios from "axios";
import React, { Component } from "react";

const Home = (props) => {
  if (props.user) {
    return <h2>Hi {props.user.username}</h2>;
  }
};
export default Home;
