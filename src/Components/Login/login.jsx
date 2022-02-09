import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Nav";
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
      navigate(`/home/${user.username}`);
    } else {
      alert("Login failed");
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="login-background">
      <Navbar />
      <div className="Login">
        <div className="container loginContainer">
          <div className="row loginHeading">
            <div className="login-heading">
              <center>
                <h1>Login</h1>
              </center>
            </div>
            <div className="login-sub-heading">
              <center>Enter your right credentials</center>
            </div>
          </div>
          <div className="loginInput">
            <input
              name="username"
              onChange={(e) => {
                handleChange(e);
              }}
              type="text"
              placeholder="Enter Login id"
            />
          </div>

          <div className="loginInput">
            <input
              type="password"
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Enter Password"
            />
          </div>
          <div className="row login-btn">
            <button
              onClick={() => {
                loginUser();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
