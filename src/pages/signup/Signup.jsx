import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import LogHeader from "../../component/logheader/Header";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup({ content }) {
  let [username, setUsername] = useState("");
  let [pass, setPass] = useState("");
  let [conPass, setConPass] = useState("");
  function handleUser(userinput) {
    setUsername(userinput);
  }
  function handlePass(userinput) {
    setPass(userinput);
  }
  function handleConPass(userinput) {
    setConPass(userinput);
  }
  function sendIt() {
    if (pass === conPass) {
      axios.post("http://localhost:4500/signup", {
        username: username,
        password: pass,
      });
    } else {
      toast.error("Passwords do not match");
    }
  }
  return (
    <div>
      <LogHeader />
      <h1 className="bannar">Sign Up</h1>
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
          <input
            type="password"
            className="form-text"
            placeholder="Confirm Password"
            onChange={(e) => {
              handleConPass(e.target.value);
            }}
          ></input>
          <input type="submit" className="form-btn"></input>
        </form>
        <Link to="/login" className="acc-ask-link">
          <p className="acc-ask">Already Have an Account</p>
        </Link>
      </div>
    </div>
  );
}
