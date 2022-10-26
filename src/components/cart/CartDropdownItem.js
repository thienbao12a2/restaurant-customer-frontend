import React from "react";
import PropTypes from "prop-types";
import Icofont from "react-icofont";

class CartDropdownItem extends React.Component {
  render() {
    return (
      <div className="cart-item">
        <p className="mb-2">
          <Icofont
            icon={this.props.icoIcon}
            className={"mr-1 " + this.props.iconClass}
          />

          {`${this.props.quantity}x ${this.props.title}`}
        </p>
        <p className="float-right text-secondary">{this.props.price}</p>
      </div>
    );
  }
}

// CartDropdownItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   icoIcon: PropTypes.string.isRequired,
//   iconclass: PropTypes.string.isRequired,
// };

// CartDropdownItem.defaultProps = {
//   title: "",
//   price: "",
//   icoIcon: "",
//   iconclass: "",
// };

export default CartDropdownItem;
