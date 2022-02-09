import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Post.css";
import Navbar from "../Navbar/Nav";
function Post() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [post, setPost] = useState([]);
  // const [postDes, setPostDes] = useState("");
  useEffect(() => {
    if (username == "null") {
      navigate("/login");
    }
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
        // setPostDes(users.data.description)
      })
      .catch((err) => {
        alert("User does not exist");
      });

    if (authUser !== userData.data.username) {
      navigate("/login");
    }
  };

  const handleClick = (value) => {
    navigate(`/profile/${username}/${value.username}`);
  };

  const postDisplay = (value) => {
    return (
      <div className="profilePostDisplay">
        <p className="profilePostTitle">{value.title}</p>
        <p className="profilePostdesc">{value.description}</p>
        <button onClick={() => handleClick(value)}>
          visit @{value.username}
        </button>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="postTitle">
          <h1>Post page</h1>
        </div>
        <div className="profilePostCard">
          {post.map((value) => postDisplay(value))}
        </div>
      </div>
    </div>
  );
}

export default Post;
