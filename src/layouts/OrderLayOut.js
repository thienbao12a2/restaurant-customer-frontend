// import PropTypes from "prop-types";
import React from "react";
import { OrderHeader, Footer } from "../containers";

const OrderLayOut = ({
  categories,
  filterItems,
  selectedItems,
  onOrderFood,
  children,
  setShowModal,
}) => {
  return (
    <React.Fragment>
      <OrderHeader
        categories={categories}
        filterItems={filterItems}
        selectedItems={selectedItems}
        onOrderFood={onOrderFood}
        setShowModal={setShowModal}
      />
      {children}
      <Footer />
    </React.Fragment>
  );
};

// OrderLayOut.propTypes = {
//   children: PropTypes.any,
//   theme: PropTypes.string,
// };

export default OrderLayOut;
