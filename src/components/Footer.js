import React, { Component } from "react";
import Title from "../components/Title";
import { FaPhone, FaFacebookF, FaEnvelope } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <>
        <Title title="Contact Us" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              {/* <div className="services-center mt-5 d-flex justify-content-around flex-wrap"> */}
              <ul className="list-group no-wrap">
                <li
                  className="list-group-item"
                  style={{ border: "none", color: "#17B794" }}
                >
                  <span className="footer-icon mr-2">
                    <FaPhone className="footer-icon" />
                  </span>
                  +90 533 846 6595
                </li>
                <li
                  className="list-group-item"
                  style={{ border: "none", color: "#17B794" }}
                >
                  <span className="footer-icon mr-2">
                    <FaPhone className="footer-icon" />
                  </span>
                  +97 254 546 4927 (WhatsApp)
                </li>
                <li
                  className="list-group-item"
                  style={{ border: "none", color: "#17B794" }}
                >
                  <span className="footer-icon mr-2">
                    <FaEnvelope className="footer-icon" />
                  </span>
                  cyprus4u@gmail.com
                </li>
                <li
                  className="list-group-item"
                  style={{ border: "none", color: "#17B794" }}
                >
                  <span className="footer-icon mr-2">
                    <FaFacebookF className="footer-icon" />
                  </span>
                  Orangerie Apt.
                </li>
              </ul>
              {/* <div className="text-capitalize service">
									  <span className="footer-icon mr-2">
										<FaPhone className="footer-icon"/>
									  </span>
									 +90 533 846 6595
									</div>

									<div className="text-capitalize service">
									  <span className="footer-icon mr-2">
										<FaPhone className="footer-icon"/>
									  </span>
									  +97 254 546 4927 (WhatsApp)
									</div>

									<div className="service">
									  <span className="footer-icon mr-2">
									 <FaEnvelope className="footer-icon"/>
									  </span>
									  cyprus4u@gmail.com
									</div>

									<div className="text-capitalize service">
									  <span className="footer-icon mr-2">
										<FaFacebookF className="footer-icon"/>
									  </span>
									  Orangerie Apt.
									</div> */}
              {/* </div> */}
            </div>
            <div className="col-4">
              © 2020. All Rights Reserved Powered by
              <a
                href="http://technoparcsystems.com/"
                style={{ color: "#17B794" }}
              >
                {" "}
                TechnoParc Systems
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
