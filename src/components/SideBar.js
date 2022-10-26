import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Image, Button } from "react-bootstrap";
import CheckoutItem from "./CheckoutItem";
import Icofont from "react-icofont";
import { images } from "../assets";

class SideBar extends React.Component {
  renderItemsInCart() {
    const { selectedItems, getQty, onDeleteItems } = this.props;

    return selectedItems.map((item, index) => {
      if (item.quantity) {
        return (
          <div className="bg-white rounded shadow mb-2" key={index}>
            <CheckoutItem
              item={item}
              itemName={item.item_name}
              price={item.price}
              priceUnit="$"
              id={index}
              quantity={item.quantity}
              show={true}
              minValue={0}
              maxValue={999}
              getValue={getQty}
              onDeleteItems={onDeleteItems}
            />
          </div>
        );
      }
    });
  }
  calculateSubtotal() {
    const { selectedItems } = this.props;
    let subTotal = 0;
    selectedItems.map(({ price, quantity }) => {
      subTotal = subTotal + price * quantity;
    });
    return subTotal;
  }
  render() {
    const { getQty, selectedItems, setShowModal } = this.props;
    const { offer_image, wallet_icon } = images;
    return (
      <Col md={4}>
        <div className="sidebar-item">
          <div className="make-me-sticky">
            <div className="bg-white rounded sidebar-shadow text-white mb-4 p-4 clearfix restaurant-detailed-earn-pts card-icon-overlap">
              <Image fluid className="float-left mr-3" src={offer_image} />
              <h6 className="pt-0 mb-1 ">OFFER</h6>
              <p className="mb-0">
                60% off on orders above $99 Use coupon{" "}
                <span className="text-danger font-weight-bold">
                  TEAM4SWE2022
                </span>
              </p>
              <div className="icon-overlap">
                <Icofont icon="sale-discount" />
              </div>
            </div>
            <div className="checkout-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
              <h5 className="mb-1 text-white">Your Order</h5>
              <p className="mb-4 text-white">{`${selectedItems.length} Items`}</p>
              {selectedItems.length > 0 && this.renderItemsInCart()}
              {/* <div className="bg-white rounded shadow mb-2">
                <CheckoutItem
                  itemName="Chicken Tikka Sub"
                  price={314}
                  priceUnit="$"
                  id={1}
                  qty={2}
                  show={true}
                  minValue={0}
                  maxValue={7}
                  getValue={getQty}
                />
                <CheckoutItem
                  itemName="Cheese corn Roll"
                  price={260}
                  priceUnit="$"
                  id={2}
                  qty={1}
                  show={true}
                  minValue={0}
                  maxValue={7}
                  getValue={getQty}
                />
                <CheckoutItem
                  itemName="Mixed Veg"
                  price={122}
                  priceUnit="$"
                  id={3}
                  qty={1}
                  show={true}
                  minValue={0}
                  maxValue={7}
                  getValue={getQty}
                />
                <CheckoutItem
                  itemName="Black Dal Makhani"
                  price={652}
                  priceUnit="$"
                  id={1}
                  qty={1}
                  show={true}
                  minValue={0}
                  maxValue={7}
                  getValue={getQty}
                />
                <CheckoutItem
                  itemName="Mixed Veg"
                  price={122}
                  priceUnit="$"
                  id={4}
                  qty={1}
                  show={true}
                  minValue={0}
                  maxValue={7}
                  getValue={getQty}
                />
              </div> */}
              <div className="mb-2 bg-white rounded p-2 clearfix">
                <Image fluid className="float-left" src={wallet_icon} />
                <h6 className="font-weight-bold text-right mb-2">
                  Sub Total :{" "}
                  <span className="text-danger">{`$${this.calculateSubtotal().toFixed(
                    2
                  )}`}</span>
                </h6>
                <p className="seven-color mb-1 text-right">
                  Extra charges may apply
                </p>
                {/* <p className="text-black mb-0 text-right">
                  You have saved $955 on the bill
                </p> */}
              </div>
              <Button
                onClick={() => setShowModal(true)}
                className="btn btn-success btn-block btn-lg"
              >
                Order For Pickup
                <Icofont icon="long-arrow-right" />
              </Button>
              <div className="pt-2"></div>
              <div className="alert alert-success" role="alert">
                You have saved <strong>$1,884</strong> on the bill
              </div>
              <div className="pt-2"></div>
              {/* <div className="text-center pt-2">
                <Image
                  fluid
                  src="https://dummyimage.com/352x504/ccc/ffffff.png&text=Google+ads"
                />
              </div>
              <div className="text-center pt-2">
                <Image
                  fluid
                  src="https://dummyimage.com/352x504/ccc/ffffff.png&text=Google+ads"
                />
              </div> */}
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default SideBar;
