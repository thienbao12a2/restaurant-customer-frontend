import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const storeInfo = [
    { phone_number: "6784090605", icon: faPhone },
    { address: "25 Park Pl, Atlanta, GA 30089", icon: faLocationDot },
    { email: "info@monster-food.com", icon: faEnvelope },
  ];
  const socialMedia = [faFacebook, faInstagram, faTwitter];
  const renderStoreInfo = storeInfo.map((info, index) => {
    return (
      <div key={index} className="col-xl-4 col-lg-4 col-md-4">
        <div className="footer-widget text-center">
          <ul className="widget-list">
            <li>
              <a href="tel:01622 222 222">
                {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
                <div>
                  <FontAwesomeIcon className="fa-phone" icon={info.icon} />
                </div>

                <div className="details">
                  <h4 className="text-uppercase font-Av">
                    {Object.keys(info)[0] === "phone_number"
                      ? "call us"
                      : Object.keys(info)[0]}
                  </h4>
                  <p>{Object.values(info)[0]}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  });
  const renderSocialMedia = socialMedia.map((media, index) => {
    return (
      <li key={index}>
        <a href="#">
          {/* <i className="fa fa-twitter" aria-hidden="true"></i> */}
          <FontAwesomeIcon className="fa-social" icon={media} />
        </a>
      </li>
    );
  });
  return (
    <div className="footer">
      {window.location.pathname !== "/contact" && (
        <div className="main-footer sky-bg py-50">
          <div className="container">
            <div className="row">
              <h4 className="footer-title text-center text-uppercase">
                find us
              </h4>
              <div className="row">{renderStoreInfo}</div>
            </div>
          </div>
        </div>
      )}
      <div className="copyright-bar white-bg py-50">
        <div className="container">
          <ul className="social-media d-md-flex align-items-center justify-content-center">
            {renderSocialMedia}
          </ul>
          <p className="text-default text-center mb-0">
            CopyRight © 2022 Team 4 SWE. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
