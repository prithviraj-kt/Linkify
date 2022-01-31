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
  const [post, setPost] = useState([])
  useEffect(() => {
    getUserData();
  }, []);
  
  async function getUserData() {
    const userData = await axios.get(
      `http://localhost:5000/getUser/${visitedUser}`
    );
    setUser(userData.data);
    const post = await axios.get(`http://localhost:5000/get/${visitedUser}`)
    setPost(post.data)
    console.log(post.data)
  }

  const handleClick = () => {
    navigate(`/edit/${username}`);
  };

  const displayPost =(e) =>{
    return <div className="postPostDisplay">
    <p>{e.title}</p>
    <p>{e.description}</p>
  </div>
  }
  return (
    <div className="Profile">
      <Navbar />
      <div className="container">
        <div className="row">
          <h1>Welcome @{user.username}</h1>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.position}</p>
          <p>{user.college}</p>
          {visitedUser==username? <button onClick={() => handleClick()}>Edit</button>: ""}
          
        </div>
        <div className="row">
          <h1>Your posts...</h1>
        </div>
        <div className="row postPost">
          {post.map((e) => displayPost(e))}
        </div>
      </div>
    </div>
  );
}
export default Profile;
