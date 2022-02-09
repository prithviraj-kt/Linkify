import React, { useState, useEffect } from "react";
import "./home.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Nav";

function Home() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [user, setUser] = useState([]);

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
      <div className="DisplayUsehomer mapUser">
        <button onClick={() => handleClick(e)}>
          <p>@{e.username}</p>
          <p>{e.email}</p>
          <p>{e.position}</p>
        </button>
      </div>
    );
  };
  return (
    <div className="Home container-fluid">
      <Navbar />
      <div className="row home">
      <div className="col-sm-6 homeCard">
          <div className="row home_display">
            <div className="row homeText">
              <h3>STUDENTS</h3>
            </div>
            {user
              .filter((u) => u.position == "STUDENT")
              .map((value) => displayData(value))}
          </div>
        </div>

        <div className="col-sm-6 homeCard">
          <div className="row home_display">
            <div className="row homeText">
              <h3>ALUMINIS</h3>
            </div>
            {user
              .filter((u) => u.position == "ALUMINI")
              .map((value) => displayData(value))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
