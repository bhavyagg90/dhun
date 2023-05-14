import React, { useState } from "react";

import { baseLink } from "./varaible";
import axios from "axios";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, password, username, number, email };
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: baseLink + "/createAccount",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log("request sent sucessfuly");
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          placeholder="Full Name"
        />

        <label htmlFor="username">User Name</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username"
          placeholder="User Name"
        />

        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
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
        <label htmlFor="number">Phone Number</label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="tel"
          name="number"
          id="number"
          placeholder="Phone Number"
          pattern="[0-9]{10}"
        />
        <button className="sub-btn" type="submit">
          Log In
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
