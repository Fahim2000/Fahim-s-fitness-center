import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="row align-items-center">
        <div className="col-md-7 text-md-start text-center">
          <img
            src="https://d1wnwqwep8qkqc.cloudfront.net/uploads/stage/stage_image/111860/optimized_large_thumb_stage.jpg"
            alt=""
            width="180"
          />
        </div>
        <div className="col-md-5 text-md-start text-center">
          <h1 className="text-warning">
            Connect :{" "}
            <span className="mx-2">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className="mx-2">
              {" "}
              <i className="fab fa-youtube"></i>
            </span>
            <span className="mx-2">
              {" "}
              <i className="fab fa-twitter"></i>
            </span>{" "}
          </h1>
        </div>
        <h3 className="text-center">
          All rights reserved &copy; by{" "}
          <span className="text-warning">Fahim's fitness center</span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
