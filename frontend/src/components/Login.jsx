import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate();

  const handleInput = (e) => {
    const {name, value} = e.target
    setUser((prevUser )=> ({...prevUser, [name]: value}))
  }

  const handleSubmit = async () => {
    try{

      const res = await axios.post("http://localhost:3001/login", user, {withCredentials:true})
      console.log(res);
      if(res.status === 200) {
       navigate("/");
      }
    } catch(err) {
      console.error("Login failed", err)
    }
      // .then((data) => {
      //   console.log(data);
      //   navigate("/");
      // })
      // .catch((err) => console.log(err));
  };



  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={user.username}
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
        </div>
        <button className="btn-login" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
