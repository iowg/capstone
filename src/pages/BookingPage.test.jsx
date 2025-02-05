import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, jest } from "@jest/globals";
import BookingPage from "./BookingPage";

jest.mock("./BookingPage.css", () => ({}));
const mockAvailableTimes = ["17:00", "18:00", "19:00"];

test("Renders the BookingForm heading", () => {
  render(<BookingPage availableTimes={mockAvailableTimes} />);
  const headingElement = screen.getByText("Booking Page");
  expect(headingElement).toBeInTheDocument();
});
