import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { RotatingLines } from "react-loader-spinner";
import { Functions } from "../lib";
import moment from "moment-timezone";

const CheckoutModal = ({ showModal, setShowModal, selectedItems }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [empty, setEmpty] = useState(false);
  const [success, setSuccess] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const onOrderFood = async () => {
    const { API_PostRequest } = Functions;
    if (name && phoneNumber) {
      setSpinner(true);
      const orderID =
        String(Math.floor(100000 + Math.random() * 900000)) +
        String.fromCharCode(97 + Math.floor(Math.random() * 26));
      const response = await API_PostRequest.onOrderFood({
        timeStamp: moment().toISOString(),
        orderStatus: "Pending",
        orderID,
        name,
        phone_number: phoneNumber,
        items: [...selectedItems],
      });
      if (response.status === "success") {
        setTimeout(() => setSpinner(false), 3000);
        setTimeout(() => setSuccess(true), 3000);
        var timeoutID = setTimeout(() => setSuccess(false), 8000);
      }
      //   else {

      //   }
    } else {
      setEmpty(true);
      var timeoutID = setTimeout(() => setEmpty(false), 5000);

      return;
    }
  };

  return (
    <Modal
      className="modal-min"
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="text-center">
        <button
          type="button"
          className="close"
          onClick={() => setShowModal(false)}
        >
          <span aria-hidden="true">×</span>
        </button>
        <FontAwesomeIcon className="flaticon-calender" icon={faCartShopping} />
        <h1>Order For Pickup</h1>
        <p>Fill out your contact information below</p>
        <form method="post">
          <div className="ms-form-group has-icon">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <FontAwesomeIcon className="flaticon-user" icon={faUser} />
          </div>
          <div className="ms-form-group has-icon">
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control"
              name="phone-number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <FontAwesomeIcon className="flaticon-phone" icon={faPhone} />
          </div>
          <div className="mb-3">
            {spinner && (
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={true}
              />
            )}
          </div>
          {success ? (
            <>
              <p className="received-booking">We have received your order</p>
              <p className="received-booking">
                Please check your message for order confirmation.
              </p>
            </>
          ) : (
            empty && <p className="empty-form">Please complete the form.</p>
          )}
          <button
            type="button"
            className="book-btn btn-font"
            onClick={onOrderFood}
          >
            Submit Order
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CheckoutModal;
