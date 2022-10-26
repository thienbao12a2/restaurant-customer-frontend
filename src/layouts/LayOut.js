// import PropTypes from "prop-types";
import React from "react";
import { Header, Footer } from "../containers";

const LayOut = ({ toggleHamburger, setToggleHamburger, children }) => {
  return (
    <React.Fragment>
      <Header
        toggleHamburger={toggleHamburger}
        setToggleHamburger={setToggleHamburger}
      />
      {children}
      <Footer />
    </React.Fragment>
  );
};

// LayOut.propTypes = {
//   children: PropTypes.any,
//   theme: PropTypes.string,
// };

export default LayOut;
