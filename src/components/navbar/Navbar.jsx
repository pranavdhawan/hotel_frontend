import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { api } from "../../lip/fetch-config"
import { useState } from "react"


const Navbar = () => {
  const navigate = useNavigate()
  const {user, logout} = useContext(AuthContext)

  const handleLogin = () => {
    navigate("/login");
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const handleRegister = async () => {
    navigate("/register")
  };


  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo"><b>Voyager</b></span>
        </Link>
        {user ? (
          <div className="navItems">
            <span className="username">{user.username}</span>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <a href="https://admin-lbtj.onrender.com/" target="_blank">Admin</a>
            <button className="navButton" onClick={handleRegister}>
              Register
            </button>
            <button className="navButton" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );

}

export default Navbar