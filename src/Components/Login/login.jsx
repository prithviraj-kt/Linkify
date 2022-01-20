import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [existUser, setExistUser] = useState("");
  useEffect(() => {
    getUserData();
  }, [user]);
  async function getUserData() {
    const userData = await axios.get(
      `http://localhost:5000/getUser/${user.username}`
    );
    setExistUser(userData.data);
  }
  const loginUser = () => {
    if (existUser.password === user.password) {
      alert("Login successful");
      localStorage.setItem("username", user.username);
      navigate(`/home/${user.username}`)
    } else {
      alert("Login failed");
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="Login">
      <Navbar />
      <div className="container">
          <h1>Login</h1>
        <input
          name="username"
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
        />
        <input
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
        />
        <button
          onClick={() => {
            loginUser();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
