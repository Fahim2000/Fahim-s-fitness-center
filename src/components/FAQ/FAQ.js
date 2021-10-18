import React from "react";
import faq from "../../images/faq.png";
import "./faq.css";
const FAQ = () => {
  return (
    <div className="m-bottom">
      <div className="bg-img d-flex align-items-center justify-content-center">
        <div>
          <h1 className="text-white ">Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Do I need to book a slot for the gym? (COVID-19 Related)
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Bookings are required after 4pm Monday to Thursday. All
                    other times for gym floor access No Booking required. Gym
                    slots of 90 minutes must be booked on our class timetable.
                    Slots can be booked up to 3 days before from 9pm. For
                    example, to book a slot on Monday, you can book from 9pm the
                    previous Friday. This booking system will be strictly
                    enforced and if you have not booked a slot for the specific
                    time you wish to come to the gym, you may not be granted
                    access to the gym.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Can I cancel the gym time slot I have booked?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    es, gym time slots can be cancelled up to 2 hours before
                    their start time. If you don't cancel your gym time slots,
                    and miss 3 or more within a 30 day period, a booking block
                    will be placed on your account for 3 days.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Are the showers and changing facilities available? (COVID-19
                    Related)
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Showers are now available from 5.30am-9.30pm Monday –
                    Thursday. 5.30am- 7.30pm Friday. 8.00am- 5.30pm. Saturday
                    and 9.00am – 4.30 pm Sundays. We ask that members are quick
                    and efficient when using the showers. Lockers and changing
                    rooms are also now available all day. Limited to 10 members
                    in the Men’s and 5 in the Women’s to maintain social
                    distancing guidelines. It is advised to wear masks in the
                    changing rooms where social distancing is difficult to
                    maintain. If you are only availing of the lockers, please
                    enter and exit the dressing room in a timely manner to avoid
                    congestion.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <img src={faq} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
