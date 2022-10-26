import React from "react";
import { NavLink } from "react-router-dom";

const Link = () => {
  return (
    <React.Fragment>
      <NavLink to="/" className="link-style">
        Home
      </NavLink>
      <NavLink to="/menu" className="link-style">
        Menu
      </NavLink>
      <NavLink to="/gallery" className="link-style">
        Gallery
      </NavLink>
      <NavLink to="/contact" className="link-style">
        Contact Us
      </NavLink>
    </React.Fragment>
  );
};

export default Link;
