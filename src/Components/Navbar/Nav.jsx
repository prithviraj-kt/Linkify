import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
// import logo from './logo.png'
import "./Navbar.css"
function Nav() {
  const authUser = localStorage.getItem("username");

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const signInRoute = () => {
    navigate("/signin");
  };
  const logInRoute = () => {
    navigate("/login");
  };
  const homeRoute = () => {
    if (authUser) {
      navigate(`/home/${authUser}`);
    } else {
      navigate("/login");
    }
  };
  const profileRoute = () => {
    if (authUser) {
      navigate(`/profile/${authUser}/${authUser}`);
    } else {
      navigate("/login");
    }
  };

  const Posts = () => {
    if (authUser) {
      navigate(`/post/${authUser}`);
    } else {
      navigate("/login");
    }
  };

  const addPost = () => {
    if (authUser) {
      navigate(`/addpost/${authUser}`);
    } else {
      navigate("/login");
    }
  };

  const props = {
    items: [
      {
        text: "Login",
        link: "/login",
      },
      {
        text: "Signup",
        link: "/signin",
      },
     
      {
        text: "Profile",
        link: `/profile/${authUser}/${authUser}`,
      },
      {
        text: "Home",
        link: `/home/${authUser}`,
      },
      {
        text:"Create Post",
        link:`/addPost/${authUser}`
    },
    {
        text:"Posts",
        link:`/post/${authUser}`
    },
    ],
    logo: {
      text: "Linkify",
    },
    style: {
      barStyles: {
        background: "blue",
        border:"0px",
      },
      sidebarStyles: {
        background: "#222",
        buttonColor: "white",
      },
    },
  };

  return <Navbar {...props} />;

  //   return (
  //     <div>
  //       <div className="container-fluid">
  //         {/* <img src= {logo} className="navbar-logo"/> */}

  //         <button className="navbar-signin" onClick={signInRoute}>
  //           Signin
  //         </button>
  //         <button className="navbar-login" onClick={logInRoute}>
  //           Login
  //         </button>
  //         <button className="navbar-home" onClick={homeRoute}>
  //           Home
  //         </button>
  //         <button className="navbar-post" onClick={Posts}>
  //           Posts
  //         </button>
  //         <button className="navbar-profile" onClick={profileRoute}>
  //           Profile
  //         </button>
  //         <button className="navbar-logout" onClick={logout}>
  //           Logout
  //         </button>
  //         <button className="navbar-addpost" onClick={addPost}>
  //           Add Post
  //         </button>
  //       </div>
  //     </div>
  //   );
}
export default Nav;
