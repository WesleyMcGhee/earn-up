import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogHeader from "../../component/logheader/Header";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUser(userInput) {
    setUsername(userInput);
  }
  function handlePass(userInput) {
    setPassword(userInput);
  }
  function sendIt() {
    axios
      .post("http://localhost:4500/signin", {
        username,
        password,
      })
      .then((res) => {
        let userData = res.data;
        if (userData.token) {
          localStorage.setItem("token", userData.token);
          localStorage.setItem("id", userData.id);
        }
      });
  }
  return (
    <div>
      <LogHeader />
      <h1 className="bannar">Log In</h1>
      <div className="form-con">
        <form
          className="log-form"
          onSubmit={(e) => {
            e.preventDefault();
            sendIt();
          }}
        >
          <input
            type="text"
            className="form-text"
            placeholder="Username"
            onChange={(e) => {
              handleUser(e.target.value);
            }}
          ></input>
          <input
            type="password"
            className="form-text"
            placeholder="Password"
            onChange={(e) => {
              handlePass(e.target.value);
            }}
          ></input>
          <input type="submit" className="form-btn"></input>
        </form>
        <Link to="/signup" className="acc-ask-link">
          <p className="acc-ask">Don't have an account</p>
        </Link>
      </div>
    </div>
  );
}
