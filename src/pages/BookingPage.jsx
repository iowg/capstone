import React from "react";
import { useState } from "react";
import BookingForm from "../components/BookingForm";
import "./BookingPage.css";

function BookingPage({ availableTimes, dispatch, handleSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    time: availableTimes?.[0] || "",
    guests: 1,
    occasion: "No occasion",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div className="booking-container">
      <h1>Booking Page</h1>
      <BookingForm
        formData={formData}
        availableTimes={availableTimes}
        handleChange={handleChange}
        handleSubmit={onSubmit}
        dispatch={dispatch}
      />
    </div>
  );
}

export default BookingPage;
