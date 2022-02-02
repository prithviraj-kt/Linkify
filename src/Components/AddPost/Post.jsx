import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Post.css"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom";
function Post() {

    const navigate = useNavigate();
    const [post, setPost] = useState({})
    const {username} = useParams()

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }
    const handleSubmit = async () => {
        await axios.post(`http://localhost:5000/addpost/${username}`, post).then(() => {
            navigate(`/post/${username}`)
        }).catch(err => {
            alert("Error occured")
        }) 
    }
  return <div>
      <Navbar/>
      <div className="container">
          <div className="row">
              <h1>I am add post page</h1>
          </div>
          <div className="row">
              <input name="title" onChange={(e) => handleChange(e)} placeholder='Enter title' type="text" />
              <input name="description" onChange={(e) =>handleChange(e)} placeholder='Enter description here' type="text" />
          </div>
          <div className="row">
              <button onClick={handleSubmit}>Submit</button>
          </div>
      </div>
  </div>;
}

export default Post;
