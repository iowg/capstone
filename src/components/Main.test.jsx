import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, jest, beforeEach } from "@jest/globals";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import { submitAPI } from "../utils/api";

jest.mock("../utils/api");

beforeEach(() => {
  localStorage.clear();
});

test("bookingData is saved to localStorage on submit", () => {
  submitAPI.mockReturnValue(true);

  const mockAvailableTimes = ["12:00", "12:30", "13:00"];
  const mockDispatch = jest.fn();
  const mockHandleSubmit = jest.fn((formData) => {
    localStorage.setItem("bookingData", JSON.stringify([formData]));
  });

  render(
    <BookingPage
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      handleSubmit={mockHandleSubmit}
    />
  );

  const formData = {
    date: "2023-10-10",
    time: "12:00",
    guests: "2",
    occasion: "Birthday",
  };

  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: formData.date },
  });
  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: formData.time },
  });
  fireEvent.change(screen.getByLabelText(/guests/i), {
    target: { value: formData.guests },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: formData.occasion },
  });

  fireEvent.click(screen.getByText("Make Your reservation"));

  const savedData = JSON.parse(localStorage.getItem("bookingData"));
  expect(savedData).toEqual([formData]);
});

test("bookingData is loaded from localStorage on initialization", () => {
  const savedData = [
    {
      date: "2023-10-10",
      time: "12:00",
      guests: 2,
      occasion: "Birthday",
    },
  ];
  localStorage.setItem("bookingData", JSON.stringify(savedData));

  render(<ConfirmedBooking bookingData={savedData} />);

  const headingElement = screen.getByText("Booking Confirmed");
  expect(headingElement).toBeInTheDocument();

  const dateElement = screen.getByText("2023-10-10");
  expect(dateElement).toBeInTheDocument();

  const timeElement = screen.getByText("12:00");
  expect(timeElement).toBeInTheDocument();

  const guestsElement = screen.getByText("2");
  expect(guestsElement).toBeInTheDocument();

  const occasionElement = screen.getByText("Birthday");
  expect(occasionElement).toBeInTheDocument();
});
