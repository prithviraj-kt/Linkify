import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Nav";
import axios from "axios";
import "./signup.css";
import man from "./man.jpeg";
import { Formik } from "formik";
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
        !user.position ||
        !user.college ||
        !user.password ||
        !user.confirm_password
      ) {
        alert("Please enter all the fields");
      } else {
        // if(existUser.username){
        //     alert("User already exists...")
        // }else{

        if (
          user.password === user.confirm_password &&
          (user.position == "STUDENT" || user.position == "ALUMINI")
        ) {
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
      console.log(error);
    }
  };

  const goToSignin = () => {
    navigate(`/login`);
  };

  const changeInput = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row signin">
        <div className="row signIn-sign">
          <div className="row heyBuddy">
            <h1>Hey Buddy! Let's Create Your Account</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 signin-image">
              <img src={man} />
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6 signin-container">
                  <div className="signin-input">
                    <input
                      onChange={(e) => changeInput(e)}
                      maxlength="10"
                      autocomplete="off"
                      name="username"
                      placeholder="Username"
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </div>
                  <div className="signin-input">
                    <input
                      onChange={(e) => changeInput(e)}
                      autocomplete="off"
                      name="name"
                      placeholder="Name"
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </div>
                  <div className="signin-input">
                    <input
                      onChange={(e) => changeInput(e)}
                      autocomplete="off"
                      name="email"
                      placeholder="Email id"
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </div>
                  <div className="signin-input">
                    {/* <input
                      onChange={(e) => changeInput(e)}
                      name="position"
                      placeholder="STUDENT/ALUMINI"
                      id="my-input"
                      aria-describedby="my-helper-text"
                    /> */}
                    <select onChange={(e) => changeInput(e)} name="position">
                      <option value="ALUMINI">Alumini</option>
                      <option value="STUDENT">Student</option>
                    </select>
                  </div>
                </div>

                <div className="col-sm-6 signin-container">
                  <div className="signin-input">
                    <input
                      onChange={(e) => changeInput(e)}
                      autocomplete="off"
                      name="phone"
                      type="number"
                      maxlength="10"
                      placeholder="Phone Number"
                      id="my-input"
                      aria-describedby="my-helper-text"
                      
                    />
                  </div>
                  <div className="signin-input">
                    {/* <input
                      onChange={(e) => changeInput(e)}
                      name="college"
                      placeholder="College"
                      id="my-input"
                      aria-describedby="my-helper-text"
                    /> */}
                    <select onChange={(e) => changeInput(e)} name="college">
                      <option value="BVB College">KLE TU College</option>
                      <option value="KLE IT College">KLE IT College</option>
                      <option value="SDM College">SDM College</option>
                      <option value="Jain College">Jain College</option>
                    </select>
                  </div>
                  <div className="signin-input">
                    <input
                      onChange={(e) => changeInput(e)}
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </div>
                  <div className="signin-input">
                    <input
                      onChange={(e) => changeInput(e)}
                      autocomplete="off"
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </div>
                </div>
                <div className="row signin-btn">
                  <div className="row signin-already">
                    <p>
                      Already a user? please{" "}
                      <button onClick={goToSignin}>Login</button>
                    </p>
                  </div>

                  <button
                    className="signin-submit-button"
                    onClick={(e) => handleClick(e)}
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          
        </div> */}
      </div>
    </div>
  );
}

export default Signin;
