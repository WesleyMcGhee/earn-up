import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import LogHeader from "../../component/logheader/Header";
export default function Signup() {
  return (
    <div>
      <LogHeader />
      <h1 className="bannar">Sign Up</h1>
      <div className="form-con">
        <form className="log-form">
          <input
            type="text"
            className="form-text"
            placeholder="Username"
          ></input>
          <input
            type="password"
            className="form-text"
            placeholder="Password"
          ></input>
          <input
            type="password"
            className="form-text"
            placeholder="Confirm Password"
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
