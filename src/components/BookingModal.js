import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faPhone,
  faUser,
  faPersonCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import DateTimePicker from "react-datetime-picker";
import { RotatingLines } from "react-loader-spinner";
import { Functions } from "../lib";
import moment from "moment-timezone";

const BookingModal = ({ showModal, setShowModal }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [guest, setGuest] = useState("");
  const [empty, setEmpty] = useState(false);
  const [success, setSuccess] = useState(false);
  const [date, setDate] = useState(new Date());
  const [spinner, setSpinner] = useState(false);

  const onBookTable = async () => {
    const { API_PostRequest } = Functions;
    const reservationID =
      String(Math.floor(100000 + Math.random() * 900000)) +
      String.fromCharCode(97 + Math.floor(Math.random() * 26));
    if (name && phoneNumber && guest && date) {
      setSpinner(true);
      const response = await API_PostRequest.onBookTable({
        timeStamp: moment().toISOString(),
        reservationID,
        name,
        phone_number: phoneNumber,
        guest_number: guest,
        date: date.toString(),
      });
      if (response.status === "success") {
        setTimeout(() => setSpinner(false), 3000);
        setTimeout(() => setSuccess(true), 3000);
        var timeoutID = setTimeout(() => setSuccess(false), 8000);
      }
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
        {/* <i className="flaticon-secure-shield d-block" /> */}
        <FontAwesomeIcon className="flaticon-calender" icon={faCalendarCheck} />
        <h1>Reservation</h1>
        <p>Fill out the form below to reserve your table</p>
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
            {/* <i className="material-icons">email</i> */}
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
            {/* <i className="material-icons">email</i> */}
            <FontAwesomeIcon className="flaticon-phone" icon={faPhone} />
          </div>
          <div className="ms-form-group has-icon">
            <input
              type="text"
              placeholder="Party Size"
              className="form-control"
              name="guests"
              value={guest}
              onChange={(event) => setGuest(event.target.value)}
            />
            {/* <i className="material-icons">email</i> */}
            <FontAwesomeIcon
              className="flaticon-guest"
              icon={faPersonCircleQuestion}
            />
          </div>
          <div className="ms-form-group">
            <DateTimePicker
              className="form-control"
              onChange={setDate}
              value={date}
            />
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
            <p className="received-booking">
              We have received your reservation.
            </p>
          ) : (
            empty && <p className="empty-form">Please complete the form.</p>
          )}
          <button
            type="button"
            className="book-btn btn-font"
            onClick={onBookTable}
          >
            Book Now
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;
