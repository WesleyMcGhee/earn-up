import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function LogHeader() {
  return (
    <header>
      <Link to="/" className="logo">
        <h1>Earn Up</h1>
      </Link>
      <div className="nav-con">
        <ul className="nav-list">
          <Link className="nav-link">
            <li className="nav-item">Sign Up</li>
          </Link>
          <Link className="nav-link">
            <li className="nav-item">Log In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
