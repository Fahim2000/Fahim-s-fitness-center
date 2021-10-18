import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div>
      <div className="bg-img d-flex align-items-center justify-content-center">
        <div>
          <h1 className="text-white ">ABOUT US</h1>
        </div>
      </div>
      <section className=" mt-4 container m-bottom">
        <div>
          <h1 className="text-warning">Why Fahim's Fitness Center</h1>
          <p>
            The establishment of Shapes in the early 90s was inspired by the
            notable lack of fitness facilities coupled with the absence of the
            required equipment, not to mention qualified instructors, in the few
            facilities that already existed in the country. Over the years, we
            have grown substantially to become the pioneer in the health and
            fitness industry in Bangladesh. The remarkable growth, success and
            customer affiliation we are enjoying today, can be attributed
            directly to our CEO’s vision for the brand. It has also been brought
            to life by the hard work and dedication of our team of exercise
            enthusiasts. Not only we are one of the largest chains of health and
            ?fitness clubs in the country today, but also we forte in offering
            quality services to empower our clients and enhance active
            lifestyles. Our mantra is “fitness for all” and we make sure that we
            welcome anyone who want to achieve their fitness goal and remain
            healthy. We believe to spice up the daily dreary fitness regime.
            Shapes is specifically designed to keep up with the modern needs of
            its customers. Because of the reason, we are the only health club in
            Bangladesh to develop and establish an in-house Instructor
            certification program that helps in training fitness instructors
            through a variety of subject such as CPR, Human Anatomy, Physiology,
            Kinesiology, Functional training and Fitness testing to name a few.
            The end result: a league of extraordinarily personalized instructors
            who help others with their lifelong dream of attaining fitness and
            health across the country. Our services are designed to offer
            individual attention and time efficient programming with fitness
            professionals to help ensure results and keep you motivated. Our
            trainers focus on delivering effective training methods while
            educating clients on proper nutritional habits. We have several
            dedicated areas of our facility designed for specialized small group
            training with a Fitness professional. Take the simple initiative of
            visiting any Shapes Club near you and get in touch with one of our
            personal to talk about your needs. We will help you chalk up a
            personalized program to help you shed those extra pounds. Put
            healthy back in your eating habits and most of all – groom your
            mindset to make you a positive person.
          </p>
        </div>
        {/* OUR VISION */}
        <div>
          <h1 className="text-warning">Our Vision</h1>
          <p>
            Sustain our image as one of the largest chains of health and fitness
            clubs in the country today, also forte in offering quality services
            to empower our clients and enhance active lifestyles. Creating and
            maintain a league of extraordinarily personalized instructors who
            help others with their lifelong dream of attaining fitness and
            health across the country, and to help you as your fitness partner
            in achieving a decent level of fitness. We have done this by
            offering exceptional services, professional assistance by qualified
            and knowledgeable trainers, and giving our clients access to
            state-of-the art equipment. Our doors are open for anyone who wants
            to change their lifestyle.{" "}
          </p>
        </div>
        <div>
          {/* FONT AWESOME ICONS */}
          <div className="container">
            <div className="row g-2">
              <div className="col-md-3">
                <div className="p-3  text-center">
                  <i className="fas fa-users "></i>
                  <h5 className="my-3">300k+</h5>
                  <p className=" fs-5">Clients</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-3 text-center">
                  <i className="fas fa-user"></i>
                  <h5 className="my-3">55+</h5>
                  <p className=" fs-4">Professional Trainers</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-3 text-center">
                  <i className="fas fa-building"></i>
                  <h5 className="my-3">13+</h5>
                  <p className=" fs-4">Facilities</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-3 text-center">
                  <i className="fas fa-trophy"></i>
                  <h5 className="my-3">15+</h5>
                  <p className=" fs-4">Certification Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
