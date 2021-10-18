import React from "react";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    // Hero image
    <div className="margin-bottom">
      <div className="banner d-flex align-items-center">
        <div className="container">
          <div className="row height">
            <div className="col-sm-6">
              <h1 className="fw-bolder text-white title">
                YOUR ULTIMATE FITNESS PARTNER
              </h1>
              <p className=" fw-italic sub-title text-white">
                We work towards achieving your fitness goals
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* services */}
      <Services></Services>
    </div>
  );
};

export default Home;
