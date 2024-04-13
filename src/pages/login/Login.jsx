import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="google-button">
          <img src="./img/google-icon.png" className="google-icon" />
          <p className="google-txt">Continue with Google</p>
        </div>
        <div className="linkedin-button">
          <img src="./img/linkedin-icon.png" className="linkedIn-icon" />
          <p className="google-txt">Continue with Linkedin</p>
        </div>
        <div className="or-line">
          <hr />
          <p className="or-txt">or</p>
        </div>
        <h2 className="login-txt">Login</h2>
        <div className="form-group">
          <div className="input-search">
            <input
              className="search-box"
              type="text"
              placeholder="Login Email"
            />
          </div>
          <div className="input-search">
            <input className="search-box" type="text" placeholder="Password" />
          </div>
        </div>
        <button className="login-button">Login</button>
        <p className="create-txt">Don’t have an account? <span className="create-link">Create Account</span></p>
      </div>
    </div>
  );
}

export default Login;
