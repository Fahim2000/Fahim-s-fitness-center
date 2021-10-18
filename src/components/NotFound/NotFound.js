import React from "react";
import notFoundImg from "../../images/not-found.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found text-center">
      <img src={notFoundImg} className="img-fluid" alt="" />
      <div>
        <button className="btn btn-dark ">Go to home</button>
      </div>
    </div>
  );
};

export default NotFound;
