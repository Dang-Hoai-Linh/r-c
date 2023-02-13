import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Item from "./components/Item";
import { Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddRemoveInputField from "./add-remove-input-field/AddRemoveInputField";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/item" exact element={<Item />} />
        <Route path="/build" exact element={<AddRemoveInputField />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
