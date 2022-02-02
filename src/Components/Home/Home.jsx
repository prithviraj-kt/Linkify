import React, { useState, useEffect } from "react";
import "./home.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function Home() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [user, setUser] = useState([]);

  useEffect( () => {
    auth();
  }, [user]);

  const auth = async () => {
    const userData = await axios.get(
      `http://localhost:5000/getUser/${username}`
    );
    const authUser = await localStorage.getItem("username");
    await axios
      .get(`http://localhost:5000/getAllUser/${username}`)
      .then((users) => {
        console.log(users.data);
        setUser(users.data);
      })
      .catch((err) => {
        alert("User does not exist");
      });
    if (authUser !== userData.data.username) {
      navigate("/login");
    }
  };
  const handleClick = (e) => {
    navigate(`/profile/${username}/${e.username}`);
  };
  const displayData = (e) => {
    return (
      <div className="DisplayUsehomer">
        <button onClick={() => handleClick(e)}>
          <p>{e.username}</p>
          <p>{e.email}</p>
          <p>{e.position}</p>
        </button>
      </div>
    );
  };
  return (
    <div className="Home">
      <Navbar />

      <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="home-student-list">student

          </div>
        </div>
        <div className="col-md-5">
          <div className="home-alumini-list">Alumini

          </div>
          
          
        </div>

      </div>

      </div>
      
      {user.map((value) => displayData(value))}
    </div>
  );
}

export default Home;
