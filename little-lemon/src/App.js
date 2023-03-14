import './App.css';
import React from 'react';
import NavBar from "./Components/Nav";
import Footer from "./Components/Footer";
import { Router, Routes, Route } from 'react-router';
// import Header from "./Components/Header";
// import Main from "./Components/Main";

function App() {
  return (
    < div className="App" >
      < NavBar />
      <Footer />
    </ div>
  );
}

export default App;
