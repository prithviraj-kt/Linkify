import React from "react";
import {useNavigate} from "react-router-dom";
// import logo from './logo.png'
import "./Navbar.css"
function Navbar() {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate("/login")
    }
    const signInRoute =( ) =>{
        navigate("/signin")
    }
    const logInRoute =( ) =>{
        navigate("/login")
    }
    const homeRoute =( ) =>{
        const authUser = localStorage.getItem("username")
        if(authUser){
            navigate(`/home/${authUser}`)
        }else{
            navigate("/login")
        }
    }
    const profileRoute = () => {
        const authUser = localStorage.getItem("username")
        if(authUser){
            navigate(`/profile/${authUser}/${authUser}`)
        }else{
            navigate("/login")
        }
    }

    const Posts = () => {
        const authUser = localStorage.getItem("username")
        if(authUser){
            navigate(`/post/${authUser}`)
        }else{
            navigate("/login")
        }
    }

    const addPost = () => {
        const authUser = localStorage.getItem("username")
        if(authUser){
            navigate(`/addpost/${authUser}`)
        }else{
            navigate("/login")
        }
    }
  return <div>
      <div className="container-fluid">
         
             
                  {/* <img src= {logo} className="navbar-logo"/> */}
             
            
                 <button className="navbar-signin" onClick={signInRoute}>Signin</button>
                  <button className="navbar-login" onClick={logInRoute}>Login</button>
                  <button className="navbar-home" onClick={homeRoute}>Home</button>
                  <button onClick={Posts}>Posts</button>
                  <button className="navbar-profile" onClick={profileRoute}>Profile</button>
                  <button onClick={logout}>Logout</button>
                  <button onClick={addPost}>Add Post</button>

         
                
                  
            

      </div>
  </div>;
}

export default Navbar;
