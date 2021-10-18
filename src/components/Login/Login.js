import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import googleLogo from "../../images/google-logo.png";
import loginImg from "../../images/login.jpg";
import "../Register/register.css";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logInUsingGoogle, emailAndPasswordSignIn } = useAuth();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle();
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    emailAndPasswordSignIn(email, password);
  };

  return (
    <div className="container margin-bottom">
      <h1 className="text-center my-2">Login</h1>
      <div className="row align-items-md-center">
        <div className="col-md-6">
          <input
            type="email"
            name=""
            onBlur={handleEmail}
            id="email"
            placeholder="your email"
            required
            className="form-control w-75"
          />
          <br />
          <input
            type="password"
            name=""
            id="password"
            onBlur={handlePassword}
            placeholder="your password"
            required
            className="form-control w-75"
          />
          <button className="btn btn-dark w-75 my-4" onClick={handleLogIn}>
            Submit
          </button>
          <div className="mb-3">--------OR-----------</div>
          <button className="btn btn-dark w-75" onClick={handleGoogleLogIn}>
            {" "}
            <img src={googleLogo} width="60" alt="" />
            Login with google
          </button>
          <p className="lead my-2">
            Don't have an account ? <Link to="/register">Register</Link>
          </p>
        </div>
        <div className="col-md-6">
          <img src={loginImg} className="w-75" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
