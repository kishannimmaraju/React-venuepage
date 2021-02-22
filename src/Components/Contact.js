import React from "react";

function Contact() {
  return (
    <>
      <div className="contact_title">
        <p>Contact Us</p>
        <h2>Vivamus nec vehicula felis </h2>
        <button className="contact_button mt-3">Buy It Now</button>
      </div>
      <div className="container-fluid contact_horizentaline"></div>
      <div className="container">
        <div className="cotact_container">
          <div className="row">
            <div className="col-lg-4">
              <h2>venue</h2>
              <p className="contact_about">
                Mauris sit amet quam congue, pulvinar urna et, congue diam.
                Suspendisse eu lorem massa. Integer sit amet posuere tellus, id
                efficitur leo. In hac habitasse platea dictumst.
              </p>
            </div>
            <div className="col-lg-4">
              <h4 className="contactusefull_title">Useful Links</h4>
              <ul className="contactusefull_titlelist">
                <li>
                  <a href="">Help FAQs</a>
                </li>
                <li>
                  <a href="">Register</a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">My Profile</a>
                </li>
                <li>
                  <a href="">How It Works?</a>
                </li>
                <li>
                  <a href="">More About Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h4 className="contactinformation_heading">
                Contact information
              </h4>
              <p className="contact_about">
                Praesent iaculis gravida elementum. Proin fermentum neque
                facilisis semper pharetra. Sed vestibulum vehicula tincidunt.
              </p>
              <ul className="contact_details pl-0">
                <li>
                  <span>Phone:</span>
                  <a href="">9652303574</a>
                </li>
                <li>
                  <span>Email:</span>
                  <a href="">kishannimmaraju962gmail.com</a>
                </li>
                <li>
                  <span>Address:</span>
                  <a href="">company.co</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2045 Company Name - Design: TemplateMo</p>
      </div>
    </>
  );
}
export default Contact;
