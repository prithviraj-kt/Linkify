import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function Signin() {
  const [user, setUser] = useState("");
  //   const [existUser, setExistUser] = useState("");
  const navigate = useNavigate();
  //   useEffect(() => {
  //     getUserData();
  //   }, [existUser]);

  //   async function getUserData() {
  //     const userData = await axios
  //       .get(`http://localhost:5000/getUser/${user.username}`)
  //       .then((value) => {
  //         setExistUser(value.data);
  //         console.log(value.data)
  //       })
  //       .catch((err) => {
  //         console.log("Checking the user");
  //       });
  //   }
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
    <div>
      <div>
        <Navbar />
        <div className="container">
          {/* <h1>hello</h1> */}
          <h1>Create {user.username}</h1>
          <input
            onChange={(e) => changeInput(e)}
            name="username"
            placeholder="User name"
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <input
            onChange={(e) => changeInput(e)}
            name="name"
            placeholder="name"
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <input
            onChange={(e) => changeInput(e)}
            name="email"
            placeholder="email"
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <input
            onChange={(e) => changeInput(e)}
            name="position"
            placeholder="position"
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <input
            onChange={(e) => changeInput(e)}
            name="phone"
            placeholder="phone number"
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
            placeholder="password"
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <input
            onChange={(e) => changeInput(e)}
            type="password"
            name="confirm_password"
            placeholder="confirm Password"
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <button onClick={(e) => handleClick(e)}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
