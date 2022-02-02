import React, { useState, useEffect } from "react";
import "./profile.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function Profile() {
  const { username } = useParams();
  const {visitedUser} = useParams()
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getUserData();
  }, []);
  
  async function getUserData() {
    const userData = await axios.get(
      `http://localhost:5000/getUser/${visitedUser}`
    );
    setUser(userData.data);
    // const authUser = await localStorage.getItem("username");
    // if(userData.data.username!=authUser){
    //         navigate("/login")
    // }
  }

  const handleClick = () => {
    navigate(`/edit/${username}`);
  };
  return (
    <div className="Profile">
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <h1>Welcome {user.username}</h1>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.position}</p>
          <p>{user.college}</p>
          {visitedUser==username? 
          <button className="btn btn-primary" onClick={() => handleClick()}>Edit</button>: ""}
          
        </div>
      </div>
    </div>
  );
}
export default Profile;
