import React from "react";
import {useNavigate} from "react-router-dom"
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
  return <div>
      <div className="container-fluid">
          <div className="row">
              <div className="col-4">
                  Logo
              </div>
              <div className="col-8">
                  <button onClick={signInRoute}>Signin</button>
                  <button onClick={logInRoute}>Login</button>
                  <button onClick={homeRoute}>Home</button>
                  <button onClick={Posts}>Posts</button>
                  <button onClick={profileRoute}>Profile</button>
                  <button onClick={logout}>Logout</button>
              </div>
          </div>
      </div>
  </div>;
}

export default Navbar;
