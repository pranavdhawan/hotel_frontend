import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { api } from "../../lip/fetch-config";


const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
        email: undefined,
        country: undefined,
        city: undefined,
        phone: undefined
    })
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try {
            const res = await api.post("/api/auth/register", credentials)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.details})
            navigate("/")
        } catch (err) {
            dispatch({type: "LOGIN_FAILURE", payload: err.response.data})
        }
    }


    const {loading, error, dispatch} = useContext(AuthContext)

    return(
        <div className="login">
            <div className="lContainer">
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

{/* skafiasjghfjadbfjhadbjsfbaj,hsdbfj,dasbfjnadsfad */}
                <input 
                    type="text"
                    className="lInput"
                    placeholder="email"
                    id="email"
                    onChange={handleChange} 
                />
                <input 
                    type="text"
                    className="lInput"
                    placeholder="country"
                    id="country"
                    onChange={handleChange} 
                />
                <input 
                    type="text"
                    className="lInput"
                    placeholder="city"
                    id="city"
                    onChange={handleChange} 
                />
                <input 
                    type="text"
                    className="lInput"
                    placeholder="phone"
                    id="phone"
                    onChange={handleChange} 
                />
{/* skafiasjghfjadbfjhadbjsfbaj,hsdbfj,dasbfjnadsfad */}



                <button className="lButton" onClick={handleClick} disabled={loading}>
                    Register
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Register