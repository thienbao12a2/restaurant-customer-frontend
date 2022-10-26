import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const PrivateDining = () => {
  return (
    <section className="private-dining border-zigzag-up parallex">
      <div className="container text-center">
        <h4 className="text-white">PRIVATE DINING</h4>
        <p className="text-white mb-5">YOUR EVENT, YOUR WAY</p>
        <div className="btn-row">
          <a
            href="contact.html"
            className="slider_btn_one more-link private-dining-btn"
          >
            <FontAwesomeIcon className="fa fa-envelope" icon={faEnvelope} />
            Enquire now
          </a>
          <a
            href="tel:0123-456-789"
            className="slider_btn_one more-link private-dining-btn"
          >
            <FontAwesomeIcon className="fa fa-envelope" icon={faPhone} />
            0123-456-789
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivateDining;
