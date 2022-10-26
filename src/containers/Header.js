import React, { useState } from "react";
import { Link, BookingModal } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import assets from "../assets/images";

const Header = ({ toggleHamburger, setToggleHamburger }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app__header">
      <img src={assets.logo1} alt="logo" className="app__header-logo" />
      <div className="app__header-menu">
        <div className="app__header-navigation">
          <Link />
        </div>
        {/* <div className="story-btn">
          <NavLink to="/order" className="slider_btn_one more-link">
            Order Online
          </NavLink>
        </div> */}
        <button
          className="book-btn btn-font"
          onClick={() => setShowModal(true)}
        >
          Book a Table
        </button>
        <div className="app__header-hamburger-menu">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleHamburger(true)}
          />
          {toggleHamburger && (
            <div className="app__header-hamburger-menu_overlay">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleHamburger(false)}
              />
              <Link />
            </div>
          )}
        </div>
      </div>
      <BookingModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Header;
