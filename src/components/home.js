import axios from "axios";
import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Home = () => {
  const name = JSON.parse(localStorage.getItem("user"));
  return (
    <Layout>
      <h2>Hi {name?.username}</h2>
      <Link to={"/build"}>Xây dựng cấu hình</Link>
      <br />
      <Link to={"/item"}>Trang bị</Link>
      <Link to={"/build"}>ểtrt</Link>
    </Layout>
  );
};
export default Home;
