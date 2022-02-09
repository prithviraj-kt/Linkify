import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Nav";
import "./Post.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function Post() {
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const { username } = useParams();

  useEffect(() => {
    if (username == "null") {
        navigate("/login");
      }
  },[])

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    await axios
      .post(`http://localhost:5000/addpost/${username}`, post)
      .then(() => {
        navigate(`/post/${username}`);
      })
      .catch((err) => {
        alert("Error occured");
      });
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row addHeading">
          <h1>Come on! Let's add your thoughts right now</h1>
        </div>
        <div className="row addInput">
          <div className="row addInputFields">
            <div className="row addInputTitle">
              <input
                name="title"
                onChange={(e) => handleChange(e)}
                placeholder="Enter title here..."
                type="text"
              />
            </div>
            <div className="row addInputDescription">
              <input
                name="description"
                onChange={(e) => handleChange(e)}
                placeholder="Enter your beautiful thoughts here"
                maxlength="75"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="row addButton">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
