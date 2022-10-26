import React, { useState } from "react";
import LayOut from "../layouts/LayOut";
import {
  Slides,
  About,
  Gallery,
  Testimonial,
  PrivateDining,
  Menu,
  ReservationOrder,
  Instagram,
} from "../components";

const Home = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  return (
    <LayOut
      toggleHamburger={toggleHamburger}
      setToggleHamburger={setToggleHamburger}
    >
      {!toggleHamburger && (
        <React.Fragment>
          <Slides />
          <About />
          <Gallery />
          <Testimonial />
          <PrivateDining />
          <Menu />
          <ReservationOrder />
          <Instagram />
        </React.Fragment>
      )}
    </LayOut>
  );
};

export default Home;
