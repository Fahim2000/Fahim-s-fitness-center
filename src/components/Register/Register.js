import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import googleLogo from "../../images/google-logo.png";
import registerImg from "../../images/register.jpg";
import "../Login/login.css";
import "./register.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { logInUsingGoogle, signUpWithEmailAndPassword } = useAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithEmailAndPassword(email, password, name);
  };
  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle();
  };

  return (
    <div className="container  margin-bottom">
      <h1 className="text-center my-2">Register an account</h1>
      <div className="row align-items-md-center">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="your name"
            id="name"
            onBlur={handleNameChange}
            required
            className="form-control w-75"
          />
          <br />
          <input
            type="email"
            name=""
            onBlur={handleEmailChange}
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
            onBlur={handlePasswordChange}
            placeholder="your password"
            required
            className="form-control w-75"
          />
          <button className="btn btn-dark w-75 my-4" onClick={handleSubmit}>
            Submit
          </button>
          <div className="mb-3">--------OR-----------</div>
          <button className="btn btn-dark w-75 " onClick={handleGoogleLogIn}>
            {" "}
            <img src={googleLogo} width="60" alt="" />
            Register with google
          </button>
          <p className="lead my-2">
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="col-md-6">
          <img src={registerImg} className="w-75" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
