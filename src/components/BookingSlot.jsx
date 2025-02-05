import React from "react";

function BookingSlot({ data }) {
  return (
    <tr>
      <td>{data.date}</td>
      <td>{data.time}</td>
      <td>{data.guests}</td>
      <td>{data.occasion}</td>
    </tr>
  );
}

export default BookingSlot;
