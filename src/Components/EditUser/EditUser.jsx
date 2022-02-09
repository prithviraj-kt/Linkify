import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Nav";
import axios from "axios";
import "./EditUser.css";
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
        <div className="container-fluid">
          <div className="row edit">
            <h1>Come on, lets update your profile</h1>
          </div>
          <div className="container editSpace ">
            <div className="row ">
              <div className="col-md-6 editinputs">
                <div className="row editField">
                  <div className="col-md-4">Name:</div>
                  <div className="col-md-8 editInputField">
                    <input
                      onChange={(e) => changeInput(e)}
                      name="name"
                      placeholder="Name"
                      value={user.name}
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </div>
                </div>
                <div className="row editField">
                  <div className="col-md-4">Email:</div>
                  <div className="col-md-8 editInputField">
                    <input
                      onChange={(e) => changeInput(e)}
                      name="email"
                      placeholder="Email"
                      value={user.email}
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </div>
                </div>
                <div className="row editField">
                  <div className="col-md-4">Phone:</div>
                  <div className="col-md-8 editInputField">
                    <input
                      onChange={(e) => changeInput(e)}
                      name="phone"
                      placeholder="Phone"
                      value={user.phone}
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </div>
                </div>
                <div className="row editField">
                  <div className="col-md-4">Password:</div>
                  <div className="col-md-8 editInputField">
                    <input
                      type="password"
                      onChange={(e) => changeInput(e)}
                      name="password"
                      placeholder="Password"
                      value={user.password}
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </div>
                </div>
                <div className="row editField">
                  <div className="col-md-4">Confirm Password:</div>
                  <div className="col-md-8 editInputField">
                    <input
                      type="password"
                      onChange={(e) => changeInput(e)}
                      name="confirm_password"
                      placeholder="Confirm password"
                      value={user.confirm_password}
                      id="my-input"
                      aria-describedby="my-helper-text"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 viewEdits">
                <div className="row editView">
                  <div className="col-md-4 editViewTitle">Name:</div>
                  <div className="col-md-8 editViewData">{user.name}</div>
                </div>
                <div className="row editView">
                  <div className="col-md-4 editViewTitle">Email:</div>
                  <div className="col-md-8 editViewData">{user.email}</div>
                </div>
                <div className="row editView">
                  <div className="col-md-4 editViewTitle">Phone:</div>
                  <div className="col-md-8 editViewData">{user.phone}</div>
                </div>
                <div className="row editView">
                  <div className="col-md-4 editViewTitle">Password:</div>
                  <div className="col-md-8 editViewData">{user.password}</div>
                </div>
                <div className="row editView">
                  <div className="col-md-4 editViewTitle">
                    Confirm Password:
                  </div>
                  <div className="col-md-8 editViewData">
                    {user.confirm_password}
                  </div>
                </div>
              </div>
              <div className="row editButton">
                <button
                  className="edit-user-submit-btn"
                  onClick={(e) => handleClick(e)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
