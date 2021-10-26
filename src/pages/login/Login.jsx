import React from "react";
import { Link } from "react-router-dom";
import LogHeader from "../../component/logheader/Header";
export default function Login() {
  return (
    <div>
      <LogHeader />
      <h1 className="bannar">Log In</h1>
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
          <input type="submit" className="form-btn"></input>
        </form>
        <Link to="/signup" className="acc-ask-link">
          <p className="acc-ask">Don't have an account</p>
        </Link>
      </div>
    </div>
  );
}
