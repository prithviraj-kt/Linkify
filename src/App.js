import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Signin from "./Components/SignIn/Signin";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import NotFound from "./Components/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Edit from "./Components/EditUser/EditUser"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
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
