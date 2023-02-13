import React, { useEffect } from "react";
import Nav from "./nav";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
