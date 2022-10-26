import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { images } from "../assets";

const Instagram = () => {
  const { instagram_images } = images;
  const renderInstagramImages = instagram_images.map((image, index) => {
    return (
      <div key={index} className="col-lg-3 p-0 col-md-6">
        <div className="insta-box">
          <img src={image} alt="instagram-img" />
          <div className="overlay">
            <FontAwesomeIcon
              className="quote-and-name fa fa-instagram"
              icon={faInstagram}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="instagram-gallery-bar pt-5">
        <div className="container">
          <h4 className="primary-title text-uppercase">instagram gallery</h4>
          <h6 className="text-center">
            <a
              href="https://www.instagram.com/empiresteakhouse2/"
              className="text-gray"
            >
              @ monster-food{" "}
            </a>
          </h6>
        </div>
        <div className="container-fluid mt-5 p-0">
          <div className="row m-0">{renderInstagramImages}</div>
        </div>
      </div>
      <div className="rule-war py-130 primary-bg border-zigzag-up">
        <div className="container">
          <h4 className="text-white text-center mb-0">
            Rule were their evening in lesser so good said they're fowl greater.
            <br /> Sixth their above kind male there also likeness great there
            own.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
