import React, { useReducer, useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import ChicagoPage from "../pages/ChicagoPage";
import CustomersPage from "../pages/CustomersPage";
import SpecialsPage from "../pages/SpecialsPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import { initializeTimes, updateTimes } from "../utils/timeUtils";
import { submitAPI } from "../utils/api";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "DATE_CHANGE":
      return updateTimes(state, action);
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(() => {
    const savedData = localStorage.getItem("bookingData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  const handleSubmit = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      setBookingData([...bookingData, formData]);
      navigate("/confirmed");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <main>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage availableTimes={availableTimes} />}
        />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking bookingData={bookingData} />}
        />
        <Route path="/chicago" element={<ChicagoPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/specials" element={<SpecialsPage />} />
      </Routes>
    </main>
  );
}

export default Main;
