import './App.css';
import React from 'react';
import NavBar from "./Components/Nav";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import BookingPage from './Components/BookingPage';
import BookingConfirmation from "./Components/BookingConfirmation"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./Components/Header";
// import Main from "./Components/Main";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* <Main /> */}
        <Footer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/Booking-confirmed" element={<BookingConfirmation />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;