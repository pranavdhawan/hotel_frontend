import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'




const Navbar = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login");
  }


  const {user} = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to = "/" style={{color: "inherit", textDecoration: "none"}}>
        <span className="logo">Chingarizz2</span>
        </Link>
        {user ? (user.username) : (
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" onClick={handleLogin}>Login</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar