import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseLink } from "./varaible";
import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const refreshPage = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { username, password };
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: baseLink + "/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("number", response.data.number);
        refreshPage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username"
          placeholder="User Name"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button className="sub-btn" type="submit">
          Log In
        </button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
}

export default Login;
