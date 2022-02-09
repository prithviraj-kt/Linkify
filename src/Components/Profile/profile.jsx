import React, { useState, useEffect } from "react";
import "./profile.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Nav";
import img from "./profile.jpg";
function Profile() {
  const { username } = useParams();
  const { visitedUser } = useParams();
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    if (username == "null") {
      navigate("/login");
    }
    const userData = await axios.get(
      `http://localhost:5000/getUser/${visitedUser}`
    );
    setUser(userData.data);
    const post = await axios.get(`http://localhost:5000/get/${visitedUser}`);
    setPost(post.data);
    console.log(post.data);
  }

  const handleClick = () => {
    navigate(`/edit/${username}`);
  };

  const displayPost = (e) => {
    return (
      <div className="profilePostDisplay">
        <p className="profilePostTitle">{e.title}</p>
        <p className="profilePostdesc">{e.description}</p>
      </div>
    );
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="Profile">
      <Navbar />
      <div className="container">
        <div className="row profileUsername">
          <h1>Welcome @{user.username}</h1>
        </div>
        <div className="row">
          <div className="row col-md-5 profileImage">
            <img src={img} alt="" />
          </div>
          <div className="row col-md-7 profileData">
            <div className="row">
              <p>
                <span className="profileField"> Name: </span> {user.name}
              </p>
              <p>
                <span className="profileField">Email:</span> {user.email}
              </p>
              <p>
                <span className="profileField"> Phone: </span> {user.phone}
              </p>
              <p>
                <span className="profileField"> Position: </span>{" "}
                {user.position}
              </p>
              <p>
                <span className="profileField"> College: </span> {user.college}
              </p>
              <div className="row profileButtons">
                {visitedUser == username ? (
                  <div>
                    <button
                      className="profileEditBtn"
                      onClick={() => handleClick()}
                    >
                      Edit
                    </button>
                    <button onClick={logout} className="profileLogout">Logout</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row postTitle profilePost">
          <h1>Posts</h1>
        </div>
        <div className="row profilePostCard">
          {post.map((e) => displayPost(e))}
        </div>
      </div>
    </div>
  );
}
export default Profile;
