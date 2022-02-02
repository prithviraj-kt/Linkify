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
    <div className="login-background">
      <div className="Login">
      {/* <Navbar /> */}

      <div className="container">
        <div className="login-heading">
          <center>Login</center>
        </div>
        <div className="login-sub-heading">
          <center>Please enter your login and password</center>
        </div>
        <div className="login-login-id">
          <center>
            <input
            name="username"
            onChange={(e) => {
              handleChange(e);
            }}
            type="text"
            placeholder="Enter Login id"/>
          </center>
        </div>
      
        <div className="login-login-pwd">
          <center >
            <input
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Enter Password"
              type="text"
            />
          </center>
        </div>     
        <button className="login-btn"
          onClick={() => {
            loginUser();
          }}>
            Submit
        </button>
       
      </div>
      </div>

    </div>
   
  );
}

export default Login;
