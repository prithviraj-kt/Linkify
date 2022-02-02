import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Signin from "./Components/SignIn/signin.jsx";
import Login from "./Components/Login/login.jsx";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/profile.jsx";
import NotFound from "./Components/NotFound/NotFound";
import Post from "./Components/Post/Post";
import Edit from "./Components/EditUser/EditUser"
import AddPost from "./Components/AddPost/Post"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/addpost/:username" element={<AddPost />} />
          <Route exact path="/post/:username" element={<Post/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home/:username" element={<Home />} />
          <Route exact path="/profile/:username/:visitedUser" element={<Profile />} />
          <Route exact path="/edit/:username" element={<Edit/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
