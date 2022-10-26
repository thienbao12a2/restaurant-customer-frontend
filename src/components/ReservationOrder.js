import React, { useState, useEffect } from "react";
import { Functions } from "../lib";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

const { API_GetRequest } = Functions;
const ReservationOrder = () => {
  const [hours, setHours] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await API_GetRequest.onGetStoreHours();
      const { data } = response;
      setHours(data.store_hours);
    })();
  }, []);
  return (
    <div className="book-order-container">
      <div className="open-hours">
        <p>Kitchen Open</p>
        <span>: {`${hours}`}</span>
      </div>
      <div className="book-order">
        <button
          className="book-btn btn-font"
          onClick={() => setShowModal(true)}
        >
          Book a Table
        </button>
        <Link to="/order" className="book-btn order-btn btn-font">
          Order Online
        </Link>
      </div>
      <BookingModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ReservationOrder;
