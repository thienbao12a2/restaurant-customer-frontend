import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets";

const AboutRestaurant = () => {
  const { story1, story2 } = images;
  return (
    <section className="py-110 about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="story-img-bar">
                  <img src={`${story1}`} alt="story-img-1" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="story-img-bar mt-5">
                  <img src={`${story2}`} alt="story-img-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="story-header ps-lg-4">
              <h5 className="mb-0 text-start primary">Discover</h5>
              <h1 className="text-uppercase">Our Story</h1>
              <p className="tell-story mb-5">
                Multiply isn't night sixth under second second open he darkness
                said beast, without whales every herb sea place light life from
                divide isn't. Deep give greater. Darkness have fifth third open
                over itself. Third great make form is waters were. Midst green
                very.{" "}
              </p>
              <div className="story-btn">
                <Link to="/about" className="slider_btn_one more-link">
                  Read our full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRestaurant;
