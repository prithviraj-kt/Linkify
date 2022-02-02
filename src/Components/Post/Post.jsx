import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Post.css";
import Navbar from "../Navbar/Navbar";
function Post() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    auth();
  }, []);

  const auth = async () => {
    const userData = await axios.get(
      `http://localhost:5000/getUser/${username}`
    );
    const authUser = await localStorage.getItem("username");
    await axios
      .get(`http://localhost:5000/getpost/${username}`)
      .then((users) => {
        console.log(users.data);
        setPost(users.data);
      })
      .catch((err) => {
        alert("User does not exist");
      });

    if (authUser !== userData.data.username) {
      navigate("/login");
    }
  };

  const handleClick = (value) => {
    navigate(`/profile/${username}/${value.username}`)
  }

  const postDisplay = (value) => {
    return (
      <div className="postPostDisplay">
        <p>{value.title}</p>
        <p>{value.description}</p>
        <button onClick={() => handleClick(value)}>visit @{value.username}</button>
      </div>
    );
  };

  return (
    <div className="container">
      <Navbar/>
      <div className="postTitle">
        <h1>I am a post page</h1>
      </div>
      <div className="postPost">{post.map((value) => postDisplay(value))}</div>
    </div>
  );
}

export default Post;
