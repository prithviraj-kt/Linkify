import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function EditUser() {
  const { username } = useParams();
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getUserData();
  }, []);

  const handleClick = async () => {
    if (
      !user.username ||
      !user.name ||
      !user.email ||
      !user.phone ||
      !user.college ||
      !user.password ||
      !user.confirm_password
    ) {
      alert("Please enter all the fields");
    } else {
      // if(existUser.username){
      //     alert("User already exists...")
      // }else{

      if (user.password === user.confirm_password) {
        await axios
          .put(`http://localhost:5000/update/${username}`, user)
          .then(() => {
            alert("User updated successfully");
          })
          .catch((e) => {
            alert("Internal error occured.... Please try again later");
          });
        navigate(`/profile/${username}/${username}`);
      }
    }
  };
  async function getUserData() {
    const userData = await axios.get(
      `http://localhost:5000/getUser/${username}`
    );
    setUser(userData.data);
    console.log(userData.data);
  }

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
          <h1>Edit {user.username}</h1>
          <input
            onChange={(e) => changeInput(e)}
            name="name"
            placeholder="name"
            value={user.name}
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <input
            onChange={(e) => changeInput(e)}
            name="email"
            placeholder="email"
            value={user.email}
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <input
            onChange={(e) => changeInput(e)}
            name="phone"
            placeholder="phone"
            value={user.phone}
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <input
            onChange={(e) => changeInput(e)}
            name="password"
            placeholder="password"
            value={user.password}
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <input
            onChange={(e) => changeInput(e)}
            name="confirm_password"
            placeholder="confirm password"
            value={user.confirm_password}
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <button onClick={(e) => handleClick(e)}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
