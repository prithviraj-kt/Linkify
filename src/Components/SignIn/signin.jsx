import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import './signin.css';
import man from './man.jpeg';
import { Formik } from 'formik';
import { useParams, useNavigate } from "react-router-dom";

function Signin() {
  const [user, setUser] = useState("");
 
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      if (
        !user.username ||
        !user.name ||
        !user.email ||
        !user.phone ||
        !user.position||
        !user.college ||
        !user.password ||
        !user.confirm_password
      ) {
        alert("Please enter all the fields");
      } else {
        // if(existUser.username){
        //     alert("User already exists...")
        // }else{

        if (user.password === user.confirm_password && ( user.position=="STUDENT"||user.position=="ALUMINI")) {
          await axios
            .post(`http://localhost:5000/addUser`, user)
            .then(() => {
              alert("User Created successfully");
              navigate(`/login`);
            })
            .catch((e) => {
              alert(e);
            });
        } else {
          alert("Incorrect credentials");
        }
        // }
      }
    } catch (error) {
        console.log(error)
    }
  };

  const changeInput = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="signin-first-border">
      <div className="signin-border">
          <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="signin-image"><img src={man}/></div >
            </div>
            <div className="col-md-6">
              <div className="signin-container">
                <input
                  onChange={(e) => changeInput(e)}
                  name="username"
                  placeholder="First name"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <input 
                  onChange={(e) => changeInput(e)}
                  name="name"
                  placeholder="Last Name"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <input
                  onChange={(e) => changeInput(e)}
                  name="email"
                  placeholder="Email id"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <input
                  onChange={(e) => changeInput(e)}
                  name="position"
                  placeholder="Position STUDENT/ALUMINI"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <input
                  onChange={(e) => changeInput(e)}
                  name="phone"
                  placeholder="Phone Number"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <input
                  onChange={(e) => changeInput(e)}
                  name="college"
                  placeholder="College"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <input
                  onChange={(e) => changeInput(e)}
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <input
                  onChange={(e) => changeInput(e)}
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  id="my-input"
                  aria-describedby="my-helper-text"
                />
                <button className="signin-submit-button"  onClick={(e) => handleClick(e)}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Signin;
