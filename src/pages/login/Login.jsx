import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom
import "./login.css";
import { api } from "../../lip/fetch-config";
import loginImage from "../../components/images/signupHotel.jpeg"; // Replace with the path to your login image

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await api.post("/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const { loading, error, dispatch } = useContext(AuthContext);

  return (
    <div className="login">
      <div className="linkHome">
      <Link to="/">
      <h3>Home</h3>
      </Link>
      </div>
      <div className="loginContainer">
        <div className="imageContainer">
          <img src={loginImage} alt="Login" className="loginImage" />
        </div>
        <div className="formContainer">
          <h2 className="title">Login</h2>
        --------------------------------------------------------------
          <input
            type="text"
            className="lInput"
            placeholder="username"
            id="username"
            onChange={handleChange}
          />
          <input
            type="password"
            className="lInput"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
          <button
            className="lButton"
            onClick={handleClick}
            disabled={loading}
          >
            Login
          </button>
          {error && <span>{error.message}</span>}

          {/* New here? Register link */}
          <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
            New here? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;