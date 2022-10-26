import React from "react";
import { Link } from "react-router-dom";
import { Image, Badge, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Icofont from "react-icofont";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.item.quantity || 0,
      show: this.props.show || true,
      max: this.props.maxValue || 999,
      min: this.props.minValue || 0,
    };
  }
  //   componentWillReceiveProps(nextProps, prevState) {
  //     this.setState({
  //       quantity: nextProps.quantity,
  //     });
  //   }
  componentWillReceiveProps(nextProps, prevState) {
    const { selectedItems, item } = this.props;
    const filteredItem = selectedItems.filter(
      (selectedItem) => selectedItem._id === item._id
    );

    if (filteredItem.length > 0) {
      this.setState({ quantity: filteredItem[0].quantity });
    }
  }
  IncrementItem = () => {
    const { onSelectItems, item, getValue } = this.props;

    if (this.state.quantity >= this.state.max) {
      return;
    } else {
      if (this.state.quantity === 0) {
        onSelectItems({ ...item, quantity: 0 });
      }
      this.setState(
        {
          quantity: this.state.quantity + 1,
        },
        () => getValue({ ...item, quantity: this.state.quantity })
      );
    }
  };
  DecreaseItem = () => {
    const { onDeleteItems, item, getValue } = this.props;
    if (this.state.quantity <= this.state.min) {
      return;
    } else {
      this.setState({ quantity: this.state.quantity - 1 }, () => {
        getValue({ ...item, quantity: this.state.quantity });
        if (this.state.quantity === 0) {
          onDeleteItems(item);
        }
      });
    }
  };

  render() {
    return (
      <div className="list-card bg-white h-100 rounded overflow-hidden position-relative main-menu-list">
        <div className="list-card-image">
          {/* {this.props.rating ? (
            <div className="star position-absolute">
              <Badge variant="success">
                <Icofont icon="star" /> {this.props.rating}
              </Badge>
            </div>
          ) : (
            ""
          )} */}
          {/* <div
            className={`favourite-heart position-absolute ${this.props.favIcoIconColor}`}
          >
            <Link to="#">
              <Icofont icon="heart" />
            </Link>
          </div> */}
          {this.props.showPromoted ? (
            <div className="member-plan position-absolute">
              <Badge variant={this.props.promotedVariant}>Promotion</Badge>
            </div>
          ) : (
            ""
          )}
          <Link to="#">
            <Image
              src={this.props.image}
              className={this.props.imageClass}
              alt={this.props.imageAlt}
            />
          </Link>
        </div>
        <div className="p-3 position-relative">
          <div className="list-card-body">
            <h6 className="mb-1">
              <Link to="#" className="text-black item-name">
                {this.props.title}
              </Link>
            </h6>
            {this.props.subTitle ? (
              <p className="text-gray mb-3">{this.props.subTitle}</p>
            ) : (
              ""
            )}
            {this.props.price ? (
              <p className="text-gray time mb-0 price-and-add">
                <Link
                  className="btn btn-link btn-sm pl-0 text-black pr-0"
                  to="#"
                >
                  {this.props.priceUnit}
                  {this.props.price}{" "}
                </Link>
                {this.props.isNew ? (
                  <Badge variant="success" className="ml-1">
                    New
                  </Badge>
                ) : (
                  ""
                )}

                {this.state.quantity === 0 ? (
                  <span className="float-right">
                    <Button
                      variant="outline-secondary"
                      onClick={this.IncrementItem}
                      size="sm"
                    >
                      Add
                    </Button>
                  </span>
                ) : (
                  <span className="count-number float-right">
                    <Button
                      variant="outline-secondary"
                      onClick={this.DecreaseItem}
                      className="btn-sm left dec"
                    >
                      {" "}
                      <Icofont icon="minus" />{" "}
                    </Button>
                    <input
                      className="count-number-input quantity-item"
                      type="text"
                      value={
                        // !decreasing
                        //   ? updateQuantity > this.state.quantity
                        //     ? updateQuantity
                        //     : this.state.quantity
                        //   : updateQuantity < this.state.quantity
                        //   ? updateQuantity
                        //   : this.state.quantity
                        this.state.quantity
                      }
                      readOnly
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={this.IncrementItem}
                      className="btn-sm right inc"
                    >
                      {" "}
                      <Icofont icon="icofont-plus" />{" "}
                    </Button>
                  </span>
                )}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageClass: PropTypes.string,
  isNew: PropTypes.bool,
  subTitle: PropTypes.string,
  price: PropTypes.number.isRequired,
  priceUnit: PropTypes.string.isRequired,
  showPromoted: PropTypes.bool,
  promotedVariant: PropTypes.string,
  favIcoIconColor: PropTypes.string,
  rating: PropTypes.string,
  id: PropTypes.number.isRequired,
  qty: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  getValue: PropTypes.func.isRequired,
};
Item.defaultProps = {
  imageAlt: "",
  imageClass: "",
  isNew: false,
  subTitle: "",
  price: "",
  priceUnit: "$",
  showPromoted: false,
  promotedVariant: "dark",
  favIcoIconColor: "",
  rating: "",
};

export default Item;
