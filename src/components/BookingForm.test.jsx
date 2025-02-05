import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, jest, beforeEach } from "@jest/globals";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "../utils/timeUtils";
import { fetchAPI } from "../utils/api";

jest.mock("../utils/api");

const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

beforeEach(() => {
  fetchAPI.mockReturnValue(mockTimes);
});

test("Renders the BookingForm heading", () => {
  const formData = {
    date: "",
    time: "",
    guests: 1,
    occasion: "No occasion",
  };
  const availableTimes = ["12:00", "13:00", "14:00"];
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const dispatch = jest.fn();

  render(
    <BookingForm
      formData={formData}
      availableTimes={availableTimes}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      dispatch={dispatch}
    />
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(mockTimes);
});

test("updateTimes returns updated times based on date change", () => {
  const state = initializeTimes();
  const action = { type: "DATE_CHANGE", payload: "2023-10-10" };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(mockTimes);
});

test("BookingForm can be submitted by the user", () => {
  const formData = {
    date: "2023-10-10",
    time: "12:00",
    guests: 2,
    occasion: "Birthday",
  };
  const handleChange = jest.fn();
  const handleSubmit = jest.fn((e) => e.preventDefault());
  const dispatch = jest.fn();

  render(
    <BookingForm
      formData={formData}
      availableTimes={mockTimes}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      dispatch={dispatch}
    />
  );

  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: "2023-10-11" },
  });
  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: "13:00" },
  });
  fireEvent.change(screen.getByLabelText(/guests/i), {
    target: { value: 3 },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Anniversary" },
  });

  fireEvent.click(screen.getByText("Make Your reservation"));

  expect(handleSubmit).toHaveBeenCalled();
});
