import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  // COLLECTING THE ID FROM A DYNAMIC ROUTE
  const { id } = useParams();
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const singleService = services.find((service) => service.id === id);

  return (
    <div className="margin-bottom">
      <div className="bg-img d-flex align-items-center justify-content-center">
        <h1 className="text-white ">{singleService?.servicesName}</h1>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9">
            <img src={singleService?.img} className="img-fluid h-75" alt="" />
            <h3 className="text-warning fw-bold mt-2">
              {singleService?.servicesName}
            </h3>
            <p className="mt-3">{singleService?.desc2}</p>
          </div>
          <div className="col-md-3 border h-75 p-3 m-top">
            <h2 className="text-warning fw-bold">OUR SERVICES</h2>
            <ul>
              <li>
                <i className="fas fa-greater-than me-2 fw-light"></i>Training
                Programs And Consultant Coordination
              </li>
              <li>
                <i className="fas fa-greater-than me-2 fw-light"></i> Health and
                Nutrition Management
              </li>
              <li>
                <i className="fas fa-greater-than me-2 fw-light"></i> Fitness
                and Health Programs
              </li>
              <li>
                <i className="fas fa-greater-than me-2 fw-light"></i> Online
                Program for fitness trainers
              </li>
              <li>
                <i className="fas fa-greater-than me-2 fw-light"></i> Weight
                Training
              </li>
              <li>
                <i className="fas fa-greater-than me-2 fw-light"></i> Our
                Facilities
              </li>
              <li>
                <i className="fas fa-greater-than me-2 fw-light"></i> Equipment,
                Infrastructure And Facility Exporter
              </li>
              <li>
                <i className="fas fa-greater-than me-2 fw-light"></i> Shapes
                Energy Cafe
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
