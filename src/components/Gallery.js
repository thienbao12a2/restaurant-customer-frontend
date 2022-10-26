import React from "react";
import { NavLink } from "react-router-dom";
import { images } from "../assets";

const Gallery = () => {
  const { gallery_left_1, gallery_right_1 } = images;
  return (
    <section className="gallery-block py-110 gallery-background">
      <div className="container">
        <div className="row mx-0 ">
          <div className="col-lg-4 col-md-12">
            <div className="gallery-width-and-border">
              <img
                src={gallery_left_1}
                alt="gallery_left"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <NavLink to="/gallery" className="gallery-content border-5">
              <h5 className="gallery-text mb-0">View our</h5>
              <h2 className="text-white text-uppercase">Gallery</h2>
              <p>food & Venue</p>
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="gallery-bar gallery-width-and-border">
              <img
                src={gallery_right_1}
                alt="gallery_right"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
