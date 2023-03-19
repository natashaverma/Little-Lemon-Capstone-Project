import { fireEvent, render, screen } from "@testing-library/react";
// import BookingForm from './BookingForm';
import BookingPage from "./Components/BookingPage";

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})
test("update time correctly", () => {
  render(<BookingPage />);
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: { value: "2023-02-05" } } });
  const timeDropDown = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeDropDown, { target: { value: "17:00" } })
  expect(timeDropDown.value).toEqual("17:00")
})
