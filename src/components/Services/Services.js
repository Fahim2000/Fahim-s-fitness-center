import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Services.css";
const Services = () => {
  const history = useHistory();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleClick = (id) => {
    history.push(`/service/${id}`);
  };
  return (
    <div className="mt-4">
      <h1 className="text-center text-warning fw-bold">OUR SERVICES </h1>
      <p className="text-center text-warning">
        Make "FITNESS" a part of your life
      </p>

      <div className="row  row-cols-1 row-cols-md-3 g-3">
        {services.map((service) => {
          return (
            <div className="col" key={service.id}>
              <div className="card h-100">
                <img src={service.img} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{service.servicesName}</h5>
                  <p className="card-text">{service.desc1}</p>

                  <button
                    className="btn btn-dark"
                    onClick={() => handleClick(service.id)}
                  >
                    Click to learn more
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
