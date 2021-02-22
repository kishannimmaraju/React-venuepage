import React from "react";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";

function Services() {
  return (
    <>
      <div className="container">
        <div className="service_title">
          <p>Our Services</p>
          <h2>Best Template Site</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="service_card1">
              <img src={icon1} alt="" className="servicecard_img" />
              <h4 className="servicecardone_title">High Quality Design</h4>
              <p>
                Etiam viverra nibh at lorem hendrerit porta non nec ligula.
                Donec hendrerit porttitor pretium. Suspendisse fermentum nec
                risus.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service_card2">
              <img src={icon2} alt="" className="servicecard_img" />
              <h4 className="servicecardtwo_title">Fully Customizable</h4>
              <p>
                Vivamus nec vehicula felis, sit amet convallis ex. Aenean dolor
                risus, rutrum at tincidunt eget, placerat ac mauris.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service_card3">
              <img src={icon3} alt="" className="servicecard_img" />
              <h4 className="servicecardthree_title">Best HTML CSS Layout</h4>
              <p>
                Praesent nec dui sed urna pharetra dapibus at ac elit. Aenean
                hendrerit metus leo, quis viverra purus condimentum nec.
              </p>
            </div>
          </div>
        </div>
        <div className="service_horizentalline"></div>
      </div>
    </>
  );
}
export default Services;
