import './App.css';
import React from 'react';
import NavBar from "./Components/Nav";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./Components/Header";
// import Main from "./Components/Main";

function App() {
  // return (
  //   < div className="App" >
  //     < NavBar />
  //     <Footer />
  //   </ div>
  // );

  return (
    <Router>
      <div>
        <NavBar />
        <Footer />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;