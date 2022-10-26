import React from "react";
import PropTypes from "prop-types";
import { Image, Button } from "react-bootstrap";

class MayLikeItem extends React.Component {
  addItem() {
    console.log(1);
    const { selectedItems, item } = this.props;
    const addedItem = selectedItems.filter((selectedItem) => {
      return selectedItem._id === item._id;
    });
    return addedItem.length;
  }
  render() {
    const { onSelectItems, item } = this.props;
    return (
      <div className={"position-relative border-0 " + this.props.boxClass}>
        <Button
          onClick={() => onSelectItems({ ...item, quantity: 1 })}
          className={
            this.addItem() > 0
              ? "btn btn-primary btn-sm position-absolute gray-button"
              : "btn btn-primary btn-sm position-absolute"
          }
          disabled={this.addItem()}
        >
          Add
        </Button>
        <Image
          src={this.props.image}
          className={this.props.imageClass}
          alt={this.props.imageAlt}
        />
        {this.props.title ? <h6>{this.props.title}</h6> : ""}
        {this.props.price ? <small>{this.props.price}</small> : ""}
      </div>
    );
  }
}

MayLikeItem.propTypes = {
  onAdd: PropTypes.func,
  image: PropTypes.string.isRequired,
  imageClass: PropTypes.string,
  imageAlt: PropTypes.string,
  boxClass: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};
MayLikeItem.defaultProps = {
  imageAlt: "",
  image: "",
  imageClass: "",
  boxClass: "mall-category-item",
  title: "",
  price: "",
};

export default MayLikeItem;
