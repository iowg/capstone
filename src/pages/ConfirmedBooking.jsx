import React from "react";
import BookingSlot from "../components/BookingSlot";

function ConfirmedBooking({ bookingData }) {
  return (
    <div className="confirmed-booking-container">
      <h1>Booking Confirmed</h1>
      <p>Your booking has been successfully confirmed. Thank you!</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Occasion</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((data, index) => (
            <BookingSlot key={index} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConfirmedBooking;
