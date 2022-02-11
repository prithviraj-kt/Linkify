import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile.jsx";
import NotFound from "./Components/NotFound/NotFound";
import Post from "./Components/Post/Post";
import EditPost from "./Components/EditPost/Edit"
import Edit from "./Components/EditUser/EditUser";
import AddPost from "./Components/AddPost/Post";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/edit/:username/:id" element={<EditPost />} />
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/addpost/:username" element={<AddPost />} />
          <Route exact path="/post/:username" element={<Post />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home/:username" element={<Home />} />
          <Route
            exact
            path="/profile/:username/:visitedUser"
            element={<Profile />}
          />
          <Route exact path="/edit/:username" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
