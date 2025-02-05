import React from "react";

function BookingForm({
  formData,
  handleChange,
  availableTimes,
  handleSubmit,
  dispatch,
}) {
  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <h2>Book Now</h2>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        aria-label="Choose date"
        value={formData.date}
        onChange={(e) => {
          handleChange(e);
          dispatch({ type: "DATE_CHANGE", payload: e.target.value });
        }}
        required
      />
      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        aria-label="Choose time"
        value={formData.time}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        aria-label="Number of guests"
        value={formData.guests}
        onChange={handleChange}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        aria-label="Occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="No occasion">No occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
